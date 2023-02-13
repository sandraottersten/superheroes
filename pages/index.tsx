import Head from 'next/head'
import { useState, useEffect } from 'react'
import { SuperHero } from '@/types/superhero'
import Card from '@/components/Card'
import Menu from '@/components/Menu'
import Search from '@/components/Search'
import Hero from '@/components/Hero'
import Pagination from '@/components/Pagination'
import { useStorage } from '@/contexts/context'

interface Props {
  data: SuperHero[]
}

const menuItems = [
  { title: 'The whole bunch', subItems: [], icon: 'flash' },
  {
    title: 'Publishers',
    subItems: [
      'Marvel Comics',
      'DC Comics',
      'Dark Horse Comics',
      'Icon Comics',
    ],
    icon: 'paper',
  },
  { title: 'My squad', subItems: [], icon: 'heart' },
]

const Home = ({ data }: Props) => {
  const { myHeroes, setMyHeroes } = useStorage()
  const [heroes, setHeroes] = useState(data)
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(24)
  const [selectedMenuItem, setSelectedMenuItem] = useState({
    item: 0,
    sub: -1,
  })

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = heroes.slice(indexOfFirstCard, indexOfLastCard)

  const gridTitle =
    menuItems[selectedMenuItem.item].subItems.length > 0
      ? menuItems[selectedMenuItem.item].subItems[selectedMenuItem.sub]
      : menuItems[selectedMenuItem.item].title

  useEffect(() => {
    if (selectedMenuItem.item === 0) setHeroes(data)
    else if (selectedMenuItem.item === 1 && selectedMenuItem.sub !== -1)
      setHeroes(
        data.filter(
          (x) =>
            x.biography.publisher ===
            menuItems[selectedMenuItem.item].subItems[selectedMenuItem.sub],
        ),
      )
    else if (selectedMenuItem.item === 2)
      setHeroes(data.filter((x) => myHeroes.includes(x.id)))
  }, [selectedMenuItem])

  return (
    <>
      <Head>
        <title>Awesome superheroes</title>
        <meta
          name="description"
          content="Discover all the awesome superheroes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light">
        <Hero />
        <section
          id="heroes"
          className="flex px-12 py-24 relative min-h-[68rem] border-b border-dark"
        >
          <Menu
            menuItems={menuItems}
            active={selectedMenuItem}
            onClick={setSelectedMenuItem}
          />
          <div className="flex flex-col items-center w-full flex-1">
            <h2 className="font-bebas uppercase text-[46px] h-[69px]">
              {gridTitle || '...?'}
            </h2>
            <Search value={searchValue} onChange={setSearchValue} />
            <div className="grid grid-cols-4 gap-4 w-[900px] min-w-[900px] mb-12">
              {currentCards
                .filter((x) =>
                  x.name
                    .toLowerCase()
                    .includes(searchValue.toLocaleLowerCase()),
                )
                .map((hero) => (
                  <Card
                    key={hero.id}
                    hero={hero}
                    myHero={myHeroes.includes(hero.id)}
                  />
                ))}
            </div>
            {!searchValue && (
              <Pagination
                currentPage={currentPage}
                cardsPerPage={cardsPerPage}
                totalCards={heroes.length}
                paginate={setCurrentPage}
              />
            )}
          </div>
          <div className="absolute flex bottom-0 left-0 items-baseline gap-4">
            <div className="w-[86px] h-[362px] bg-yellow border-x border-t border-dark" />
            <div className="w-[86px] h-[300px] bg-yellow border-x border-t border-dark" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://akabab.github.io/superhero-api/api/all.json',
    )
    if (!res) {
      return { notFound: true }
    }
    const data = await res.json()
    return { props: { data } }
  } catch (error) {
    return { notFound: true }
  }
}

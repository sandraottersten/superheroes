import Head from 'next/head'
import Link from 'next/link'
import { GetServerSidePropsContext } from 'next'
import { PowerStats, SuperHero } from '@/types/superhero'
import Image from 'next/image'
import PowerStat from '@/components/PowerStat'
import Info from '@/components/Info'
import { IconArrowLeft, IconHeart } from '@/utils/svgIcons'
import { useStorage } from '@/contexts/context'

interface Props {
  data: SuperHero
}

const powerStatCategories = [
  { title: 'Combat', key: 'combat' },
  { title: 'Strength', key: 'strength' },
  { title: 'Durability', key: 'durability' },
  { title: 'Power', key: 'power' },
  { title: 'Speed', key: 'speed' },
  { title: 'Intelligence', key: 'intelligence' },
]

const SingleHero = ({ data }: Props) => {
  const { myHeroes, setMyHeroes } = useStorage()

  const chooseHero = () => {
    const index = myHeroes.indexOf(data.id)
    if (index === -1) setMyHeroes([...myHeroes, data.id])
    else {
      const updatedHeroes = [...myHeroes]
      updatedHeroes.splice(index, 1)
      setMyHeroes(updatedHeroes)
    }
  }

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content={data.work.occupation} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex bg-light h-full border-b border-dark pr-56">
        <section className="w-3/5 flex-1">
          <div className="pl-24 py-12 ">
            <div className="flex justify-between items-center pr-20">
              <Link href="/">
                <div className="flex items-center group">
                  <span className="group-hover:-translate-x-1 duration-200">
                    <IconArrowLeft size={'24'} strokeColor={'#0A0909'} />
                  </span>
                  <span className="font-roboto font-bold text-lg group-hover:text-orange">
                    Go back
                  </span>
                </div>
              </Link>
              <button
                onClick={chooseHero}
                className={`flex items-center justify-center h-8 w-12 rounded-full ${
                  myHeroes.includes(data.id) ? 'bg-orange' : 'bg-gray'
                }`}
              >
                <IconHeart size={'24'} strokeColor={'#F9EEDB'} />
              </button>
            </div>
            <div className="flex flex-col relative">
              <h1 className="font-bebas text-[140px] leading-none pt-20">
                {data.name}
              </h1>
              {data.biography.aliases.map((name, i) => (
                <span
                  key={'alias' + i}
                  className="text-[40px] font-bebas text-orange leading-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full border-t border-dark " />
          <Info hero={data} />
        </section>
        <section className="w-[340px] py-24 z-40">
          <div className="bg-yellow p-12 mb-20">
            <Image
              src={data.images.lg}
              alt={data.name}
              width="285"
              height="380"
            />
          </div>

          <div className="flex flex-col gap-4">
            {powerStatCategories.map((item, i) => (
              <PowerStat
                key={'powerstat' + i}
                title={item.title}
                value={data.powerstats[item.key as keyof PowerStats]}
              />
            ))}
          </div>
        </section>
        <div className="absolute flex top-0 right-0 items-baseline gap-4 h-full">
          <div className="w-[86px] h-full bg-beige" />
          <div className="w-[86px] h-full bg-beige" />
          <div className="w-[86px] h-full bg-beige" />
          <div className="w-[86px] h-full bg-beige" />
        </div>
      </main>
    </>
  )
}

export default SingleHero

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const res = await fetch(
      `https://akabab.github.io/superhero-api/api/id/${context?.params?.id}.json`,
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

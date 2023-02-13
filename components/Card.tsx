import { SuperHero } from '@/types/superhero'
import { IconHeart } from '@/utils/svgIcons'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  hero: SuperHero
  myHero: boolean
}

const Card = ({ hero, myHero }: Props) => {
  return (
    <Link href={hero.id.toString()}>
      <div className="border border-dark hover:border-orange p-4 pb-6 flex flex-col w-max hover:-translate-y-2 duration-200 hover:translate-x-2 cursor-pointer">
        <Image src={hero.images.md} alt={hero.name} width="180" height="238" />
        <div className="flex justify-between items-center">
          <span className="font-bebas text-xl mt-1">{hero.name}</span>
          {myHero && <IconHeart size={'24'} strokeColor={'#E57D42'} />}
        </div>
      </div>
    </Link>
  )
}

export default Card

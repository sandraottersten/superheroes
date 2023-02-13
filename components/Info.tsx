import { SuperHero } from '@/types/superhero'

interface Props {
  hero: SuperHero
}

const Info = ({ hero }: Props) => {
  return (
    <div className="flex flex-col w-[800px] font-roboto font-bold px-24 py-16">
      <div className="flex">
        <span className="min-w-[300px]">Full name:</span>
        <span>{hero.biography.fullName}</span>
      </div>
      <div className="flex">
        <span className="min-w-[300px]">Race:</span>
        <span>{hero.appearance.race}</span>
      </div>
      <div className="flex">
        <span className="min-w-[300px]">Place of birth:</span>
        <span>{hero.biography.placeOfBirth}</span>
      </div>
      <div className="flex">
        <span className="min-w-[300px]">First appearance:</span>
        <span>{hero.biography.firstAppearance}</span>
      </div>
      <div className="flex">
        <span className="min-w-[300px]">Publisher:</span>
        <span>{hero.biography.publisher}</span>
      </div>
      <div className="flex mt-6">
        <span className="min-w-[300px]">Occupation:</span>
        <span>{hero.work.occupation}</span>
      </div>
      <div className="flex">
        <span className="min-w-[300px]">Base:</span>
        <span>{hero.work.base}</span>
      </div>
      <div className="flex mt-6">
        <span className="min-w-[300px]">Group affiliation:</span>
        <span>{hero.connections.groupAffiliation}</span>
      </div>
      <div className="flex">
        <span className="min-w-[300px]">Relatives:</span>
        <span>{hero.connections.relatives}</span>
      </div>
    </div>
  )
}

export default Info

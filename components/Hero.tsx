import Button from '@/components/Button'
import HeroesOnAThread from './HeroesOnAThread'

const Hero = () => {
  return (
    <section className="relative py-28 h-[calc(100vh-80px)] border-b border-dark flex flex-col items-center justify-start">
      <HeroesOnAThread />
      <h1 className=" flex flex-col uppercase font-bebas w-[56rem]">
        <span className="text-[56px] leading-none text-darkgray translate-x-[11rem]">
          Awesome facts about
        </span>
        <span className="text-[160px] leading-none">the greatest</span>
        <span className="text-[160px] leading-none text-yellow text-stroke -translate-y-[3rem] translate-x-[12rem]">
          super heroes
        </span>
      </h1>
      <p className="w-[560px] font-roboto font-bold mb-12">
        {
          'A superhero is a character with extraordinary powers that performs heroic actions. Unlike police, firefighters or doctors, all of whom are heroes in their own right, superheroes are defined by their unique capabilities, such flight, strength, speed or invincibility (to name a few).'
        }
      </p>
      <Button
        onClick={() => {
          const element = document.getElementById('heroes')
          element?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        {" Let's go"}
      </Button>
      <div className="absolute flex bottom-0 right-0 items-baseline gap-4">
        <div className="w-[86px] h-[262px] bg-gray border-x border-t border-dark" />
        <div className="w-[86px] h-[362px] bg-yellow border-x border-t border-dark" />
        <div className="w-[86px] h-[362px] bg-yellow border-x border-t border-dark" />
      </div>
    </section>
  )
}

export default Hero

import Head from 'next/head'
import { PowerStats, SuperHero } from '@/types/superhero'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PowerStat from '@/components/PowerStat'
import { IconArrowLeft, IconHeart } from '@/utils/svgIcons'
import Info from '@/components/Info'
import { useState } from 'react'
import Button from '@/components/Button'

const Games = () => {
  return (
    <>
      <Head>
        <title>Games</title>
        <meta name="description" content="Enjoy some random games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex bg-light border-b border-dark h-[calc(100vh-80px)]">
        <section className="w-full flex justify-center items-center flex-col text-center">
          <h1 className="font-bebas text-[120px] leading-none">
            Well, not much to see here.
          </h1>
          <p className="font-roboto text-xl font-bold mb-12">
            {'(But definitly a page with potential)'}
          </p>
          <Link href="/#heroes">
            <Button>Back to the heroes</Button>
          </Link>
        </section>
      </main>
    </>
  )
}

export default Games

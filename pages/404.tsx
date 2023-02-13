import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
  return (
    <main className="bg-light flex justify-center py-28 h-[calc(100vh-80px) border-b border-dark]">
      <div className="w-[400px]">
        <h1 className="font-bebas text-[160px]">404</h1>
        <h1 className="font-bebas text-[50px] leading-none mb-4">
          Oh damn, Something went wrong
        </h1>
        <Link href="/">
          <span className="hover:text-orange text-lg">{"Let's try again"}</span>
        </Link>
      </div>
      <Image src="/boom.png" alt="Boom" width="500" height="300" />
    </main>
  )
}

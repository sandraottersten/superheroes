import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const handleClickScroll = () => {
  const element = document.getElementById('heroes')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <nav className="flex justify-between items-center px-24 bg-dark h-20">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width="146" height="25" />
        </Link>
        <ul className="flex gap-8  text-light">
          <li className="hover:text-orange">
            <Link href="/#heroes">Heroes</Link>
          </li>
          <li className="hover:text-orange">
            <Link href="/games">Games</Link>
          </li>
        </ul>
      </nav>
      {children}
      <footer className="text-sm bg-light h-44 p-8 gap-4 flex flex-col justify-end items-center">
        <Image src="/logo.svg" alt="Logo" width="146" height="25" />
        <span>© 2023 Interactive Kaboom Inc</span>
      </footer>
    </>
  )
}

export default Layout

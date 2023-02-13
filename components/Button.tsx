import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-40 h-12 border border-dark -translate-x-2 translate-y-2" />
      <button
        className="relative font-roboto text-lg w-40 h-12 bg-orange text-light flex justify-center items-center z-10 hover:translate-x-1 hover:-translate-y-1 duration-200"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default Button

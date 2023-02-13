import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

type MyHeroes = {
  myHeroes: number[]
  setMyHeroes: Dispatch<SetStateAction<number[]>>
}

const Context = createContext<MyHeroes>({
  myHeroes: [],
  setMyHeroes: () => {},
})

interface Props {
  children: ReactNode
}

export const Provider = ({ children }: Props) => {
  const [myHeroes, setMyHeroes] = useState<number[]>([])

  return (
    <Context.Provider value={{ myHeroes, setMyHeroes }}>
      {children}
    </Context.Provider>
  )
}

export const useStorage = () => useContext(Context)

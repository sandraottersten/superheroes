import { useEffect, useState, ChangeEvent } from 'react'
import { IconSearch, IconClose } from '@/utils/svgIcons'

interface Props {
  value?: string
  placeholder?: string
  onChange: (value: string) => void
}

const Search = ({ placeholder, value, onChange }: Props) => {
  return (
    <div className="flex relative items-center border border-dark rounded-full px-2 my-8">
      <IconSearch size="24" strokeColor="#0A0909" />
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`peer w-full h-10 pr-4 ml-2 bg-light caret-dark text-base font-light text-dark focus:outline-none`}
      />
      <button
        className={`${value ? `opacity-100` : `opacity-0 pointer-events-none`}`}
        onClick={() => onChange('')}
      >
        <IconClose size="24" strokeColor="#0A0909" />
      </button>
    </div>
  )
}

export default Search

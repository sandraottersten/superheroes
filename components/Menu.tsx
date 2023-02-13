import { MenuItem } from '@/types/menuItems'
import { IconFlash, IconHeart, IconPaper } from '@/utils/svgIcons'
import { useState } from 'react'

interface Props {
  active: any
  menuItems: MenuItem[]
  onClick: (value: any) => void
}

const Icon = ({ type }: { type: string }) => {
  switch (type) {
    case 'paper':
      return <IconPaper size={'24'} strokeColor={'#0A0909'} />
    case 'heart':
      return <IconHeart size={'24'} strokeColor={'#0A0909'} />
    case 'flash':
      return <IconFlash size={'24'} strokeColor={'#0A0909'} />

    default:
      return <IconFlash size={'24'} strokeColor={'#0A0909'} />
  }
}

const Menu = ({ menuItems, active, onClick }: Props) => {
  const [openMenu, setOpenMenu] = useState(-1)

  const openMenuHandler = (i: number) => {
    openMenu === i ? setOpenMenu(-1) : setOpenMenu(i)
  }

  return (
    <div className="w-[340px] flex flex-col font-roboto">
      <p>
        {
          "Some superheroes use their powers to help fight daily crime while also combating threats against humanity from who are their criminal counterparts. Often at least one of these supervillains will be the superhero's or nemesis."
        }
      </p>
      <div className="w-[220px] flex flex-col gap-4 font-roboto mt-14">
        {menuItems.map((item, i) => {
          return (
            <div key={'menuitem' + i}>
              <div
                className={`flex flex-col justify-center border w-full border-dark cursor-pointer text-lg px-4 hover:bg-beige h-12 ${
                  active.item === i && 'bg-orange hover:bg-orange'
                }`}
                onClick={() => {
                  onClick({ item: i, sub: -1 })
                  item.subItems.length !== 0 && openMenuHandler(i)
                }}
              >
                <div className="flex items-center">
                  <Icon type={item.icon} />
                  <span className="ml-2">{item.title}</span>
                </div>
              </div>

              {item.subItems.length > 0 && openMenu === i && (
                <ul className="pt-4">
                  {item.subItems.map((subItem, x) => (
                    <li
                      key={'subItem' + x}
                      className={`pl-8 py-2 hover:text-orange cursor-pointer ${
                        active.sub === x ? 'text-orange' : 'text-dark'
                      }`}
                      onClick={() => onClick({ item: i, sub: x })}
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu

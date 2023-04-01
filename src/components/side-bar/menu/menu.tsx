import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { MenuItemType } from '../constant/menu-item.types'

import MenuItemLink from './menu-item'
import MenuItemChildren from './menu-item-children'

type AppMenuProps = {
  menuItems: Array<MenuItemType>
}

const Menu = (props: AppMenuProps) => {
  const { menuItems } = props

  const [menuToggle, setMenuToggle] = useState(false)

  //assigning location variable
  const location = useRouter()

  //destructuring pathname from location
  const { pathname } = location

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')

  useEffect(() => {
    const itemActive: string[] = []

    menuItems.map((item) => {
      item?.children?.map((items) => {
        return itemActive.push(items.key)
      })
    })

    setMenuToggle(splitLocation.some((r) => itemActive.includes(r)))
  }, [menuItems, pathname])


  return (
    <ul className='menu'>
      {(menuItems || []).map((item, index) => (
        <div key={index.toString()}>
          {item.isTitle ? (
            <li className={classNames('sidebar-title')}>{item.label}</li>
          ) : (
            <>
              {item.children ? (
                <li
                  className={classNames(
                    'sidebar-item',
                    splitLocation.includes(item.key) || menuToggle ? 'active' : '',
                  )}
                >
                  <MenuItemChildren
                    item={item}
                    menuActive={menuToggle}
                    onClick={() => setMenuToggle(!menuToggle)}
                  />
                </li>
              ) : (
                <li
                  className={classNames(
                    'sidebar-item',
                    splitLocation.includes(item.key) ? 'active' : ''
                  )}
                >
                  <MenuItemLink item={item} />
                </li>
              )}
            </>
          )}
        </div>
      ))}
    </ul>
  )
}

export default Menu

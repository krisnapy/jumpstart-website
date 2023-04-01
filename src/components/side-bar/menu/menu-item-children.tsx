import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Collapse } from 'react-bootstrap'

import { SubMenus } from '../constant/types'

const MenuItemChildren = (props: SubMenus) => {
  const { item, className, menuActive, onClick } = props

  const location = useRouter()

  //destructuring pathname from location
  const { pathname } = location

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')

  return (
    <>
      <Link
        onClick={(e) => {
          e.preventDefault()
          onClick && onClick()
        }}
        href='#'
        target={item.target}
        className={classNames('sidebar-link active', className)}
        data-menu-key={item.key}
        aria-label={item.label}
      >
        <span className='d-flex w-100 justify-content-between align-items-center'>
          <span className='d-flex gap-4 align-items-center'>
            <i className={`menu-icon ${item.icon}`}></i>
            {item.label}
          </span>
          <span className={menuActive ? 'menu-arrow' : 'menu-arrow-normal'}>
            <i className='mdi mdi-chevron-right'></i>
          </span>
        </span>
      </Link>
      <Collapse in={menuActive}>
        <ul className='item-children'>
          {item.children?.map((child, index) => (
            <li
              key={index}
              className={classNames('sidebar-item', { active: splitLocation.includes(child.key) })}
            >
              <Link
                href={{ pathname: `${item.url}/${child.url}` }}
                as={{ pathname: `${item.url}/${child.url}` }}
                target={child.target}
                className={classNames('sidebar-link', className)}
                data-menu-key={child.key}
                aria-label={child.label}
              >
                <span className='d-flex w-100 justify-content-between align-items-center'>
                  <span className='d-flex ms-4 align-items-center'>{child.label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </>
  )
}

export default MenuItemChildren

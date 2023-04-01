import classNames from 'classnames'
import Link from 'next/link'

import { SubMenus } from '../constant/types'

const MenuItem = (props: SubMenus) => {
  const { item, className } = props

  return (
    <Link
      href={{ pathname: item.url, query: null }}
      as={{ pathname: item.url }}
      target={item.target}
      className={classNames('sidebar-link', className)}
      data-menu-key={item.key}
      aria-label={item.label}
    >
      <span className='d-flex align-items-center gap-4'>
        <i className={`menu-icon ${item.icon}`}></i>
        {item.label}
      </span>
    </Link>
  )
}

export default MenuItem

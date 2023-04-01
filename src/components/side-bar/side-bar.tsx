import { FunctionComponent } from 'react'
import Link from 'next/link'

import { AdminMenu } from './constant/admin'
import Menu from './menu/menu'

const SideBar: FunctionComponent = () => {
  return (
    <div className='sidebar-wrapper active'>
      <div className='sidebar-header position-relative'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='logo'>
            <Link href='/'>Jumpstart</Link>
          </div>
          <div className='sidebar-toggler  x'>
            <Link href='#' className='sidebar-hide d-xl-none d-block'>
              <i className='bi bi-x bi-middle'></i>
            </Link>
          </div>
        </div>
      </div>
      <div className='sidebar-menu'>
        <Menu menuItems ={AdminMenu} />
      </div>
    </div>
  )
}
export default SideBar

import { Container } from 'react-bootstrap'

import SideBar from '../side-bar/side-bar'

type AdminLayoutProps = {
  children: React.ReactNode
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className='wrapper'>
      <SideBar />
      <div className='content-page'>
        <div className='content'>
          <Container fluid>{children}</Container>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout

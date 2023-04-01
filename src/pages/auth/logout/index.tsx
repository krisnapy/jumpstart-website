import { Toast } from '@/components'
import { FormControl, FormPassword } from '@/components/form-control'
import { FunctionComponent } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Logout: FunctionComponent = () => {
  return (
    <div className='authentication-wrapper authentication-basic container-p-y'>
      <div className='authentication-inner'>
        <Card className='pt-4 pb-4'>
          <Card.Body>
            <h4 className='mb-2'>Welcome to Jumpstart!</h4>
            <p className='mb-4'>Please sign-in to your account</p>

            <Row>Hallo</Row>

            <p className='text-center mt-4'>
              <span>New on our platform? </span>
              <a href='register'>
                <span>Create an account</span>
              </a>
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Logout

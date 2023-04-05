import { Toast } from '@/components'
import { FormControl, FormPassword, FormProvider } from '@/components/form-control'
import { FunctionComponent, useEffect, useRef } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useLogin } from './login.hook'
import useStore  from '@/stores'

const Login: FunctionComponent = () => {
  const methods = useForm()

  const {
    userStore: {},
  } = useStore()

  const loadData = async () => {
    try {
      console.log('masuk')
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  console.log(users)
  console.log(selectedUser)

  const { onLogin } = useLogin()

  return (
    <div className='authentication-wrapper authentication-basic container-p-y'>
      <div className='authentication-inner'>
        <Card className='pt-4 pb-4'>
          <Card.Body>
            <h4 className='mb-2'>Welcome to Jumpstart!</h4>
            <p className='mb-4'>Please sign-in to your account</p>

            <FormProvider methods={methods} onSubmit={onLogin}>
              <Row>
                <Col xl={12} className='mt-2'>
                  <FormControl
                    name='email'
                    label='Email'
                    placeholder='Input your email'
                    type='email'
                  />
                </Col>
                <Col xl={12} className='mt-4'>
                  <FormPassword
                    name='password'
                    label='Password'
                    placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                  />
                </Col>
                <Col xl={12} className='mt-4'>
                  <Button className='w-100' type='submit'>
                    Submit
                  </Button>
                </Col>
              </Row>
            </FormProvider>

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

export default Login

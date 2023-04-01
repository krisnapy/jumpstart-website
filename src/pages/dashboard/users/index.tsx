import { FormControl } from '@/components/form-control'
import { useCallback } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { FormProvider, useForm } from 'react-hook-form'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

const Home = () => {
  const searchParams = useSearchParams()

  const methods = useForm()
  const { handleSubmit } = methods

  const router = useRouter()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (data: any) => {
      const params = new URLSearchParams(searchParams)
      params.set('search', data.search)

      router.push({ pathname, query: data })
      return params.toString()
    },
    [pathname, router, searchParams]
  )

  return (
    <Container>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(createQueryString)}>
          <FormControl label='Search' name='search' />
          <FormControl label='Search' name='bagus' />
          <Button variant='primary' type='submit'>
            Hallo world
          </Button>
        </Form>
      </FormProvider>
    </Container>
  )
}

export default Home

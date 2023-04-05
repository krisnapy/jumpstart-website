import type { AppProps } from 'next/app'

import AdminLayout from '@/components/layout/admin-layout'

import '@/styles/globals.scss'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname.startsWith(`/auth`)) {
    return <Component {...pageProps} />
  }

  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  )
}

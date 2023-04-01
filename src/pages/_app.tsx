import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import AdminLayout from '@/components/layout/admin-layout'
import { store, useStores } from '@/useStore'

import '@/styles/globals.scss'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname.startsWith(`/auth`)) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }

  return (
    <Provider store={store}>
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    </Provider>
  )
}

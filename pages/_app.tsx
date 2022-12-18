import '@/styles/globals.css'
import '@/styles/tailwind.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient())

  return(
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydrateState}>
      <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

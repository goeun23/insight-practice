import type { AppProps } from 'next/app'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/styles/globals.css'

const queryClient = useState(() => new QueryClient({
  defaultOptions:{
    queries:{
      suspense :true, 
      useErrorBoundary:true, 
      staleTime : 1000* 60* 5
    }
  }
}))

export default function App({ Component, pageProps }: AppProps) {
  

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export { reportWebVitals } from '@/reportWebVitals'

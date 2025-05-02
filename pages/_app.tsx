import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  // ✅ 변수 이름을 소문자 q로 시작하게 해서 충돌 방지
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

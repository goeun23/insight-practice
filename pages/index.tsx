import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const Chart = dynamic(() => import('@/components/Chart'), { ssr: false })
const DataList = dynamic(() => import('@/components/DataList'), { ssr: false })

export default function Dashboard() {
  const [loading, setLoading] = useState(true)

  const { data = [], isFetching } = useQuery({
    queryKey: ['insightData'],
    queryFn: async () => {
      const res = await fetch('/api/mock')
      return await res.json()
    },
    staleTime: 0,
    //cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (loading || isFetching) return <p>로딩 중...</p>

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">📊 InsightHub 대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Chart data={data.slice(0, 100)} />
        <DataList data={data} />
      </div>
    </div>
  )
}

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useDataQuery from '@/hooks/useDataQuery'
const Chart = dynamic(() => import('@/components/Chart'), { ssr: false })
const DataList = dynamic(() => import('@/components/DataList'), { ssr: false })

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const {data, isLoading} = useDataQuery()

  useEffect(()=> {
    const timer = setTimeout(()=> setLoading(false), 500)
    return ()=> clearTimeout(timer)
  }, [])

  if(loading || isLoading) return <p>로딩중...</p>
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

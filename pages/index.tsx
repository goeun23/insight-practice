import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useEffect, useState } from 'react'

import useDataQuery from '@/hooks/useDataQuery'

const Chart = dynamic(() => import('@/components/Chart'), { ssr: false })
const DataList = dynamic(() => import('@/components/DataList'), { ssr: false })

function DashboardContent(){
  const {data} = useDataQuery()

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

export default function Dashboard(){
  return (
    <Suspense fallback={<p className="p-6">로딩 중...</p>}>
      <DashboardContent />
    </Suspense>
  )
}
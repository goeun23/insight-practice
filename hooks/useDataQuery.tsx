// hooks/useDataQuery.ts
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface DataItem {
  label: string
  value: number
}

const fetchData = async (): Promise<DataItem[]> => {
  const res = await axios.get('/api/mock')
  return res.data
}

export default function useDataQuery() {
  const { data, isLoading, isFetching } = useQuery<DataItem[]>({
    queryKey: ['insightData'],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // 5분 동안 fresh
    cacheTime: 1000 * 60 * 10, // 10분간 메모리 유지
    placeholderData: () => {
      // ✅ 초기 로딩 중 잠깐 보여줄 더미 데이터 (로딩 스피너 안 띄우고 바로 렌더됨)
      return Array.from({ length: 10 }, (_, i) => ({
        label: `Loading-${i + 1}`,
        value: 0,
      }))
    },
    refetchOnWindowFocus: false,
  })

  return { data, isLoading, isFetching }
}
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
    gcTime: 1000 * 60 * 10, // 10분간 메모리 유지
    placeholderData:()=> {
      if(typeof window !== 'undefined'){
        const cache = localStorage.getItem('insightDataCache')
        return cache ? JSON.parse(cache) : []
      }
    },

    
  })
  const safeData = data || []

  return { data: safeData, isLoading, isFetching }
}
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'

export interface DataItem {
    label:string, 
    value:number
}

const fetchData = async (): Promise<DataItem[]> => {
    const res = await axios.get('/api/mock')
    return res.data
}

export default function useDataQuery(){
    const {data = [], isLoading} = useQuery({
        queryKey : ['insightData'], 
        queryFn:fetchData, 
        staleTime : 1000 * 60 * 5, 
        cacheTime : 1000 * 60 * 10, 
        placeholderData : [], 
        refetchOnWindowFocus:false
    })

    return {data, isLoading}
}
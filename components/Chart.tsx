import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import React, { useMemo } from 'react'

const Chart = ({data}) => {
  const chartData = useMemo(()=> ({
    labels: data.map((_, idx) => idx),
    datasets: [
      {
        label: 'Value',
        data: data.map(d => d.value),
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  }), [data])
  return <Line data={chartData} />
}

export default React.memo(Chart)


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

export default function Chart({ data }) {
  const chartData = {
    labels: data.map((_, idx) => idx),
    datasets: [
      {
        label: 'Value',
        data: data.map(d => d.value),
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  }

  return <Line data={chartData} />
}

import axios from 'axios'
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale'
import { BASE_URL } from 'utils/requests'

type chartData = {
	series: number[]
	labels: string[]
}

const DonutChart = () => {
	// WRONG WAY
	let chartData: chartData = { labels: [], series: [] }

  // WRONG WAY
	axios.get(`${BASE_URL}/sales/amount-by-seller`).then((res) => {
    const data = res.data as SaleSum[]
		const myLabels = data.map(sale => sale.sellerName)
    const mySeries = data.map(sale => sale.sum)

    chartData = { labels: myLabels, series: mySeries}
    console.log(chartData)
	})

	// const mockData = {
	// 	series: [477138, 499928, 444867, 220426, 473088],
	// 	labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
	// }

	const options = {
		legend: {
			show: true,
		},
	}

	return (
		<Chart
			options={{ ...options, labels: chartData.labels }}
			series={chartData.series}
			type='donut'
			height='240'
		/>
	)
}

export default DonutChart

import BarChart from "components/BarChart"
import DataTable from "components/DataTable"
import DonutChart from "components/DonutChart"
import Footer from "components/Footer"
import NavBar from "components/NavBar"

const Dashboard = () => {
	return (
		<>
			<NavBar />
			<div className='container'>
				<h1 className='text-primary py-3'>Sales Dashboard</h1>

				<div className='row px-3'>
					<div className='col-sm-6'>
						<h5 className='text-center text-secondary'>Success rate (%)</h5>
						<BarChart />
					</div>

					<div className='col-sm-6'>
						<h5 className='text-center text-secondary'>All the sales</h5>
						<DonutChart />
					</div>

          <div className="py-3">
            <h2 className="text-primary">
              Total Sales Spreadsheet
            </h2>
          </div>

					<DataTable />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Dashboard

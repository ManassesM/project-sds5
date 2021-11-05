import DataTable from 'components/DataTable'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'

function App() {
	return (
		<>
			<NavBar />
			<div className='container'>
				<div className='text-primary'>
          <h1>Hello, There!</h1>
					<DataTable />
				</div>
			</div>
      <Footer />
		</>
	)
}

export default App

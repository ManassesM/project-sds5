import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<>
			<NavBar />
			<div className='container'>
				<h1 className='display-4'>DSVendas</h1>
				<p className='lead'>
					Analyse the development of your sales from different perspectives
				</p>
				<hr />
				<p>
					This application consists of displaying a dashboard from sources
					provided by a backend built with Spring Boot.
				</p>
				<Link to='/dashboard' className='btn btn-primary btn-lg'>
					Access dashboard
				</Link>
			</div>
			<Footer />
		</>
	)
}

export default Home

const Footer = () => {
	return (
		<footer className='footer mt-auto py-3 bg-dark'>
			<div className='container'>
				<p className='text-light'>
					App Developed by{' '}
					<a
						href='https://github.com/ManassesM'
						target='_blank'
						rel='noreferrer'
            className='text-decoration-none'
					>
						ManassesM
					</a>
				</p>
				<p className='text-light'>
					<small>
						<strong>Spring React Week</strong>
						<br />
						Event sponsored by DevSuperior school
					</small>
				</p>
			</div>
		</footer>
	)
}

export default Footer

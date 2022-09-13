import React from 'react';
import Navbar from './components/Navbar';

const styles = {
	appContainer: `max-w-[728px] mx-auto text-center`,
	sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl relative border`,
};

function App() {
	return (
		<div className={styles.appContainer}>
			<section className={styles.sectionContainer}>
				<Navbar />
			</section>
		</div>
	);
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const styles = {
	appContainer: `max-w-[728px] mx-auto text-center`,
	sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl relative border`,
};

function App() {
	const [user] = useAuthState(auth);

	console.log(user);

	return (
		<div className={styles.appContainer}>
			<section className={styles.sectionContainer}>
				<Navbar />
			</section>
		</div>
	);
}

export default App;

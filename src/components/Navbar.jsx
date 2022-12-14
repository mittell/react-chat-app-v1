import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';

const styles = {
	nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
	heading: `text-white text-3xl`,
};

const Navbar = () => {
	const [user] = useAuthState(auth);

	return (
		<div className={styles.nav}>
			<h1 className={styles.heading}>Chat App</h1>
			{user ? <SignOut /> : <SignIn />}
		</div>
	);
};

export default Navbar;

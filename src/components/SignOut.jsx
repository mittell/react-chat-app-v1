import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';

const styles = {
	button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const googleSignOut = () => {
	signOut(auth);
};

const SignOut = () => {
	return (
		<button className={styles.button} onClick={googleSignOut}>
			Sign Out
		</button>
	);
};

export default SignOut;

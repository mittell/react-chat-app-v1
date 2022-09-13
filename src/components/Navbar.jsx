import React from 'react';

const styles = {
	nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
	heading: `text-white text-3xl`,
};

const Navbar = () => {
	return (
		<div className={styles.nav}>
			<h1 className={styles.heading}>Chat App</h1>
		</div>
	);
};

export default Navbar;

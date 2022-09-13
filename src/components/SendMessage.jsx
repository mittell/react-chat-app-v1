import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const styles = {
	form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
	input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
	button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
	const [input, setInput] = useState('');
	const [user] = useAuthState(auth);

	const sendMessage = async (e) => {
		e.preventDefault();

		if (input === '') {
			alert('Please enter a valid message.');
			return;
		}

		const { uid, displayName } = auth.currentUser;
		await addDoc(collection(db, 'messages'), {
			text: input,
			name: displayName,
			uid,
			timestamp: serverTimestamp(),
		});

		setInput('');
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<form onSubmit={sendMessage} className={styles.form}>
			<input
				className={styles.input}
				type='text'
				placeholder='Message...'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button className={styles.button} type='submit' disabled={!user}>
				Send
			</button>
		</form>
	);
};

export default SendMessage;

import React, { useEffect, useRef, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import ChatMessage from './ChatMessage';
import SendMessage from './SendMessage';

const styles = {
	main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const scroll = useRef();

	useEffect(() => {
		const q = query(collection(db, 'messages'), orderBy('timestamp'));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let messages = [];
			querySnapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setMessages(messages);
		});
		return () => unsubscribe();
	}, []);

	return (
		<>
			<main className={styles.main}>
				{messages &&
					messages.map((message) => (
						<ChatMessage key={message.id} message={message} scroll={scroll} />
					))}
			</main>
			<SendMessage />
			<span ref={scroll}></span>
		</>
	);
};

export default Chat;

import React, { useState, useEffect } from 'react';

import Contact from './Contact';
import './ContactList.scss';

interface IContact {
	name: string;
}

const ContactList: React.FC = () => {
	const [contacts, setContacts] = useState<Array<IContact> | null>(null);

	// useEffect(() => {
	// 	setContacts([
	// 		{ name: 'Иван Иванов' },
	// 		{ name: 'Иван Иванов' },
	// 		{ name: 'Иван Иванов' },
	// 		{ name: 'Иван Иванов' }
	// 	]);
	// }, []);

	return (
		<div className="ContactList">
			{contacts &&
				contacts.map(({ name }, i) => <Contact name={name} key={i} />)}

			{contacts === null && (
				<div className="ContactList-Caption">
					Здесь будут ваши контакты
				</div>
			)}
		</div>
	);
};

export default ContactList;

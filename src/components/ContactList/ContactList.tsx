import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Contact from './Contact';
import { getContactList } from '../../utils/contacts';
import Title from '../Title';
import './ContactList.scss';

interface IContact {
	name: string;
}

const ContactList: React.FC = () => {
	const [contacts, setContacts] = useState<Array<IContact> | null>(null);

	useEffect(() => {
		setContacts(getContactList());
	}, []);

	return (
		<div className="ContactList">
			<header className="ContactList-Header">
				<Title className="ContactList-Title">Contacts</Title>
				<Link to="/new" className="ContactList-Button">
					+
				</Link>
			</header>

			{contacts &&
				contacts.map(({ name }, i) => (
					<Contact name={name} id={i} key={i} />
				))}

			{!contacts && (
				<div className="ContactList-Caption">
					Здесь будут ваши контакты
				</div>
			)}
		</div>
	);
};

export default ContactList;

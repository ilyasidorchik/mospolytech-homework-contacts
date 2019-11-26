import React, { useState, useEffect } from 'react';

import Contact from './Contact';
import { getContactList, addContact } from '../../utils/contacts';
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
			<Title className="ContactList-Title">Contacts</Title>
			{contacts &&
				contacts.map(({ name }, i) => (
					<Contact name={name} id={i} key={i} />
				))}

			{contacts === null && (
				<div className="ContactList-Caption">
					Здесь будут ваши контакты
				</div>
			)}
		</div>
	);
};

export default ContactList;

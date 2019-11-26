import React from 'react';

import ContactForm from '../ContactForm';
import { getContactList, addContact } from '../../utils/contacts';
import Title from '../Title';
import './ContactAdd.scss';

const ContactAdd: React.FC = () => {
	const id = getContactList() ? getContactList().length : 0;
	const businessFunc = addContact;

	return (
		<div className="ContactAdd">
			<Title>New Contact</Title>
			<ContactForm
				id={id}
				businessFunc={businessFunc}
				buttons={['create']}
			/>
		</div>
	);
};

export default ContactAdd;

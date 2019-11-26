import React from 'react';

import ContactForm from '../ContactForm';
import { getContactList, addContact } from '../../utils/contacts';
import ContactLink from '../ContactLink';
import Title from '../Title';
import './ContactAdd.scss';

const ContactAdd: React.FC = () => {
	const id = getContactList() ? getContactList().length : 0;
	const businessFunc = addContact;

	return (
		<div className="ContactAdd">
			<ContactLink />
			<Title className="ContactAdd-Title">New Contact</Title>
			<ContactForm
				id={id}
				businessFunc={businessFunc}
				autoFocus={true}
				buttons={['create']}
			/>
		</div>
	);
};

export default ContactAdd;

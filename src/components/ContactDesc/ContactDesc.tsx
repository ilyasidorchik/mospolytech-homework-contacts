import React from 'react';
import { useParams } from 'react-router-dom';

import { getContact } from '../../utils/contacts';
import Title from '../Title';
import './ContactDesc.scss';
import ContactForm from '../ContactForm';

const ContactDesc: React.FC = () => {
	let { id } = useParams();
	const contact: any = getContact(Number(id));
	let firstName;

	if (contact) {
		firstName = contact['name'];
	}

	return (
		<div className="ContactDesc">
			<Title className="ContactDesc-Title">Contact</Title>
			<ContactForm
				initialState={firstName}
				id={Number(id)}
				buttons={['delete']}
			/>
		</div>
	);
};

export default ContactDesc;

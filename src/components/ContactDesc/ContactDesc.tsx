import React from 'react';
import { useParams } from 'react-router-dom';

import { getContact } from '../../utils/contacts';
import ContactLink from '../ContactLink';
import Title from '../Title';
import ContactForm from '../ContactForm';
import './ContactDesc.scss';

const ContactDesc: React.FC = () => {
	let { id } = useParams();
	const contact: any = getContact(Number(id));
	let firstName;

	if (contact) {
		firstName = contact['name'];
	}

	return (
		<div className="ContactDesc">
			<ContactLink />
			<Title className="ContactDesc-Title">Contact</Title>
			<ContactForm
				initialState={firstName}
				id={Number(id)}
				buttons={['delete']}
				edit={true}
			/>
		</div>
	);
};

export default ContactDesc;

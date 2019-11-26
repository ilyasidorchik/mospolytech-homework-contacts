import React from 'react';
import { useParams } from 'react-router-dom';

import { getContact } from '../../utils/contacts';
import Title from '../Title';
import './ContactDesc.scss';
import ContactForm from '../ContactForm';

const ContactDesc: React.FC = () => {
	let { id } = useParams();
	const contact: any = getContact(Number(id));
	const firstName = contact['name'];

	return (
		<div className="ContactDesc">
			<Title className="ContactDesc-Title">Contact</Title>
			<ContactForm initialState={firstName} id={Number(id)} />
		</div>
	);
};

export default ContactDesc;

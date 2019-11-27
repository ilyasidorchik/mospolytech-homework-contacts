import React from 'react';
import { useParams } from 'react-router-dom';

import { getContact } from '../../utils/contacts';
import ContactLink from '../../components/ContactLink';
import Title from '../../components/Title';
import ContactForm from '../../components/ContactForm';
import './ContactDesc.scss';

const ContactDesc: React.FC = () => {
	let { id } = useParams();
	const contact: any = getContact(Number(id));

	return (
		<div className="ContactDesc">
			<ContactLink />
			<Title className="ContactDesc-Title">Contact</Title>
			<ContactForm
				initialState={contact}
				id={Number(id)}
				buttons={['delete']}
				edit={true}
			/>
		</div>
	);
};

export default ContactDesc;

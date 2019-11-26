import React from 'react';

import ContactForm from '../ContactForm';
import { getContactList, addContact } from '../../utils/contacts';
import './ContactAdd.scss';

const ContactAdd: React.FC = () => {
	const id = getContactList() ? getContactList().length : 0;
	const businessFunc = addContact;

	return <ContactForm id={id} businessFunc={businessFunc} />;
};

export default ContactAdd;

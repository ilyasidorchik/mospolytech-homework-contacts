import React, { useState, useCallback, ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';

import { getContactList, addContact } from '../../utils/contacts';
import Title from '../Title';
import './ContactAdd.scss';

const ContactAdd: React.FC = () => {
	const [contactAdded, isContactAdded] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setValue(value);
		},
		[setValue]
	);

	const handleSubmit = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault();

			addContact(value);

			isContactAdded(true);
		},
		[value]
	);

	return contactAdded ? (
		<Redirect to={`/contact/${getContactList().length}`} />
	) : (
		<div className="ContactAdd">
			<Title className="ContactAdd-Title">New Contact</Title>
			<form className="ContactAdd-Form" onSubmit={handleSubmit}>
				<input
					className="ContactAdd-Input"
					type="text"
                    placeholder="First Name"
                    autoFocus
					value={value}
					onChange={handleInputChange}
				/>
				<button className="ContactAdd-Button">Add contact</button>
			</form>
		</div>
	);
};

export default ContactAdd;

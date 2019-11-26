import React, { useState, useCallback, ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';

import './ContactForm.scss';

type IContactForm = {
	id: number;
	businessFunc: (name: any) => void;
};

const ContactForm: React.FC<IContactForm> = ({ id, businessFunc }) => {
	const [contactProcess, isContactProccessed] = useState<boolean>(false);
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

			businessFunc(value);

			isContactProccessed(true);
		},
		[businessFunc, value]
	);

	return contactProcess ? (
		<Redirect to={`/contact/${id}`} />
	) : (
		<div className="ContactForm">
			<form className="ContactForm-Form" onSubmit={handleSubmit}>
				<input
					className="ContactForm-Input"
					type="text"
					placeholder="First Name"
					autoFocus
					value={value}
					onChange={handleInputChange}
				/>
				<button className="ContactForm-Button">Add contact</button>
			</form>
		</div>
	);
};

export default ContactForm;

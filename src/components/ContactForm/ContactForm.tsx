import React, { useState, useCallback, ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';

import './ContactForm.scss';

type IContactForm = {
	initialState?: string;
	id: number;
	businessFunc?: (name: any) => void;
	buttons?: Array<string>;
};

const logic = (name: any) => name;

const ContactForm: React.FC<IContactForm> = ({
	initialState = '',
	id,
	businessFunc = logic('name'),
	buttons = []
}) => {
	const [contactProcess, isContactProccessed] = useState<boolean>(false);
	const [value, setValue] = useState<string>(initialState);

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
		<form className="ContactForm" onSubmit={handleSubmit}>
			<div className="ContactForm-InputGroup">
				<input
					className="ContactForm-Input"
					type="text"
					placeholder="First Name"
					autoFocus
					value={value}
					onChange={handleInputChange}
				/>
			</div>

			{buttons.map((item, i) => {
				switch (item) {
					case 'create':
						return (
							<button className="ContactForm-Button" key={i}>
								Add contact
							</button>
						);
					case 'delete':
						return (
							<button
								className="ContactForm-Button ContactForm-Button_danger"
								key={i}
							>
								Remove contact
							</button>
						);
					default:
						return true;
				}
			})}
		</form>
	);
};

export default ContactForm;

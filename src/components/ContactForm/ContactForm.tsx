import React, { useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import { Redirect } from 'react-router-dom';

import { editContact, removeContact } from '../../utils/contacts';
import './ContactForm.scss';

type IContactForm = {
	initialState?: string;
	id: number;
	businessFunc?: (name: any) => void;
	autoFocus?: boolean;
	buttons?: Array<string>;
	edit?: boolean;
};

const logic = (name: any) => name;

const ContactForm: React.FC<IContactForm> = ({
	initialState = '',
	id,
	businessFunc = logic('name'),
	buttons = [],
	autoFocus = false,
	edit = false
}) => {
	const [contactProcess, isContactProccessed] = useState<boolean>(false);
	const [contactRemoved, isContactRemoved] = useState<boolean>(false);
	const [value, setValue] = useState<string>(initialState);

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setValue(value);

			if (edit) editContact(id, value);
		},
		[id, setValue, edit]
	);

	const handleSubmit = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault();

			businessFunc(value);

			isContactProccessed(true);
		},
		[businessFunc, value]
	);

	if (contactRemoved) {
		return <Redirect to="/" />;
	}

	if (contactProcess) {
		return <Redirect to={`/contact/${id}`} />;
	}

	return (
		<form className="ContactForm" onSubmit={handleSubmit}>
			<div className="ContactForm-InputGroup">
				<input
					className="ContactForm-Input"
					type="text"
					placeholder="First Name"
					autoFocus={autoFocus}
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
						const handleRemoveClick = (e: MouseEvent) => {
							e.preventDefault();

							removeContact(id);

							isContactRemoved(true);
						};

						return (
							<button
								className="ContactForm-Button ContactForm-Button_danger"
								onClick={handleRemoveClick}
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

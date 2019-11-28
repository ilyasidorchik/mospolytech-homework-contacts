import React, {
	useState,
	useCallback,
	ChangeEvent,
	MouseEvent,
	KeyboardEvent
} from 'react';
import { Redirect } from 'react-router-dom';

import { editContact, removeContact } from '../../utils/contacts';
import './ContactForm.scss';

type IContact = {
	[key: string]: any;
	lastName?: string;
	firstName?: string;
};

type IContactForm = {
	initialState?: IContact;
	id: number;
	businessFunc?: (name: any) => void;
	autoFocus?: boolean;
	buttons?: Array<string>;
	edit?: boolean;
};

const logic = (name: any) => name;

const ContactForm: React.FC<IContactForm> = ({
	initialState = null,
	id,
	businessFunc = logic('name'),
	buttons = [],
	autoFocus = false,
	edit = false
}) => {
	const [contactAdded, isContactAdded] = useState<boolean>(false);
	const [contactProcessed, isContactProcessed] = useState<boolean>(false);
	const [contact, setContact] = useState<IContact | null>(initialState);

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setContact({ ...contact, [name]: value });

			if (edit) editContact(id, { ...contact, [name]: value });
		},
		[id, contact, setContact, edit]
	);

	const handleInputKeyPress = useCallback((e: KeyboardEvent) => {
		const { key } = e;

		if (key === 'Enter') {
			isContactProcessed(true);
		}
	}, []);

	const handleSubmit = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault();

			if (!edit) {
				businessFunc(contact);
				isContactAdded(true);
			} else {
				isContactProcessed(true);
			}
		},
		[businessFunc, contact, edit, isContactAdded, isContactProcessed]
	);

	if (contactProcessed) {
		return <Redirect to="/" />;
	}

	if (contactAdded) {
		return <Redirect to={`/contact/${id}`} />;
	}

	return (
		<form className="ContactForm" onSubmit={handleSubmit}>
			<div className="ContactForm-InputGroup">
				{[
					{
						name: 'lastName',
						text: 'Last Name'
					},
					{
						name: 'firstName',
						text: 'First Name'
					}
				].map(({ name, text }, i) => (
					<input
						className="ContactForm-Input"
						type="text"
						name={name}
						placeholder={text}
						autoFocus={i === 0 ? autoFocus : false}
						value={contact ? contact[name] : ''}
						onChange={handleInputChange}
						onKeyPress={edit ? handleInputKeyPress : undefined}
						key={i}
					/>
				))}
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

							isContactProcessed(true);
						};

						return (
							<button
								className="ContactForm-Button ContactForm-Button_danger"
								type="button"
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

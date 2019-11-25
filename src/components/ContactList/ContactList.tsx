import React, { useState, useEffect } from 'react';

import Contact from './Contact';

interface IContact {
	name: string;
}

const ContactList: React.FC = () => {
	const [contacts, setContacts] = useState<Array<IContact> | null>(null);

	useEffect(() => {
		setContacts([
			{ name: 'Иван Иванов' },
			{ name: 'Иван Иванов' },
			{ name: 'Иван Иванов' },
			{ name: 'Иван Иванов' }
		]);
	}, []);

	return (
		<>
			{contacts &&
				contacts.map(({ name }, i) => <Contact name={name} key={i} />)}
		</>
	);
};

export default ContactList;

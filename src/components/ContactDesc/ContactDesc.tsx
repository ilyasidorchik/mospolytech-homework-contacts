import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getContact } from '../../utils/contacts';
import Title from '../Title';
import './ContactDesc.scss';

const ContactDesc: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const { id } = useParams();
	const index = Number(id);

	useEffect(() => {
		const contact: any = getContact(index);

		if (contact) {
			if ('name' in contact) {
				const firstName = contact['name'];
				setValue(firstName);
			}
		}
	}, [index]);

	return (
		<div className="ContactDesc">
			<Title className="ContactDesc-Title">{value}</Title>
		</div>
	);
};

export default ContactDesc;

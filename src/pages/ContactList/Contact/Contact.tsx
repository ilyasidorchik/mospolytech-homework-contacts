import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.scss';

type IContactData = {
	lastName?: string;
	firstName?: string;
	middleName?: string;
};

interface IContact {
	data: IContactData;
	id: number;
}

const Contact: React.FC<IContact> = ({
	data: { lastName, firstName, middleName },
	id
}) => (
	<Link className="Contact" to={`/contact/${id}`}>
		{lastName} {firstName} {middleName}
	</Link>
);

export default Contact;

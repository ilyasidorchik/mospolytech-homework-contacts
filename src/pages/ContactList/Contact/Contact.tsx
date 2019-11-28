import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.scss';

type IContactData = {
	lastName: string;
	firstName: string;
};

interface IContact {
	data: IContactData;
	id: number;
}

const Contact: React.FC<IContact> = ({ data: { lastName, firstName }, id }) => (
	<Link className="Contact" to={`/contact/${id}`}>
		{lastName} {firstName}
	</Link>
);

export default Contact;

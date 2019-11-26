import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.scss';

interface IContact {
	name: string;
	id: number;
}

const Contact: React.FC<IContact> = ({ name, id }) => {
	return (
		<Link to={`/contact/${id}`} className="Contact">
			{name}
		</Link>
	);
};

export default Contact;

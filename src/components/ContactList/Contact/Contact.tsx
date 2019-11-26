import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.scss';

interface IContact {
	name: string;
}

const Contact: React.FC<IContact> = ({ name }) => {
	return <Link to="/contact" className="Contact">{name}</Link>;
};

export default Contact;

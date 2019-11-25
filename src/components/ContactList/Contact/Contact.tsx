import React from 'react';

import './Contact.scss';

interface IContact {
	name: string;
}

const Contact: React.FC<IContact> = ({ name }) => {
	return <div className="Contact">{name}</div>;
};

export default Contact;

import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDesc: React.FC = () => {
	const { id } = useParams();

	console.log(id);

	return <div>Карточка Ильи</div>;
};

export default ContactDesc;

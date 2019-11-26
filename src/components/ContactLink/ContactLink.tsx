import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import './ContactLink.scss';

type IContactLink = {
	className?: string;
};

const ContactLink: FC<IContactLink> = ({ className }) => {
	return (
		<Link to="/" className={cx('ContactLink', className)}>
			Contacts
		</Link>
	);
};

export default ContactLink;

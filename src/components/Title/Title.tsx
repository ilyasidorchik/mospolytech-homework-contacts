import React, { ReactChild } from 'react';
import cx from 'classnames';

import './Title.scss';

type ITitle = {
	className?: string;
	children: ReactChild;
};

const Title: React.FC<ITitle> = ({ className, children }) => {
	return <h1 className={cx('Title', className)}>{children}</h1>;
};

export default Title;

import React from 'react';
import { Button } from './StyleButton';

export const CardButton = ({ title,onClick }) => {
	return <Button onClick={onClick}>{title}</Button>;
};

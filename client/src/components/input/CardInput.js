import React from 'react';
import { Input } from './StyleInput';

export const CardInput = ({ name,placeholder, onChange, type , value , className}) => {
	return <Input name={name} type={type} value={value} className={className} placeholder={placeholder} onChange={(e)=>onChange(e)} />;
};

import Decimal from 'decimal.js';


export const decimalParser = (value: string) =>
	new Decimal(value);
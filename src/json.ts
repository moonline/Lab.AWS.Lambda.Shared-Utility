import { parse } from 'lossless-json';
import Decimal from 'decimal.js';


const decimalParser = (value: string) =>
	new Decimal(value);

export const jsonParseWithDecimal = (json: string): unknown =>
	parse(json, undefined, decimalParser);
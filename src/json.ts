import { parse } from 'lossless-json';

import { decimalParser } from './number';


export const jsonParseWithDecimal = (json: string): unknown =>
	parse(json, undefined, decimalParser);
// https://stackoverflow.com/a/72310804
// solves TextEncoder errors for JSDom environment
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;

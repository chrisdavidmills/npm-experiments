import { formatDistanceToNow } from 'date-fns'

const pElem = document.querySelector('p');
const date = '1978-06-27 10:00:00';

let statement = `I was born ${formatDistanceToNow(new Date(date))} ago`;
pElem.textContent = statement;

import { format, register } from 'timeago.js';
import koLocal from 'timeago.js/lib/lang/ko';

register('ko', koLocal);

const formatAgo = (date: string, lang = 'es_Us') => {
  return format(date, lang);
};

export default formatAgo;

import { parse, format } from 'date-fns';
import enAU from 'date-fns/locale/en-AU';

export default function formatPublishedDate(dateString: string) {
  const parseDate = parse(dateString, "yyyy-MM-dd'T'hh:mmXXX", new Date(), {
    locale: enAU,
  });
  return format(parseDate, 'MMM dd, yyyy', { locale: enAU });
}

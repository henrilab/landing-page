import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from '../LocaleSwitcherSelect';
import {locales} from '../../config';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  
  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option key={cur} value={cur} className='text-2xl'>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
import { createContext, useContext } from 'react';
import { DEFAULT_LOCALE } from '../config/constant';


export const LocaleContext = createContext<LocaleContextProps>({
    locale: DEFAULT_LOCALE,
    setLocale: () => Function()
});

export const useLocaleContext = () => useContext(LocaleContext);
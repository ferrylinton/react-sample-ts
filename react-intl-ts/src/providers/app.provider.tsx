import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { IntlProvider, } from 'react-intl';
import idJson from "../messages/id.json";
import enJson from "../messages/en.json";
import { DEFAULT_LOCALE } from '../libs/constants';


export const AppContext = createContext<AppContextType>({
    locale: DEFAULT_LOCALE,
    setLocale: () => { }
});

export const AppProvider = ({ children }: PropsWithChildren) => {

    const [locale, setCurrentLocale] = useState<string>(DEFAULT_LOCALE);

    const setLocale = (locale: string) => {
        setCurrentLocale(locale);
    }

    const value: AppContextType = {
        locale,
        setLocale
    };

    return (
        <AppContext.Provider value={value}>
            <IntlProvider
                key={locale}
                locale={locale}
                messages={locale === 'en' ? enJson : idJson}
                defaultLocale={DEFAULT_LOCALE}>
                {children}
            </IntlProvider>
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
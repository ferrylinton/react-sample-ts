import { FormattedMessage } from "react-intl";
import { useLocaleContext } from "../providers/locale-provider";

export default function HomePage() {

    const {locale, setLocale} = useLocaleContext();

    return (
        <main className='flex flex-col h-full items-center justify-center'>
            <FormattedMessage id="home" />
            <div className="my-5"><FormattedMessage id="currentLocale" /> : {locale}</div>
            <div className="flex gap-2">
                <button onClick={() => setLocale('id')} className="border border-slate-300 py-2 px-5 rounded-full hover:bg-slate-100">Indonesia - ID</button>
                <button onClick={() => setLocale('en')} className="border border-slate-300 py-2 px-5 rounded-full hover:bg-slate-100">English - EN</button>
            </div>
        </main>
    )
}

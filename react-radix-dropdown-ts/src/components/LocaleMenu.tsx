import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useIntl } from 'react-intl';
import AngelDownIcon from '../icons/AngelDownIcon';
import CheckIcon from '../icons/CheckIcon';
import EnIcon from '../icons/EnIcon';
import IdIcon from '../icons/IdIcon';


const locales = [
    { "value": "id", "label": "Indonesia", "flag": <IdIcon className='w-[28px] h-[21px] border border-slate-300 rounded shadow-md' /> },
    { "value": "en", "label": "English", "flag": <EnIcon className='w-[28px] h-[21px] border border-slate-300 rounded shadow-md' /> }
]

const LocaleMenu = () => {


    const intl = useIntl();


    const handleSelectLocale = (value: string) => {
        console.log(value);
    }

    const getFlag = () => {
        for (let i = 0; i < locales.length; i++) {
            if (locales[i].value === intl.locale) {
                return locales[i].flag
            }
        }

        return '-';
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className='nav-dropdown-trigger' asChild>
                <button aria-label="Customise options" >
                    {getFlag()} <AngelDownIcon className='w-[10px] h-[10px]' />
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="nav-dropdown-content" side='bottom' sideOffset={5} align='end' alignOffset={5}>
                    <DropdownMenu.RadioGroup value={intl.locale} onValueChange={handleSelectLocale}>
                        {
                            locales.map((locale) => {
                                return (
                                    <DropdownMenu.RadioItem key={locale.label} className="nav-dropdown-item" value={locale.value} >
                                        <DropdownMenu.ItemIndicator className="nav-dropdown-indicator">
                                            <CheckIcon className='nav-dropdown-indicator-icon' />
                                        </DropdownMenu.ItemIndicator>
                                        <div className='flex justify-center items-center gap-2'>
                                            {locale.flag} <span>{locale.label}</span>
                                        </div>
                                    </DropdownMenu.RadioItem>
                                )
                            })
                        }
                    </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default LocaleMenu;
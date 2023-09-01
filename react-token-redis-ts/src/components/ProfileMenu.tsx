import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AngelDownIcon from '../icons/AngelDownIcon';
import UserIcon from '../icons/UserIcon';
import { authenticatedUserFromCookie, logout } from '../services/auth-service';


const ProfileMenu = () => {

    const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        setAuthenticatedUser(authenticatedUserFromCookie());
    }, []);

    const handleSelect = (href: string) => {
        navigate(href);
    }

    if (authenticatedUser) {
        return (
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className='nav-dropdown-trigger' asChild>
                    <button type='button' aria-label="Customise options" >
                        <UserIcon className='w-[20px] h-[20px]' />
                        <span>{authenticatedUser.username}</span>
                        <AngelDownIcon className='w-[10px] h-[10px]' />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content className="nav-dropdown-content" side='bottom' sideOffset={5} align='end' alignOffset={5}>
                        <DropdownMenu.Item onSelect={() => handleSelect('/profile')} className="nav-dropdown-item">
                            Profile
                        </DropdownMenu.Item>
                        <DropdownMenu.Item onSelect={() => handleSelect('/changepasword')} className="nav-dropdown-item">
                            Change Password
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator className="h-[1px] bg-slate-300 m-[5px]" />
                        <DropdownMenu.Item onSelect={() => logout()} className="nav-dropdown-item">
                            Logout
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        );
    } else {
        return null
    }
};

export default ProfileMenu;
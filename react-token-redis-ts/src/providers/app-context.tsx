import { createContext, useContext } from 'react';


export const AppContext = createContext<AppContextProps>({
    loading: false,
    showErrorAlert: (_error: string | Error) => Function,
    showInfoAlert: (_message: string) => Function,
    hideAlert: () => Function,
    startProcessing: () => Function,
    finishProcessing: () => Function
});

export const useAppContext = () => useContext(AppContext);
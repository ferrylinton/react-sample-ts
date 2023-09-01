import { PropsWithChildren, useState } from 'react';
import { AppContext } from './app-context';
import Alert from '../components/Alert';
import Loading from '../components/Loading';



export const AppProvider = ({ children }: PropsWithChildren) => {

    const [loading, setLoading] = useState(false);

    const [alertState, setAlertState] = useState<AlertStateProps>({
        alert: false,
        message: null,
        isError: false
    });

    const showErrorAlert = (message: string | Error) => {
        setAlertState({ ...alertState, message, isError: true, alert: true });
    }

    const showInfoAlert = (message: string) => {
        setAlertState({ ...alertState, message, isError: false, alert: true });
    }

    const hideAlert = () => {
        setAlertState({ ...alertState, alert: false });
    }

    const startProcessing = () => {
        hideAlert();
        setLoading(true);
    }

    const finishProcessing = () => {
        setTimeout(() => setLoading(false), 500);
    }

    return (
        <AppContext.Provider value={{ loading, showErrorAlert, showInfoAlert, hideAlert, startProcessing, finishProcessing }}>
            <Alert alert={alertState.alert} message={alertState.message} isError={alertState.isError} hideAlert={hideAlert} />
            <Loading loading={loading} setLoading={setLoading} />
            {children}
        </AppContext.Provider>
    )
}
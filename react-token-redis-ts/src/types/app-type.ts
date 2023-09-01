type AppContextProps = {
    loading: boolean,
    showErrorAlert: (arg: string | Error) => void,
    showInfoAlert: (arg: string) => void,
    hideAlert: () => void,
    startProcessing: () => void,
    finishProcessing: () => void
}

type AlertStateProps = {
    alert: boolean,
    message: string | Error | null,
    isError: boolean
}

type AlertProps = {
    message: string | Error | null,
    alert: boolean,
    hideAlert: () => void,
    isError?: boolean
}
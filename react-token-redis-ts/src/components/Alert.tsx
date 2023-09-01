import { AxiosError, InternalAxiosRequestConfig } from "axios";
import clsx from "clsx";

export default function Alert({ alert, hideAlert, message, isError }: AlertProps) {

    const getMessage = () => {
        if (message instanceof AxiosError) {
            const error = message as AxiosError;

            if (error.response?.data) {
                return (error.response?.data as Message).message
            } else {
                const { baseURL, url, method } = error.config as InternalAxiosRequestConfig;
                return `${message.message} at (${baseURL}${url}) [${method?.toUpperCase()}]`;
            }
        } else if (message instanceof Error) {
            return message.message;
        } else if (message) {
            return message;
        } else {
            return 'Empty Message';
        }
    }

    return (
        <>
            {alert ? (
                <div className={clsx('w-[90%] fixed top-[70px] left-1/2 -translate-x-1/2 text-white px-6 py-4 border-0 rounded mb-4',
                    { 'bg-red-500': isError }, { 'bg-green-500': !isError })}>
                    <span className="inline-block align-middle mr-8">
                        {getMessage()}
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => hideAlert()}>
                        <span>×</span>
                    </button>
                </div>
            ) : null}
        </>
    );

}
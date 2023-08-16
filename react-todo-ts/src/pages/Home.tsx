import { FormattedMessage } from "react-intl";
import { useLocaleContext } from "../providers/locale-provider";
import { useEffect, useState } from "react";
import * as todoService from '../services/todo-service';
import TodoList from "../components/TodoList";
import AddForm from "../components/AddForm";
import ErrorMessage from "../components/ErrorMessage";
import { AxiosError } from "axios";

export default function HomePage() {

    const [todoes, setTodoes] = useState<Todo[] | null>(null);

    const [message, setMessage] = useState<string>('');

    const [error, setError] = useState(false);

    const loadTodoes = () => {
        todoService.find()
            .then(({ status, data }) => {
                if (status === 200) {
                    setTodoes(data);
                }
            }).catch(error => {
                setError(true);
                setMessage(error.message);
            });
    }

    const handleAdd = (task: string) => {
        if (task.length < 3) {
            setError(true);
            setMessage('Task min. 3 characters')
        } else {
            todoService.create(task)
                .then(({ status, data }) => {
                    if (status === 201) {
                        loadTodoes();
                    } else {
                        setError(true);
                        setMessage((data as ErrorResponse).message);
                    }
                }).catch((error: AxiosError) => {
                    console.log(error);
                    setError(true);
                    setMessage((error.response?.data as ErrorResponse).message);
                });
        }
    }

    const handleUpdate = (id: string) => {
        todoService.update(id)
                .then(({ status, data }) => {
                    if (status === 200) {
                        loadTodoes();
                    } else {
                        setError(true);
                        setMessage((data as ErrorResponse).message);
                    }
                }).catch((error: AxiosError) => {
                    console.log(error);
                    setError(true);
                    setMessage((error.response?.data as ErrorResponse).message);
                });
    }

    const handleDelete = (id: string) => {
        todoService.deleteById(id)
                .then(({ status, data }) => {
                    if (status === 200) {
                        loadTodoes();
                    } else {
                        setError(true);
                        setMessage((data as ErrorResponse).message);
                    }
                }).catch((error: AxiosError) => {
                    console.log(error);
                    setError(true);
                    setMessage((error.response?.data as ErrorResponse).message);
                });
    }

    useEffect(() => {
        loadTodoes();
    }, []);

    return (
        <main className='flex flex-col h-full items-center'>
            <div className='w-full md:max-w-2xl flex flex-col items-center justify-center my-3 px-2 md:px-0'>
                {error && <ErrorMessage message={message} />}
                <AddForm handleAdd={handleAdd} />
                <TodoList todoes={todoes} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            </div>
        </main>
    )
}

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth-service';
import { useAppContext } from '../providers/app-context';



export default function LoginPage() {

    const navigate = useNavigate();

    const { loading, startProcessing, finishProcessing, showErrorAlert } = useAppContext();

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const onFieldChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(loading){
            return;
        }

        if (state.username.length > 0 && state.password.length > 0) {
            try {
                startProcessing();
                const {status, data} = await login(state.username, state.password);
                if(status === 200){
                    navigate('/');
                }else{
                    showErrorAlert((data as Message).message)
                }
            } catch (error: any) {
                showErrorAlert(error);
            }finally{
                finishProcessing();
            }
        } else {
            showErrorAlert('Username and password is required');
        }
    };

    return (
        <main className='flex flex-col h-full items-center justify-center'>
            <div className="text-xl uppercase pb-5 text-slate-500">Login</div>
            <form
                className='w-[300px] flex flex-col gap-3'
                noValidate
                autoComplete='off'
                onSubmit={onSubmit}>

                <input
                    className={`w-full p-3 text-sm leading-tight border border-slate-400 rounded focus:outline-none focus:ring-4`}
                    type="text"
                    placeholder="Username"
                    name='username'
                    value={state.username}
                    maxLength={50}
                    onChange={onFieldChange}
                />

                <input
                    className={`w-full p-3 text-sm leading-tight border border-slate-400 rounded focus:outline-none focus:ring-4`}
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={state.password}
                    maxLength={50}
                    onChange={onFieldChange}
                />

                <button
                    type="submit"
                    className='w-full p-3 text text-slate-100 hover:text-white uppercase leading-tight border border-blue-600 bg-blue-500 hover:bg-blue-600 rounded'>Login</button>

                <div className='w-full p-1 text-xs leading-tight border border-slate-400 rounded bg-slate-100'>
                    <table className='mx-auto'>
                        <tbody>
                            <tr>
                                <th>Username</th>
                                <td>: admin</td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td>: admin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </main>
    )
}


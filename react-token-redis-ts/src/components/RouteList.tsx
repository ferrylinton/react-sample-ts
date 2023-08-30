import { Route, Routes } from 'react-router-dom';
import AboutPage from "../pages/About";
import AuthorPage from "../pages/Author";
import HomePage from "../pages/Home";
import LoginPage from '../pages/Login';
import PrivateRoute from './PrivateRoute';


export default function RouteList() {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/author' element={<AuthorPage />}></Route>
            </Route>

            <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
    )
}

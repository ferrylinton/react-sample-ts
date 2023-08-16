import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import TagPage from "./pages/Tag";
import AboutPage from "./pages/About";
import { LocaleProvider } from "./providers/locale-provider";


function App() {

    return (
        <LocaleProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<HomePage />}></Route>
                        <Route path='/post' element={<PostPage />}></Route>
                        <Route path='/tag' element={<TagPage />}></Route>
                        <Route path='/about' element={<AboutPage />}></Route>
                    </Routes>
                </Layout>
            </Router>
        </LocaleProvider>
    )
}

export default App
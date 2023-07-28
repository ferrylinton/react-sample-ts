import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import TagPage from "./pages/Tag";
import AboutPage from "./pages/About";


function App() {

    return (
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


    )
}

export default App
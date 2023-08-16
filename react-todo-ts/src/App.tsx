import Layout from "./components/Layout";
import RouteList from './components/RouteList';
import { LocaleProvider } from "./providers/locale-provider";


function App() {
    return (
        <LocaleProvider>
            <Layout>
                <RouteList />
            </Layout>
        </LocaleProvider>
    )
}

export default App
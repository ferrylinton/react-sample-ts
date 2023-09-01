import Layout from "./components/Layout";
import RouteList from './components/RouteList';
import { AppProvider } from "./providers/app-provider";
import { LocaleProvider } from "./providers/locale-provider";


function App() {
    return (
        <LocaleProvider>
            <AppProvider>
                <Layout>
                    <RouteList />
                </Layout>
            </AppProvider>
        </LocaleProvider>
    )
}

export default App
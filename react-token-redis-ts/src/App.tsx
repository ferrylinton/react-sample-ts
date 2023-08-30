import Layout from "./components/Layout";
import RouteList from './components/RouteList';
import { AuthProvider } from "./providers/auth-provider";
import { LocaleProvider } from "./providers/locale-provider";


function App() {
    return (
        <LocaleProvider>
            <AuthProvider>
                <Layout>
                    <RouteList />
                </Layout>
            </AuthProvider>
        </LocaleProvider>
    )
}

export default App
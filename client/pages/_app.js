import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
    return (
        <div>
            <Header currentUser={currentUser}></Header>
            <div className='container'>
                <Component {...pageProps} currentUser={currentUser} />
            </div>
        </div>
    );
};

AppComponent.getInitialProps = async (appContext) => {
    try {
        const client = buildClient(appContext.ctx);
        const { data } = await client.get('/api/users/currentUser');

        let pageProps;
        if (appContext.Component.getInitialProps) {
            pageProps = await appContext.Component.getInitialProps(
                appContext.ctx,
                client,
                data.currentUser
            );
        }
        return { ...data, pageProps };
    } catch (error) {
        return { currentUser: null };
    }
};

export default AppComponent;

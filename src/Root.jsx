import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-132px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ScrollRestoration/>
        </div>
    );
};

export default Root;
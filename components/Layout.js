import { Fragment } from 'react';
import CallToAction from './CallToAction';
import Container from './Container'
import Heading from './Heading';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return <Fragment>
        <Header />
        <main>
            {children}
        </main>
        <CallToAction />
        <Footer />
    </Fragment>
};
export default Layout;
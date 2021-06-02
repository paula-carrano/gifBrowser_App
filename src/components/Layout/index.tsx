import React, { FC } from 'react';
import { Header, Footer } from './components'

const Layout: FC = ({ children }) => {
    return (
        <div className="layout" >
            <Header />
            {children}
            <Footer />
        </div>

    );
}

export { Layout };

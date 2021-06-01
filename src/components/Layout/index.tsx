import React, { FC } from 'react';
import { Header, Footer } from './components'

const Layout: FC = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export { Layout };

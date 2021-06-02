import React, { FC } from 'react';
import { Header, Footer } from './components'
import './styles.css'

const Layout: FC = ({ children }) => {
    return (
        <div className="layout" >
            <div className="contenedor">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export { Layout };

import React, { useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoadingContext } from '../../context/LoadingProvider'
import './styles.css'


const Loading = () => {
    const { loading } = useContext(LoadingContext)

    return (
        <>
            {   loading &&
                <div className="loading_container">
                    <CircularProgress color="primary" />
                </div>}
        </>
    );
}

export { Loading };

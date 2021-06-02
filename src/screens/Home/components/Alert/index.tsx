import React, { FC } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

const AlertGif: FC = () => {
    return (
        <div>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                 No se encuentran GIF´s disponibles
            </Alert>

        </div>
    );
}

export { AlertGif };

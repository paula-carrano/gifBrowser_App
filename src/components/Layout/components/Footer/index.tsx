import React, { FC } from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';



const Footer: FC = () => {
    return (
        <div className="Footer">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="body2" color="inherit">
                        Dev by
                        <Link href="https://github.com/paula-carrano" color="inherit"> Paula Carrano</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export { Footer };

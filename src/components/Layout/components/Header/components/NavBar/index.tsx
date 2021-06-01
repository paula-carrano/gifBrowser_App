import React, { FC } from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import navLinks from './dataNav'
import { MenuItem } from './type';


const NavBar: FC = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    {
                        navLinks.map(({ link, name }: MenuItem) => {
                            return (
                                <Typography key={name} variant="h6" >
                                    <Link href={link} color="inherit">
                                        | {name} |
                                    </Link>
                                </Typography>
                            )
                        })
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export { NavBar };

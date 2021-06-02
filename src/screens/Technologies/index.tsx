import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import TechItems from './dataTech'
import './styles.css'

const Technologies = () => {
    return (
        <div className="list_tech">
            <List
                component="nav">
                <Typography variant="h4" gutterBottom>
                    Tecnologías utilizadas en el proyecto:
                </Typography>
                {
                    TechItems.map((t, i) => {
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t} key={t[i]} />
                            </ListItem>
                        )
                    }

                    )
                }
            </List>
        </div>
    );
}

export { Technologies };

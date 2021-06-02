import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, ListSubheader } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import TechItems from './dataTech'
import './styles.css'

const Technologies = () => {
    return (
        <div className="list_tech">
            <List
                component="nav"
                subheader={
                    <ListSubheader>Tecnologías utilizadas en el proyecto:</ListSubheader>}>
                {
                    TechItems.map((t) => {
                        return (
                            <ListItem key={t.id}>
                                <ListItemIcon>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary={t.name} />
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

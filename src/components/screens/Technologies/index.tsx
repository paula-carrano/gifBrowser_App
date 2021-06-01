import React from 'react';
import { List, ListSubheader } from '@material-ui/core';

const Technologies = () => {
    return (
        <div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
        </ListSubheader>
                }>


            </List>
        </div>
    );
}

export { Technologies };

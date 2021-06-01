import React, { FC } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { SearchBar, CardGif } from './components';

const Home: FC = () => {
    return (
        <div>
            <SearchBar />

            <GridList cellHeight={300} cols={4}>
                <GridListTile > <CardGif /></GridListTile>
            </GridList>

        </div>
    );
}

export { Home };

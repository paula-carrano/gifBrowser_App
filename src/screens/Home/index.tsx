import React, { FC, useState, useEffect } from 'react';
import { Grid, GridList, GridListTile, TextField } from '@material-ui/core';
import { CardGif, AlertGif } from './components';
import { search_Gif } from '../../services/gifSearch';
import { Gif } from './type'


const Home: FC = () => {

    const [searchInput, setSearchInput] = useState("")
    const [gifSearched, setGifSearched] = useState<Gif[]>([])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchInput(event.currentTarget.value)
    }

    useEffect(() => {
        search_Gif(searchInput)
            .then(r => setGifSearched(r.data.data))
    }, [searchInput]);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <TextField
                        label="Search your GIF"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(event) => handleInputChange(event)}
                    />
                </Grid>
            </Grid>
            <GridList cellHeight={300} cols={5}>
                {
                    gifSearched ? (
                        gifSearched.map(g => {
                            return (
                                <GridListTile>
                                    <CardGif data={g} key={g.id} />
                                </GridListTile>
                            )
                        }))
                        : <AlertGif />
                }
            </GridList>
        </div >
    );


}

export { Home };

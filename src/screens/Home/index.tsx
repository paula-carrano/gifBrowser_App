import React, { FC, useState } from 'react';
import { Grid, GridList, GridListTile, Typography, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { CardGif, AlertGif } from './components';
import { search_Gif } from '../../services/gifSearch';
import { Gif } from './type'
import './styles.css'


const Home: FC = () => {

    const [searchInput, setSearchInput] = useState("")
    const [gifSearched, setGifSearched] = useState<Gif[]>([])
    const [titleGif, setTitleGif] = useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchInput(event.currentTarget.value)
    }

    const handleOnClick = () => {
        search_Gif(searchInput)
            .then(r => setGifSearched(r.data.data))
        setTitleGif(searchInput);
        setSearchInput("")
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid sm={12} md={11} >
                    <InputBase
                        className="input_search"
                        placeholder="Search your GIF"
                        onChange={(e) => handleInputChange(e)}
                        fullWidth
                        value={searchInput}
                        inputProps={{
                            'aria-label': '"Search your GIF"', 'name': `'${searchInput}'`,
                        }}
                    />
                </Grid>
                <Grid sm={12} md={1} >
                    <IconButton onClick={handleOnClick} aria-label="search"  >
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Typography variant="h3" component="h2" gutterBottom>
                {titleGif}
            </Typography>
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

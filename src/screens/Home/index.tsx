import React, { FC, useState, useContext } from 'react';
import { Grid, GridList, GridListTile, Typography, InputBase, IconButton, Hidden } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { CardGif, AlertGif } from './components';
import { search_Gif } from '../../services/gifSearch';
import { LoadingContext } from '../../context/LoadingProvider'
import { Gif } from './type'
import './styles.css'


const Home: FC = () => {

    const [searchInput, setSearchInput] = useState("")
    const [gifSearched, setGifSearched] = useState<Gif[]>([])
    const [titleGif, setTitleGif] = useState("")
    const { setLoading } = useContext(LoadingContext)


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchInput(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.code === "Enter") {
            handleOnClick()
        }
    }

    const handleOnClick = () => {
        setLoading(true)
        setTimeout(() =>
            search_Gif(searchInput)
                .then(r => {
                    setGifSearched(r.data.data)
                    setLoading(false)
                }), 1000)
        setTitleGif(searchInput);
        setSearchInput("")
    };

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={11} md={11} >
                    <InputBase
                        className="input_search"
                        placeholder="Search your GIF"
                        fullWidth
                        value={searchInput}
                        name="searInput"
                        onKeyPress={onKeyPressHandler}
                        onChange={(e) => handleInputChange(e)}
                        inputProps={{
                            'aria-label': '"Search your GIF"', 'name': `'${searchInput}'`,
                        }}
                    />
                </Grid>
                <Hidden only='xs'>
                    <Grid item xs={1} md={1} >
                        <IconButton onClick={handleOnClick} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Typography variant="h5" component="h3" className="principal_title">
                {titleGif}
            </Typography>
            <Grid container spacing={1}>
                {
                    gifSearched ? (
                        gifSearched.map(g => {
                            return (
                                <Grid container item xs={12} md={3} key={g.id}>
                                    <CardGif data={g} />
                                </Grid>
                            )
                        }))
                        : <AlertGif />
                }

            </Grid>
        </div >
    );


}

export { Home };

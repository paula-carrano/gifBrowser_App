import React, { FC } from 'react';
import { TextField, Grid } from '@material-ui/core'

const SearchBar: FC = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item sm={12}>
                    <TextField
                        id="search"
                        label="Search your GIF"
                        variant="outlined"
                        fullWidth />
                </Grid>
            </Grid>
        </div>
    );
}
export { SearchBar };

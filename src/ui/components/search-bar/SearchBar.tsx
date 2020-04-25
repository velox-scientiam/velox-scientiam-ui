import React, { FunctionComponent } from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar: FunctionComponent = () => {
  return (
    <form>
      <Grid container alignItems="center" wrap="nowrap">
        <Box flexGrow={1}>
          <TextField
            id="filled-basic"
            label="Search"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
        <IconButton color="inherit" aria-label="Search" type="submit">
          <SearchIcon color="primary" />
        </IconButton>
      </Grid>
    </form>
  );
};

export default SearchBar;

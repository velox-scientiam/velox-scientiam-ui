import React, { FunctionComponent, FormEvent } from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar: FunctionComponent = () => {
  const searchSubmitHandler = (event: FormEvent<HTMLElement>): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={searchSubmitHandler}>
      <Grid container alignItems="center" wrap="nowrap">
        <Box flexGrow={1} marginRight={1}>
          <TextField
            id="search-field"
            label="Search"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
        <IconButton aria-label="Search" type="submit">
          <SearchIcon color="inherit" />
        </IconButton>
      </Grid>
    </form>
  );
};

export default SearchBar;

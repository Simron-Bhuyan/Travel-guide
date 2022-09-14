import React from 'react';

import {Autocomplete} from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Box
} from '@material-ui/core';
import useStyles from './styles'


const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={
                classes.toolbar
            }>
            <Images>
                        <img src="images/road-trip.png"/>
                    </Images>

                <Typography variant="h5"
                    className={
                        classes.title
                }>
                    
                    Travel Guide</Typography>
                <Box display="flex">
                    <Typography variant="h6"
                        className={
                            classes.title
                    }>
                        Explore new places</Typography>

                    <div className={
                        classes.search
                    }>
                        <div className={
                            classes.searchIcon
                        }>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search...."
                            classes={
                                {
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }
                            }/>
                    </div>

                </Box>
            </Toolbar>
        </AppBar>
    );
}
const Images = styled.div `
width: 40px;
img{
    width: 100%;
    
}
`
export default Header;

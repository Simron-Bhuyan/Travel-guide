import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClick, setChildClick] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [type, setType] = useState('restaurants ');
    const [rating, setRating] = useState('');
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({
            coords: {
                latitude,
                longitude
            }
        }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, [])
    useEffect(() => {
        setisLoading(true)
        console.log(coordinates, bounds);

        getPlacesData(type,bounds.sw, bounds.ne).then((data) => {
            console.log(data);
            setPlaces(data);
            setisLoading(false)
        })
    }, [type,coordinates, bounds]); // empty dependency array means we want to execute this only at the start

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container
                spacing={3}
                style={
                    { width: '100%' }
                }>
                <Grid item
                    xs={12}
                    md={4}>
                    <List places={places}
                        childClick={childClick}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item
                    xs={12}
                    md={8}>
                    <Map setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClick={setChildClick}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;

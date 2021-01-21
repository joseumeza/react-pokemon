import React from 'react';
import Navigation from './common/Navigation';
import PokemonCard from './PokemonCard'
import Typography from '@material-ui/core/Typography'

function App() {
    return (
        <div>
            <Navigation />
            <Typography align='center' variant='h1'>
                Pokedex
            </Typography>
            <PokemonCard />
        </div>
    )
};

export default App;

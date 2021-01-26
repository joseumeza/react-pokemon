import React from 'react';
import Navigation from './common/Navigation';
import PokemonCard from './PokemonCard'
import Typography from '@material-ui/core/Typography'
import Crying from './crying'

function App() {
    return (
        <div>
            <Navigation />
            <Typography align='center' variant='h1'  >
                Pokedex
            </Typography>
            <PokemonCard />
            <Crying />
        </div>
    )
};

export default App;

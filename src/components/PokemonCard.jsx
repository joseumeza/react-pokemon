import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Request from './Request'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {


  const classes = useStyles();
  const [pokemon, setPokemon] = useState('143')

  function searchPokemon(pokemon, event) {
    setPokemon(pokemon);

  }

  function handleClick(id) {
    let poke = id + 1;
    setPokemon(poke.toString())

  }

  return (
    <Container align='center' >
    <Card className={classes.root} >
      <Request pokemon={pokemon} searchPokemon={searchPokemon} handleClick={handleClick}/>
      
    </Card>
    </Container>
  );
}
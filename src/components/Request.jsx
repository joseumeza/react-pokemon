import React, {useState, useEffect} from 'react'
import axios from '../axios'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Request(props) {
    const classes = useStyles();
    const pokemonUrl = props.pokemon;

    let [pokemon, setPokemon] = useState({})

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(pokemonUrl);
            setPokemon(request.data)
            return request.data;
        }
        fetchData();
    }, [pokemonUrl])


    

    return (
        <div>
        <CardActionArea onClick={() => props.handleClick(pokemon.id)}>
        <CardMedia
          className={classes.media}
          image={pokemon === {} ? "" : pokemon.sprites.front_default}
          title={pokemon === {} && pokemon.name}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
          <Typography variant="h4" color="textSecondary" component="p">
              Id: {pokemon.id} Wt: {pokemon.weight}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </div>
    )
}
import React, {useState, useEffect} from 'react'
import snorlax from '../snorlax'
import axios from '../axios'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core'
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import Input from '@material-ui/core/Input'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 325,
    },
  });

export default function Request(props) {
    const classes = useStyles();
    const pokemonUrl = props.pokemon;
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState(snorlax)
    const [imgInfo, setImgInfo] = useState({
        isFront: true,
        isShiny: false,
        imgUrl:snorlax.sprites.front_default
    })


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(pokemonUrl);
            setPokemon(request.data)
            console.log(request.status)
            setImgInfo( (prev) => {
                return {
                    ...prev,
                    imgUrl: request.data.sprites.front_default 
                };
            })
            return request.data;
        }
        fetchData();
    }, [pokemonUrl])

    function handleClick(event) {
        const imgs = pokemon.sprites
        const [pokeFront, pokeBack] = [imgs.front_default, imgs.back_default]
        const [shinyFront, shinyBack] = [imgs.front_shiny, imgs.back_shiny]

        if(event.currentTarget.name === 'face') {
            if (imgInfo.isFront) {
                if(imgInfo.isShiny){
                    //change to back shiny
                    setImgInfo((prev) => {
                        return {
                            ...prev,
                            isFront:!imgInfo.isFront,
                            imgUrl: shinyBack
                        }
                    })
                } else {
                    //change to default back
                    setImgInfo((prev) => {
                        return {
                            ...prev,
                            isFront: !imgInfo.isFront,
                            imgUrl: pokeBack
                        }
                    })
                } 
            } else{
                if(imgInfo.isShiny){
                    //change to front shiny
                    setImgInfo((prev) => {
                        return {
                            ...prev,
                            isFront:!imgInfo.isFront,
                            imgUrl: shinyFront
                        }
                    })

                } else {
                    //change to default front
                    setImgInfo((prev) => {
                        return {
                            ...prev,
                            isFront:!imgInfo.isFront,
                            imgUrl: pokeFront 
                        }
                    })
                } 
            }
        } else {
            if (imgInfo.isFront) {
                if(imgInfo.isShiny){
                    //change to front default
                    setImgInfo((prev) => {
                        return {
                            ...prev,
                            isShiny:!imgInfo.isShiny,
                            imgUrl: pokeFront
                        }
                    })
                } else {
                    //change to shiny front
                    setImgInfo((prev) => {
                        return {
                            ...prev,
                            isShiny:!imgInfo.isShiny,
                            imgUrl: shinyFront 
                        }
                    })
                } 
            } else{
                if(imgInfo.isShiny){
                    //change to back default
                    setImgInfo((prev) => {
                        return {
                            ...prev,
                            isShiny:!imgInfo.isShiny,
                            imgUrl: pokeBack
                        }
                    })
                } else {
                    //change to shiny back
                    setImgInfo((prev) => {
                        return {
                            ...prev,
                            isShiny:!imgInfo.isShiny,
                            imgUrl: shinyBack
                        }
                    })
                } 
            }
        }


    }



    

    return (
        <div>
            {!pokemon && <h1>not found</h1>}
        <CardActionArea onClick={() => {
            setImgInfo((prev) => {
                return {
                    ...prev,
                    isFront: true,
                    isShiny: false
                }
            });
            props.handleClick(pokemon.id)}}>
        <CardMedia
          className={classes.media}
          image={imgInfo.imgUrl}
          title={pokemon.name.toUpperCase()}

        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2" >
            {pokemon.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
              ID: {pokemon.id} | WT: {pokemon.weight}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions> 
        <Button onClick={handleClick} name='shiny' size="small" color="primary">
            <FlareOutlinedIcon color={imgInfo.isShiny ? "primary" : "secondary"}/>
        </Button>
        <Button onClick={handleClick} name="face" size="small" color="primary">
            <LoopOutlinedIcon />
        </Button>

        <Input onChange={(e) => setSearch(e.currentTarget.value)} id="pokemonSearch" size="small" aria-describedby="search Pokemon" value={search} placeholder="Find Pokemon" />
        <Button onClick={() => {
            props.searchPokemon(search)
            setSearch('')
            }}>Go</Button>

      </CardActions>
      </div>
    )
}
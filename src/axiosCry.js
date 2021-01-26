import axios from 'axios'

const cryInstance = axios.create({
    baseURL:'https://api.pkmnapi.com/v1/pokemon/names/1',
    timeout: 1000,
    headers: {Authorization: 'Bearer cNYyLp9I5WJqulAASAY7uGaRGbtU9RhPQBmmfT1qyDyO1UBk7i3xAblRpCbwVqw7'}
})

export default cryInstance;
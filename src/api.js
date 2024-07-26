const API_KEY = ''
let url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
let response = await fetch(url);

let giphy = await response.json(); // читаем ответ в формате JSON

// console.log(giphy.data.embed_url);

export {giphy}

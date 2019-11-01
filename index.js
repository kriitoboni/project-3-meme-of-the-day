fetch('https://api.imgflip.com/get_memes'),{ method: 'GET'
})
  .then(response => {
    if (response.ok){
        console.log('Successful request!')
    })
  .then(response => response.json())
  .then(memes => {memes.forEach(meme => {const { id, name, width, url } = meme;});})
  .catch(error => console.log('Oops, we got an error ${STATUS_CODE}'));
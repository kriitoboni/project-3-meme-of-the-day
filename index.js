fetch('https://api.imgflip.com/get_memes')
  .then(response => {
    if (response.ok){
      console.log('Successful request!')
    } else {
      console.log('Oops, we got an error ${STATUS_CODE}')
    }
    return response.json()
    })
  .then(body => body.data.memes)
  .then(memes => memes.map(meme => {
    const { id, name, width, height, url } = meme;
    return { id, name, width, height, url };
           }))
  .then(memesSorted => (memesSorted.filter(meme => meme.width < 500 || meme.height < 500)).sort((a, b) => parseInt(a.id) + parseInt(b.id)))
  .then(memesSorted => console.log(memesSorted))
  .catch(err => console.error(err.message));


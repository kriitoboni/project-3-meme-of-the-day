export function getMemes(URL){
    return fetch(URL)
        .then(response => {
            if (response.ok){
                console.log('Successful request!')
            } else {
                console.log('Oops, we got an error ${STATUS_CODE}')
            }
            return response.json()
            })
        .then(body => body.data.memes)
        .catch(err => console.error(err.message));
    return memes;
}

export const ENDPOINT = "https://api.imgflip.com/get_memes";





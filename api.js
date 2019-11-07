
export function getMemesData(url){
    return fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('Successful request!')
            } else {
                console.log('Oops, we got an error ${response.satus}')
            }
            return response.json()
            })
        .then(body => body.data.memes)
}

export const ENDPOINT = "https://api.imgflip.com/get_memes";






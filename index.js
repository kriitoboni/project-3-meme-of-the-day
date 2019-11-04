import { getMemes, ENDPOINT } from "./api.js";

function mapper(memes){
  const memesM = memes.map(meme => {
    const { id, name, width, height, url } = meme;
    return { id, name, width, height, url };
           });
  return memesM
}

function filterr(memesM){
  const memesF = memesM.filter(meme => meme.width < 500 || meme.height < 500);
  return memesF;
}

function sortt(memesF){
  const memesSorted = memesF.sort((a, b) => parseInt(a.id) + parseInt(b.id));
  return memesSorted;
}

getMemes(ENDPOINT)
  .then(mapper(memes))
  .then(filterr(memes))
  .then(sortt(memes))
  .then(memesSorted => console.log(memesSorted));



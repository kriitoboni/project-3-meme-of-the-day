
export function format (meme) {
  const { id, name, width, height, url } = meme;
  return { id, name, width, height, url };
}

export function biggerThan ({ width, height }, size) {
  return width < size || height < size;
}

export function ascendingById (firstMeme,nextMeme) {
  return parseInt(firstMeme.id) - parseInt(nextMeme.id);
}

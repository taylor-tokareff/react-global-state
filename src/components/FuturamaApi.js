export const fetchFuturamaCharacters = async () => {
  const res = await fetch(
    'https://futuramaapi.herokuapp.com/api/v2/characters'
  );
  const json = await res.json();

  return json.map(({ PicUrl, Name }) => ({
    name: Name,
    image: PicUrl,
  }));
};

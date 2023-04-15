export const AllProduct = async (query) => {
  // const response = await axios.get(`${WEEE_API}?zipcode=77494&keyword=tofu&limit=60&offset=0&X-RapidAPI-Key=${WEEE_KEY}`);
  // console.log(response.data);
  // return response.data;

  const url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=77494&keyword=+${query}&limit=60&offset=0`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '854fcb6610msh254332227214f21p119d2ejsnb3ea0e92ed66',
      'X-RapidAPI-Host': 'weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com'
    }
  };

  fetch(url, options)
  .then((res)  => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err.message));
}

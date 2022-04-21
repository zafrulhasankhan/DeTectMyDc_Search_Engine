import axios from 'axios';

export const GoogleSearch = async (term) => {
  console.log("jjj");
  const { data } = await axios.get(
    'https://www.googleapis.com/customsearch/v1',
    {
      params: {
        key: "AIzaSyDRTXkCXR9-iRMKcpfQBEWIEsTBJsOKznE",
        cx: "af5d3725b68ab69c0",
        q: term,
      },
    }
  );
 

  return data;
};

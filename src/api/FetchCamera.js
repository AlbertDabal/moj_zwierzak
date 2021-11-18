import axios from 'axios';

export const GetCamera = async () => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/kamery/zwroc_liste_zalogowanego`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => {
    console.log(error);
  });

  return res;
};

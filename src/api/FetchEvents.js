import axios from 'axios';

export const SetEvents = async (startDate, finishDate, camera) => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/zdarzenia/zwroc_liste_zalogowanego/${camera}/${startDate}/${finishDate}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => {
    console.log(error);
  });
  return res;
};

import axios from 'axios';

export const SetEvents = async (startDate, finishDate, camera, animals) => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    // eslint-disable-next-line max-len
    url: `${process.env.REACT_APP_ADDRESS}api/zdarzenia/zwroc_liste_zalogowanego/${camera}/${animals}/${startDate}/${finishDate}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => {
    console.log(error);
  });
  return res;
};

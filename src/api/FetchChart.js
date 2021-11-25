import axios from 'axios';

export const GetChart = async () => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/zdarzenia/wykres`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => {
    console.log(error);
  });

  return res;
};

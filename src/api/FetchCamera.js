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

export const DeleteCamera = async (idKamery) => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/kamery/usun_kamere`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id_kamery: idKamery,
    },
  });

  return res;
};

export const AddCamera = async (nrSeryjny, model, wlasnaNazwa) => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/kamery/dodaj_kamere_zalogowanego`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      numer_seryjny: nrSeryjny,
      model,
      wlasna_nazwa: wlasnaNazwa,
    },
  });
};

export const EditCamera = async (idKamery, nrSeryjny, model, wlasnaNazwa) => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/kamery/edytuj_kamere_zalogowanego`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id_kamery: idKamery,
      numer_seryjny: nrSeryjny,
      model,
      wlasna_nazwa: wlasnaNazwa,
    },
  });
};

/* eslint-disable no-unused-expressions */
import axios from 'axios';

// eslint-disable-next-line camelcase
export const Register = async (login, imie, nazwisko, email, hash_hasla) => {
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/uzytkownicy/dodaj_uzytkownika`,
    method: 'post',
    data: {
      login,
      hash_hasla,
      imie,
      nazwisko,
      email,
    },
  }).catch((error) => {
    console.log(error);
  });

  return res;
};

export const SetLogin = async (username, password) => {
  const reqData = {
    grant_type: 'password',
    username,
    password,
  };

  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}auth/token`,
    method: 'post',
    withCredentials: true,
    crossdomain: true,
    data: Object.keys(reqData)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(reqData[key])}`)
      .join('&'),
  }).catch((error) => {
    throw error;
  });

  console.log(res);
  sessionStorage.setItem('isAuth', true);
  sessionStorage.setItem('tokenAuth', res.data.access_token);

  return res;
};

export const GetUser = async () => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/uzytkownicy/zwroc_zalogowanego`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => {
    console.log(error);
  });

  return res;
};

export const EditUserInfo = async (login, imie, nazwisko, email) => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/uzytkownicy/edytuj_uzytkownika_zalogowanego`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      login,
      imie,
      nazwisko,
      email,
    },
  }).catch((error) => {
    console.log(error);
  });

  console.log(res);
};

export const EditUserPassword = async (login, imie, nazwisko, email, password) => {
  const token = sessionStorage.getItem('tokenAuth');
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/uzytkownicy/edytuj_uzytkownika_zalogowanego`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      login,
      imie,
      nazwisko,
      email,
      hash_hasla: password,
    },
  }).catch((error) => {
    console.log(error);
  });

  console.log(res);
};

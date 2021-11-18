/* eslint-disable no-unused-expressions */
import axios from 'axios';

// eslint-disable-next-line camelcase
export const Register = async (login, imie, nazwisko, email, hash_hasla) => {
  const res = await axios({
    url: `${process.env.REACT_APP_ADDRESS}api/uzytkownicy/dodaj_uzytkownika`,
    method: 'post',
    headers: {
      Authorization:
        // eslint-disable-next-line max-len
        'Bearer jHF2tLSq_PZaR4zLu9GLq165tqbnk0frsIpUp5kQLDW4KC8h20RtWV1SWa_D1UAztKILNr3kQ8ilVDzspWflYvcrGnyrkuD4t7i2eFmyyMlbh_bc3ThNjhwRPIvVvfJyrx8uLbDBGkRJjnvhgmCaM6EPgXyBc8Dr0Dok9Y-byyeCnOU0qJ3uX2IbIiAIXhzOV21YRgUCV1hhu3KDfUHlOQ',
    },
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

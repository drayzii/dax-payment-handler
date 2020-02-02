import axios from 'axios';
import getUrl from './getUrl';

export default async (publicKey, encryptCardDetails) => {
  try {
    const response = await axios.post(`${getUrl()}/flwv3-pug/getpaidx/api/charge`, {
      PBFPubKey: publicKey,
      client: encryptCardDetails,
      alg: '3DES-24'
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

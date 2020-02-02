import axios from 'axios';

const url = process.env.NODE_ENV === 'development'
  ? 'https://ravesandboxapi.flutterwave.com'
  : 'https://api.ravepay.co';

export default async (publicKey, encryptCardDetails) => {
  try {
    const response = await axios.post(`${url}/flwv3-pug/getpaidx/api/charge`, {
      PBFPubKey: publicKey,
      client: encryptCardDetails,
      alg: '3DES-24'
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

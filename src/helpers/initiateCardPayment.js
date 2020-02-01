import axios from 'axios';

export default async (publicKey, encryptCardDetails) => {
  try {
    const response = await axios.post('https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/charge', {
      PBFPubKey: publicKey,
      client: encryptCardDetails,
      alg: '3DES-24'
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

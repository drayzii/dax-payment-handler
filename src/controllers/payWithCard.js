import out from '../helpers/response';
import getKey from '../helpers/getKey';
import encryptCard from '../helpers/encryptCard';
import initiateCardPayment from '../helpers/initiateCardPayment';

export default async (req, res) => {
  try {
    const { keys, payload } = req.body;
    const key = getKey(keys.SECRET);
    const encryptCardDetails = encryptCard(payload, key);
    const response = await initiateCardPayment(keys.PUBLIC, encryptCardDetails);
    return response.data.status === 'success'
      ? out(res, 200, 'Payment successful', response.data)
      : out(res, response.status, 'Payment failed', null, response.data.message);
  } catch (err) {
    return out(res, 500, 'Something went wrong!', null, err.message || err);
  }
};

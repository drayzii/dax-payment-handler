import out from '../helpers/response';
import getKey from '../helpers/FlutterWave/getKey';
import encryptData from '../helpers/FlutterWave/encryptData';
import initiatePayment from '../helpers/FlutterWave/initiatePayment';

export default class FlutterWave {
  static async pay(req, res) {
    try {
      const { keys, payload } = req.body;
      const key = getKey(keys.SECRET);
      const encryptedData = encryptData(payload, key);
      const response = await initiatePayment(keys.PUBLIC, encryptedData);
      return response.data.status === 'success'
        ? out(res, 200, 'Payment successful', response.data)
        : out(res, response.status, 'Payment failed', null, response.data);
    } catch (err) {
      return out(res, 500, 'Something went wrong!', null, err.message || err);
    }
  }
}

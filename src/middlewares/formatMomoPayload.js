export default (req, res, next) => {
  req.body.payload = {
    ...req.body.payload,
    country: 'RW',
    currency: 'RWF',
    payment_type: 'mobilemoneyrw',
    network: 'RWF',
    orderRef: `MC_${Date.now()}`,
    is_mobile_money_gh: 1
  };
  next();
};

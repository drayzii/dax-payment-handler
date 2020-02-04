import cardPaySchema from './schemas/cardPayment';
import momoPaySchema from './schemas/momoPayment';
import validator from '../../helpers/validator';

export const cardPayment = (req, res, next) => (
  validator(cardPaySchema, req.body, res, next)
);

export const momoPayment = (req, res, next) => (
  validator(momoPaySchema, req.body, res, next)
);

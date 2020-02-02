import cardPaySchema from './schemas/cardPayment';
import validator from '../../helpers/validator';

export const cardPayment = (req, res, next) => (
  validator(cardPaySchema, req.body, res, next)
);

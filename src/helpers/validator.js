import out from './response';
import '@hapi/joi';

export default (schema, toValidate, res, next) => {
  const { error } = schema.validate(toValidate);
  return error
    ? out(res, 422, 'Validation failed', null, error.details[0].message)
    : next();
};

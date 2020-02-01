export default (res, status, message, data, error) => res.json(
  error ? { status, message, error } : { status, message, data },
);

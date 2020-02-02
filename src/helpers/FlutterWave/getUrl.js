import dotenv from 'dotenv';

dotenv.config();

export default () => (process.env.NODE_ENV === 'development'
  ? 'https://ravesandboxapi.flutterwave.com'
  : 'https://api.ravepay.co');

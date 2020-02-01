/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import payWithCard from './controllers/payWithCard';

import out from './helpers/response';

const app = express();

app.enable('trust proxy');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => out(res, 200, 'Welcome to Dax Payment Handler'));

app.post('/credit-card', payWithCard);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

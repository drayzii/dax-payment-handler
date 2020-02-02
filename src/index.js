/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import FlutterWave from './controllers/Flutterwave';
import * as Validations from './middlewares/validations';

const app = express();

app.enable('trust proxy');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/credit-card', Validations.cardPayment, FlutterWave.pay);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

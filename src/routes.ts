import express from 'express';
import QrCodeController from './controllers/QrCodeController';

const routes = express.Router();
const QrcodeController = new QrCodeController();

routes.get('/qrcode', QrcodeController.UrlToQrcode);

export default routes;
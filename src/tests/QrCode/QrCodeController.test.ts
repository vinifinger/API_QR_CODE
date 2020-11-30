import { expect } from 'chai';
import { request, response } from 'express';
import { describe, it } from 'mocha';
import QrCodeController from '../../controllers/QrCodeController';

const QrcodeController = new QrCodeController();
const req = request;
const res = response;

describe('Test QR Code', () => {
    it('add', async () => {
      expect('').equal('');
    }); 
  });
import { Request, Response } from 'express';
import QRCode from 'qr-image';

export default class QrCodeController {
    
    async UrlToQrcode(req: Request, res: Response) {
        
        try {
            const url = String(req.query.url);
            const qrcode = await QRCode.image(url, {type: 'png'});
            res.setHeader('Content-type', 'image/png');
            qrcode.pipe(res);

            return res.status(200);
        } catch (error) {
            return res.status(500).json({ 'Message': error });   
        }
    }
}
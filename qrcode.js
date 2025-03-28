// const express = require('express');
// const Jimp = require('jimp');
// const QRCode = require('qrcode');
// const jsQR = require('jsqr');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// app.use(express.json());

// app.post('/processQRCode', async (req, res) => {
//   const inputData = req.body.data;
//   try {
//     const processedData = inputData.toUpperCase();
//     const qrCode = await QRCode.toDataURL(processedData, { errorCorrectionLevel: 'M', margin: 1, width: 200 });
//     const qrCodeImage = Buffer.from(qrCode.replace('data:image/png;base64,', ''), 'base64');
//     fs.writeFileSync('qrcode.png', qrCodeImage);
//     res.json({ message: 'QR code generated and saved successfully' });
//   } catch (error) {
//     console.error('Error processing data:', error);
//     res.status(500).json({ error: 'An error occurred while processing data' });
//   }
// });

// app.get('/decodeQRCode', async (req, res) => {
//   try {
//     const image = await Jimp.read('qrcode.png');
//     const qrCodeData = jsQR(image.bitmap.data, image.bitmap.width, image.bitmap.height);
//     res.json({ data: qrCodeData? qrCodeData.data : 'QR code not decoded' });
//   } catch (error) {
//     console.error('Error decoding QR code:', error);
//     res.status(500).json({ error: 'An error occurred while decoding QR code' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
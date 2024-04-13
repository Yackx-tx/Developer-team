const Jimp = require('jimp');
const QRCode = require('qrcode');
const jsQR = require('jsqr');
const fs = require('fs');

const processDataAndGenerateQRCode = async (data) => {
  try {
    const processedData = data.toUpperCase();
    const qrCode = await QRCode.toDataURL(processedData, { errorCorrectionLevel: 'M', margin: 1, width: 200 });
    const qrCodeImage = Buffer.from(qrCode.replace('data:image/png;base64,', ''), 'base64');
    fs.writeFileSync('qrcode.png', qrCodeImage);
    return processedData;
  } catch (error) {
    console.error('Error processing data:', error);
    return null;
  }
};

const decodeQRCode = async (filePath) => {
  try {
    const image = await Jimp.read(filePath);
    const qrCodeData = jsQR(image.bitmap.data, image.bitmap.width, image.bitmap.height);
    console.log('Decoded data:', qrCodeData.data);
  } catch (error) {
    console.error('Error decoding QR code:', error);
  }
};

const inputData = 'QR CODE generated';
processDataAndGenerateQRCode(inputData)
 .then((processedData) => {
    if (processedData) {
      decodeQRCode('qrcode.png');
    }
  });
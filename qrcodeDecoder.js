const { QRCodeReader } = require('qrcode-reader');
const fs = require('fs');
const Jimp = require('jimp');

// Function to decode QR code from image
const decodeQRCode = async (filePath) => {
  try {
    const image = await Jimp.read(filePath);
    const qr = new QRCodeReader();
    const qrCode = await qr.decode(image.bitmap.data, image.bitmap.width, image.bitmap.height);
    if (qrCode) {
      console.log('Decoded QR code:', qrCode.data);
    } else {
      console.log('QR code not found or could not be decoded.');
    }
  } catch (error) {
    console.error('Error decoding QR code:', error);
  }
};

// Path to the QR code image to decode
const qrCodeFilePath = 'qrcode.png';

// Decode QR code
decodeQRCode(qrCodeFilePath);
const Jimp = require('jimp');
const QRCode = require('qrcode');
const jsQR = require('jsqr');
const fs = require('fs');

const processDataAndGenerateQRCode = async (data) => {
  try {
    // Process the input data
    const processedData = data.toUpperCase(); // Example: Convert data to uppercase

    // Generate QR code
    const qrCode = await QRCode.toDataURL(processedData, { errorCorrectionLevel: 'M', margin: 1, width: 200 });

    // Save the QR code image
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

// Input data
const inputData = 'QR CODE generated';

// Process data, generate QR code, and save the image
processDataAndGenerateQRCode(inputData)
  .then((processedData) => {
    if (processedData) {
      // Decode the generated QR code
      decodeQRCode('qrcode.png');
    }
  });

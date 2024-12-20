const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XjQFQLRI#NhLEANXlCgoHF6EzFX3rKxD0ky9hS2pSp-QR-GP50Oc", //paste your session_id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false", 
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",    
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",    
};

const crypto = require("crypto");

export function encryptData(data) {
    const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(process.env.ENC_KEY, 'hex'), Buffer.from(process.env.ENC_IV, 'hex'));
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}


export function decryptData(data) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(process.env.ENC_KEY, 'hex'), Buffer.from(process.env.ENC_IV, 'hex'));
    return decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
}
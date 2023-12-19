import crypto from "crypto";

async function verifyPassword(password, hash, salt) {
  return await new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 10000, 512, "sha512", (err, derivedKey) => {
      if (err) reject(err);
      else resolve(hash == derivedKey.toString("hex"));
    });
  });
}

export default verifyPassword;

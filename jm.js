// node 环境需：const CryptoJS = require("crypto-js");
// 浏览器可用 CDN：<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.min.js"></script>
const CryptoJS = require("crypto-js");
function decryptPBEWithMD5AndDES(ciphertextBase64, password, saltBytes, iterations) {
    // 第一步：派生密钥
    let derived = CryptoJS.enc.Utf8.parse(password);
    for (let i = 0; i < iterations; i++) {
      derived = CryptoJS.MD5(CryptoJS.lib.WordArray.create(derived.words.concat(CryptoJS.lib.WordArray.create(saltBytes))));
    }
  
    const key = CryptoJS.lib.WordArray.create(derived.words.slice(0, 2)); // 8 字节 key
    const iv = CryptoJS.lib.WordArray.create(derived.words.slice(2, 4));  // 8 字节 IV
  
    // 第二步：DES-CBC 解密
    const decrypted = CryptoJS.DES.decrypt(
      {
        ciphertext: CryptoJS.enc.Base64.parse(ciphertextBase64)
      },
      key,
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );
  
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  
  // 示例调用
  const ciphertext = "ZPgaEFyTtcY="; // Java 的加密结果
  const password = "secret";
  const salt = [1, 2, 3, 4, 5, 6, 7, 8]; // Java 的 salt
  const iterations = 1000;
  
  const result = decryptPBEWithMD5AndDES(ciphertext, password, salt, iterations);
  console.log("解密结果：", result);
  
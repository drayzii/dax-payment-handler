import forge from 'node-forge';

export default (card, key) => {
  const cardDetails = JSON.stringify(card);

  const cipher = forge.cipher.createCipher('3DES-ECB', forge.util.createBuffer(key));
  cipher.start({ iv: '' });
  cipher.update(forge.util.createBuffer(cardDetails, 'utf-8'));
  cipher.finish();

  const encrypted = cipher.output;
  return (forge.util.encode64(encrypted.getBytes()));
};

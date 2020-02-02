import md5 from 'md5';

export default (secretKey) => {
  const secKey = secretKey;
  const keymd5 = md5(secKey);
  const keymd5last12 = keymd5.substr(-12);

  const seckeyadjusted = secKey.replace('FLWSECK-', '');
  const seckeyadjustedfirst12 = seckeyadjusted.substr(0, 12);

  return seckeyadjustedfirst12 + keymd5last12;
};

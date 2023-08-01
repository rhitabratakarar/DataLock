const getEncryptedCredentials = async () => {
  const res = await fetch("https://localhost:44414/api/credential/");
  const encryptedCredentialList = await res.json();
  return encryptedCredentialList;
};

export default getEncryptedCredentials;

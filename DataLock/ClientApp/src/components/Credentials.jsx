import { useEffect, useState } from "react";
import Credential from "./Credential";
import InfoContainer from "./InfoContainer";
import getEncryptedCredentials from "../getEncryptedCredentials";

export default function Credentials({
  viewCredentialModal,
  refreshCredentialModal,
  passCredentialData,
  hideSearchButton,
  showStatus,
}) {
  const [encryptedCrendentialList, setEncryptedCrendentialList] = useState([]);
  useEffect(() => {
    let credentialList = document.getElementById("credential-list");
    let lastScrollTop = 0;
    credentialList.addEventListener("scroll", (event) => {
      const scrollTop = credentialList.scrollTop;
      scrollTop > lastScrollTop
        ? hideSearchButton(false)
        : hideSearchButton(true);
      lastScrollTop = scrollTop;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      const encryptedCrendentials = await getEncryptedCredentials();
      setEncryptedCrendentialList(encryptedCrendentials);
    })();
  }, []);

  return (
    <InfoContainer
      id="credential-list"
      className="pt-[70px] pb-[80px] hidden-scrollbar relative z-0"
    >
      {encryptedCrendentialList.map((credentialData, index) => {
        return (
          <Credential
            key={credentialData.credentialId}
            showStatus={showStatus}
            refreshCredentialModal={refreshCredentialModal}
            passCredentialData={passCredentialData}
            viewCredentialModal={viewCredentialModal}
            credentialData={credentialData}
          />
        );
      })}
    </InfoContainer>
  );
}

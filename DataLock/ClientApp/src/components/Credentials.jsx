import { useEffect } from "react";
import Credential from "./Credential";
import InfoContainer from "./InfoContainer";

export default function Credentials({
  viewCredentialModal,
  passCredentialData,
  refreshCredentialModal,
  hideSearchButton,
  showCopied,
}) {
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

  return (
    <InfoContainer
      id="credential-list"
      className="pt-[70px] pb-3 hidden-scrollbar relative z-0"
    >
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
      <Credential
        viewCredentialModal={viewCredentialModal}
        passCredentialData={passCredentialData}
        refreshCredentialModal={refreshCredentialModal}
        showCopied={showCopied}
      />
    </InfoContainer>
  );
}

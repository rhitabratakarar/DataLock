import Credential from "./Credential";
import InfoContainer from "./InfoContainer";

export default function Credentials({viewCredentialModal, passCredentialData, refreshCredentialModal}) {
	return (
		<InfoContainer className="pt-2 pb-3">
			<Credential
				viewCredentialModal={viewCredentialModal}
				passCredentialData={passCredentialData}
				refreshCredentialModal={refreshCredentialModal}
			/>
			<Credential
				viewCredentialModal={viewCredentialModal}
				passCredentialData={passCredentialData}
				refreshCredentialModal={refreshCredentialModal}
			/>
			<Credential
				viewCredentialModal={viewCredentialModal}
				passCredentialData={passCredentialData}
				refreshCredentialModal={refreshCredentialModal}
			/>
			<Credential
				viewCredentialModal={viewCredentialModal}
				passCredentialData={passCredentialData}
				refreshCredentialModal={refreshCredentialModal}
			/>
			<Credential
				viewCredentialModal={viewCredentialModal}
				passCredentialData={passCredentialData}
				refreshCredentialModal={refreshCredentialModal}
			/>
			<Credential
				viewCredentialModal={viewCredentialModal}
				passCredentialData={passCredentialData}
				refreshCredentialModal={refreshCredentialModal}
			/>
			<Credential
				viewCredentialModal={viewCredentialModal}
				passCredentialData={passCredentialData}
				refreshCredentialModal={refreshCredentialModal}
			/>
			<Credential
				viewCredentialModal={viewCredentialModal}
				passCredentialData={passCredentialData}
				refreshCredentialModal={refreshCredentialModal}
			/>
		</InfoContainer>
	);
}
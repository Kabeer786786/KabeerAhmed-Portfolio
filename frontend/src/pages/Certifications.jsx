import CertificateList from "../components/certifications/CertificateList";
import certificates from "../constants/certificates";

export default function Certifications() {
  
  return (
    <div className="flex flex-col items-start justify-start m-auto p-4 pb-24" style={{maxHeight:"80vh",overflow:"auto",maxWidth:"1400px"}}>
      <CertificateList certificates={certificates} />
    </div>
  )
}

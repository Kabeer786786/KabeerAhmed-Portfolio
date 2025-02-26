/* eslint-disable react/prop-types */
import CertificateCard from "./CertificateCard";

export default function CertificateList( {certificates} ) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center p-4 gap-4 m-auto">
      {certificates.map((certificate,index) => {
        return <CertificateCard key={index} image={certificate.image} title={certificate.title} issued={certificate.issued} year={certificate.year} />
      })}
    </div>
  )
}
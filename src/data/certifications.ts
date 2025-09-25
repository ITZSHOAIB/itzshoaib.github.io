interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  show: boolean;
}

const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ 900)",
    issuer: "Microsoft",
    date: "2023",
    show: true,
  },
  {
    name: "EY Blockchain - Bronze",
    issuer: "Ernst & Young",
    date: "2023",
    credentialId: "Credly",
    show: true,
  },
];

export default certifications;

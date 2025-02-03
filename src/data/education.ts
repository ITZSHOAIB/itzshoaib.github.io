interface Education {
  title: string;
  startDate?: string;
  endDate?: string;
  school: string;
  location: string;
}

const education: Education[] = [
  {
    title: "Bachelor of Science (Honours in Computer Science)",
    startDate: "2016-07",
    endDate: "2019-08",
    school: "University of Calcultta",
    location: "Kolkata, India",
  },
  {
    title: "Higher Secondary Education (12th)",
    endDate: "2016-06",
    school: "Tiljala High School",
    location: "Kolkata, India",
  },
  {
    title: "Secondary Education (10th)",
    endDate: "2014-06",
    school: "Tiljala High School",
    location: "Kolkata, India",
  },
];

export default education;

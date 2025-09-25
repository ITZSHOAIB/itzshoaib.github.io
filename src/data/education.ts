interface Education {
  title: string;
  startDate?: string;
  endDate?: string;
  school: string;
  location: string;
}

const education: Education[] = [
  {
    title: "Bachelor of Science Honours in Computer Science (67.5%)",
    startDate: "2016-07",
    endDate: "2019-08",
    school: "Asutosh College – University of Calcutta",
    location: "Kolkata, India",
  },
  {
    title: "Higher Secondary Education (12th) (71.17%)",
    endDate: "2016-06",
    school: "Tiljala High School (WBCHSE)",
    location: "Kolkata, India",
  },
  {
    title: "Secondary Education (10th) (69.14%)",
    endDate: "2014-06",
    school: "Tiljala High School (WBBSE)",
    location: "Kolkata, India",
  },
];

export default education;

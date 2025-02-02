import { yearsCalculator } from "./lib/utils";

export const SITE = {
  website: "https://itzshoaib.github.io/",
  title: "Sohab Sk",
  description: "Software Engineer II @ Codecademy",
  tags: ["portfolio", "Resume cv", "Astro"],
  ogImage: "/og-image.png",
  logo: "logo",
  logoText: "Sohab's Portfolio",
  lang: "en",
  favicon: "/favicon.svg",
  repository: "https://github.com/ITZSHOAIB/itzshoaib.github.io.git",
  author: "Sohab Sk",
  profile: "https://itzshoaib.github.io/",
};

export const ME = {
  name: "Sohab Sk",
  profession: "Software Engineer II @ Codecademy",
  profileImage: "pp2.jpg",
  profileFacts: [
    {
      value: `${yearsCalculator(new Date().toISOString(), "2020-02")}+`,
      description: "Years of Experience",
    },
    {
      value: `${yearsCalculator(new Date().toISOString(), "1999-08-04")}+`,
      description: "Years Spent on Earth",
    },
    {
      value: "India",
      description: "Location on Earth",
    },
  ],
  contactInfo: {
    email: "sksohablocal@gmail.com",
    linkedin: "https://www.linkedin.com/in/IITZSHOAIB",
    resumeDoc: "resume.pdf",
  },
  aboutMe:
    "Software Engineer II specializing in full stack application development \
  with leadership experience. Designed scalable and maintainable architectures for \
  high-impact consumer-facing products at Codecademy. Active contributor to \
  open-source projects and creator of several NPM libraries.",
};

export const SOCIALS = [
  {
    name: "Twitter",
    url: "https://twitter.com/0xSohab",
    icon: "twitter-x-fill",
    show: true,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/4techloverz",
    icon: "youtube-fill",
    show: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/ITZSHOAIB",
    icon: "github-fill",
    show: true,
  },
];

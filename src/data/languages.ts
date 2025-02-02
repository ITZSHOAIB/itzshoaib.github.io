interface Language {
  name: string;
  level: string;
  description: string;
  show: boolean;
}

const languages: Language[] = [
  {
    name: "Bengali",
    level: "Native",
    description: "I speak fluently and write fluently",
    show: true,
  },
  {
    name: "English",
    level: "Fluent",
    description: "I speak fluently and write fluently",
    show: true,
  },
  {
    name: "Hindi",
    level: "Semi-Fluent",
    description: "I speak fluently and read fluently",
    show: true,
  },
];

export default languages;

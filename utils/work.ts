export interface Template {
  link: string;
  title: string;
  location: string;
  date: string;
};
const one: Template = {
  link: "https://hi5group.co.uk/",
  title: "Working on HiFive Group",
  location: "Tangier, Morocco",
  date: "01.05.2023 - Present",
};

export const bytitle = {
  one
};
export const details = Object.values(bytitle);


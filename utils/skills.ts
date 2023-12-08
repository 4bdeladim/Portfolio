export interface Template {
  title: string;
  description: string;
};

const one: Template = {
  title: "Primary Proficiencies:",
  description: "TypeScript and JavaScript",
};

const two: Template = {
  title: "Frameworks & Libraries:",
  description: "Expertise in Next.js, React.js, Vue.js, and Nuxt.js",
};

const three: Template = {
  title: "Backend Development:",
  description: "Experience in building APIs with Laravel",
};

const four: Template = {
  title: "CMS Experience:",
  description: "Proficient in developing WordPress sites",
};

export const byTitle = {
  one, two, three, four
};

export const skills = Object.values(byTitle);

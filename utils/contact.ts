export interface Template {
  link: string;
  type: string;
  title: string;
};
const one: Template = {
  link: "mailto:benallal.abdel4dim@gmail.com",
  type: "Email",
  title: "benallal.abdel4dim@gmail.com",
};
const two: Template = {
link: "https://www.linkedin.com/in/abdeladim-benallal-7b9631268/",
    type: "Linkedin",
  title: "Abdeladim Benallal",
};
const three: Template = {
	link: "https://github.com/BenallalDev",
	type: "Github",
	title: "BenallalDev",
};
const four: Template = {
	link: "https://read.cv/join/abdeladim_benallal",
	type: "Read CV",
	title: "Abdeladim Benallal",
};
export const bytype = {
  one,
    two,
    three,
		four
};
export const contact = Object.values(bytype);

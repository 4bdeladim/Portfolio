export interface Template {
  title: string;
  code: string;
  demo: string;
};
const one: Template = {
  title: "LinkHubNow",
  code: "https://github.com/BenallalDev/LinkHubNow",
  demo: "https://linkhubnow.vercel.app/",
};

export const bytitle = {
  one
};
export const projects = Object.values(bytitle);


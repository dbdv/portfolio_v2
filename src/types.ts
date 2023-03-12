export type Job = {
  title: string;
  since: string;
  until: string;
  implemenented_stack: string[];
  achievements: string[];
  company: string;
};

export type Stack = {
  laguanges: { laguange_name: string; icon_url: string }[];
  techlonogies: { technology_name: string; icon_url: string }[];
};

export type Project = {};

export type Data = {
    about: string,
    experience: Job[],
    projects: Project[],
    stack: Stack;
}
type Profile = {
  name: string;
  description: string[];
  languages: {
    skills: string[];
    uses: string[];
  };
  links: {
    name: string;
    src: string;
  }[];
  projects: {
    name: string;
    description: string;
    src: string;
    language: string;
  }[];
};

export const myProfile: Profile = {
  name: "Watakumi",
  description: ["Ruby Developer"],
  languages: {
    skills: ["Ruby", "JavaScript", "TypeScript"],
    uses: ["Ruby on Rails", "ReactJs", "NextJs", "Deno"],
  },
  links: [
    { name: "Github", src: "https://github.com/Watakumi" },
    { name: "Twitter", src: "https://twitter.com/Watadayooo__" },
  ],
  projects: [
    {
      name: "Watakumi Page",
      description: "My Portfolio Page created by Astro.",
      src: "https://github.com/Watakumi/profile",
      language: "Astro",
    },
    {
      name: "Watakumi Profile",
      description: "My Profile API created by Deno.",
      src: "https://github.com/Watakumi/hono-deno",
      language: "TypeScript",
    },
  ],
};

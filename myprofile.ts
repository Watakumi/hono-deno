type Profile = {
  name: string;
  description: string[];
  languages: {
    skills: { name: string; src: string }[];
    uses: { name: string; src: string }[];
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
    skills: [
      { name: "Ruby", src: "https://www.ruby-lang.org/ja/" },
      {
        name: "JavaScript",
        src: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
      },
      { name: "TypeScript", src: "https://www.typescriptlang.org/" },
    ],
    uses: [
      { name: "Ruby on Rails", src: "https://rubyonrails.org/" },
      { name: "ReactJS", src: "https://ja.reactjs.org/" },
      { name: "NextJS", src: "https://nextjs.org/" },
      { name: "Deno", src: "https://deno.land/" },
    ],
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

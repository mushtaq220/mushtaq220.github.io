import Jcrew from "./jcrew.png"
import MaxFashion from "./maxfashion.png"
import MyFitnessPal from "./myfitnesspal.png"
import Monday from "./monday.png"
export const NavLinks = [
  { link: "/about", title: "About" },
  { link: "/teckstacks", title: "Teck Stacks" },
  { link: "/projects", title: "Projects" },
  { link: "/contact", title: "Contact" },
];

export const projetArr = [
  {
    deployLink: "https://incandescent-mooncake-91ae01.netlify.app",
    github: "https://github.com/rahuljithu123/happy-notebook-3138",
    title: "J.crew",
    teckstack: [
      "html",
      "css",
      "javascript",
    ],
    about:
      "J.Crew, is an American multi-brand, multi-channel, specialty retailer. It was a group project and completed by 5 collaborators in 5 days.",
    img:`${Jcrew}`
  },
  {
    deployLink: "https://silver-cascaron-65445e.netlify.app",
    github: "https://github.com/riturajnagar/Max-Fashion-clone-",
    title: "Max Fashion",
    teckstack: [
      "html",
      "css",
      "javascript",
    ],
    about:
      "Max Fashion is a Clothing retail platform. It was a end-to-end group project and was completed by 5 collaborators in 5 days.",
     img:`${MaxFashion}`
  },
  {
    deployLink: "https://jolly-duckanoo-85edce.netlify.app",
    github: "https://github.com/mushtaq220/third-nerve-7524/tree/main/myfitnesspal",
    title: "MyFitnessPal",
    teckstack: ["react", "react-router-dom", "html", "css"],

    about:
      "MyFitnessPal is a platform that tracks diet and exercise. It was a individual project and completed in 5 days. Due to the time limit, only completed simple login/signup and carousel features but tried best to complete this project. For more details visit live or code base of this project.",
    img:`${MyFitnessPal}`
  },
  {
    deployLink: "https://scintillating-gecko-f3370c.netlify.app",
    github: "https://github.com/Aman3512/monday.com_clone",
    title: "monday.com",
    teckstack: [
      "html",
      "css",
      "javascript",
    ],
    about:
      "Monday.com is a cloud-based platform that allows users to create their own applications and project management software. It was a group project and completed by 5 collaborators in 5 days..",
    img:`${Monday}`
  },
];

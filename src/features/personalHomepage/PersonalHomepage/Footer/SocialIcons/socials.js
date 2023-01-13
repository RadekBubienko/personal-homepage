import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/RadekBubienko",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Facebook",
    url: "http://facebook.com",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "LinkedIn",
    url: "http://linkedin.com",
    Icon: styleIcon(LinkedInIcon),
  },
];

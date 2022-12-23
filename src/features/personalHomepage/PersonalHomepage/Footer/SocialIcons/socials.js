import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
  {
    name: "Github",
    url: "http://github.com",
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
  {
    name: "Instagram",
    url: "http://instagram.com",
    Icon: styleIcon(InstagramIcon),
  },  
]
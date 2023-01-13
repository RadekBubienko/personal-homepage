import myPhoto from "./myPhoto.jpg";
import {
  Avatar,
  StyledButtonLink,
  ButtonIcon,
  Name,
  Summary,
  ThisIs,
  Wrapper,
  Icon,
} from "./styled.js";
import man from "./man.png";
import laptop from "./laptop.png";
import { email } from "../email";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={myPhoto} alt="Radek Bubienko" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Radek Bubienko</Name>
      <Summary>
        <Icon src={man} alt="" />
        <Icon src={laptop} alt="" />
        I`m an enthusiastic Frontend Developer in friendship with React,
        currently looking for new job opportunities and challenges.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);

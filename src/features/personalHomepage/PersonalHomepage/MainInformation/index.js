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
  Ilove,
} from "./styled.js";
import ico from "./office4.ico"
import man from "./man.png";
import laptop from "./laptop.png";
import { email } from "../email";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={myPhoto} alt="Radek Bubienko" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Radek Bubienko<Ilove src={ico} alt="" /></Name>
      <Summary>
        <Icon src={man} alt="" />
        <Icon src={laptop} alt="" />
        <Icon src={ico} alt="" />
        &nbsp;I`m an enthusiastic Frontend & Backend Developer in friendship with React, PHP,
        currently looking for new job opportunities and challenges.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);

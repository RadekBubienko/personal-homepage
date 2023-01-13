import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import {
  Address,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Paragraph,
  Wrapper,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        I'm looking forward to improving and learning new skills at FrontEnd. If
        you want to give me a chance to demonstrate my knowledge and hire me,
        please contact me by e-mail or other way. I'm gladly waiting for any
        challenges and jobs opportunities.
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);

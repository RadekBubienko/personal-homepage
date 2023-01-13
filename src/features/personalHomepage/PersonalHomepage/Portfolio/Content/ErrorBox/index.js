import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const ErrorBox = () => (
  <Wrapper>
    <WarningIcon />
    <Header>Ooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github&nbsp;project.
      <br />
      You can check them directly&nbsp;on&nbsp;Github.
    </Paragraph>
    <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">
      Go to Github
    </ButtonLink>
  </Wrapper>
);

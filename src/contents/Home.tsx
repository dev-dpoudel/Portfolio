import React, { FunctionComponent } from 'react';
import { Card, List, Image} from 'semantic-ui-react'

interface HomePageProps {
  className : string
  profile : any
}

interface ContactUrlProps{
  githubLink : string
}

const ContactDetails: FunctionComponent<ContactUrlProps> = (props): React.ReactElement => {
  return (
    <div>
      <List>
        <List.Item
          icon='github'
          content={<a href={props.githubLink}>Git</a>}
        />
      </List>
    </div>
  );
}


const HomePage: FunctionComponent<HomePageProps> = (props): React.ReactElement => {

  return (
    <Card.Group className= {props.className} fluid="true" itemsPerRow={1}>
      <Card raised >
        <Image src={props.profile.avatar_url} wrapped ui={false} size="medium" alt="Profile Image" />
        <Card.Content>
          <Card.Header>Dinesh Poudel</Card.Header>
          <Card.Meta>Software Engineer</Card.Meta>
          <Card.Description>
            Avid Learner | Gamer | Software Programmer | Writer
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ContactDetails githubLink = {props.profile.html_url || ""}/>
        </Card.Content>
      </Card>

    </Card.Group>
  );
}

export default HomePage;

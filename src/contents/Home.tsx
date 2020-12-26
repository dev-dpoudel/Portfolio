import React, { FunctionComponent } from 'react';
import { Card, List, Image } from 'semantic-ui-react'

interface HomePageProps {
  className: string
  profile: any
}

interface ContactUrlProps {
  githubLink: string
  className : string
}

const ContactDetails: FunctionComponent<ContactUrlProps> = (props): React.ReactElement => {
  return (
    <div>
      <List>
        <List.Item
          icon='github'
          className={props.className}
          content={<a href={props.githubLink}>Git</a>}
        />
      </List>
    </div>
  );
}


const HomePage: FunctionComponent<HomePageProps> = (props): React.ReactElement => {

  return (
    <Card.Group fluid="true" itemsPerRow={1}>
      <Card raised className={props.className} >
        <Image src={props.profile.avatar_url} wrapped ui={false} size="medium" alt="Profile Image" />
        <Card.Content className={props.className}>
          <Card.Header>Dinesh Poudel</Card.Header>
          <Card.Meta>Software Engineer</Card.Meta>
          <Card.Description>
            Avid Learner | Gamer | Software Programmer | Writer
        </Card.Description>
        </Card.Content >
        <Card.Content extra className={props.className}>
          <ContactDetails className={props.className} githubLink={props.profile.html_url || ""} />
        </Card.Content>
      </Card>

    </Card.Group>
  );
}

export default HomePage;

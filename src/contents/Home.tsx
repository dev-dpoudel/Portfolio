import React, { FunctionComponent } from 'react';
import { Card, List, Image} from 'semantic-ui-react'
import profile from '../profile.jpg'

interface HomePageProps {
  className : string
}

const ContactDetails: FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <div>
      <List>
        <List.Item
          icon='github'
          content={<a href='https://github.com/dev-dpoudel'>Git</a>}
        />
      </List>
    </div>
  );
}


const HomePage: FunctionComponent<HomePageProps> = (props): React.ReactElement => {

  return (
    <Card.Group className= {props.className} fluid="true" itemsPerRow={1}>
      <Card raised >
        <Image src={profile} wrapped ui={false} size="medium" />
        <Card.Content>
          <Card.Header>Dinesh Poudel</Card.Header>
          <Card.Meta>Software Engineer</Card.Meta>
          <Card.Description>
            Avid Learner | Gamer | Software Programmer | Writer
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ContactDetails />
        </Card.Content>
      </Card>

    </Card.Group>
  );
}

export default HomePage;

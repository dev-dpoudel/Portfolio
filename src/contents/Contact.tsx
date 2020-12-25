import React, { FunctionComponent } from "react";
import { Card, List, Icon } from 'semantic-ui-react';

interface ContactProps {
  className : string
}

const Contact: FunctionComponent<ContactProps> = (props): React.ReactElement => {
  
  return (
    <Card.Group className={props.className} fluid="true" itemsPerRow={1}>
      <Card >
        <Card.Content>
          <Card.Header>Reach Me @</Card.Header>
          <Card.Meta>
            <span>
              <Icon name="mail" />
              <a href='mailto:ryon_a@hotmail.com'>ryon_a@hotmail.com</a>
            </span>
          </Card.Meta>
          <Card.Description>
            <List>
              <List.Item> Dhapasi, Tokha-6 Kathmandu, Nepal </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name="linkedin" />
            <a href='https://www.linkedin.com/in/ryon03/'>LinkedIn</a>
          </span>
        </Card.Content>
      </Card>

    </Card.Group>
  );
}

export default Contact;

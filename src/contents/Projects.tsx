import React, { FunctionComponent } from 'react';
import { Card, List, Icon } from 'semantic-ui-react';

interface projectDescription {
  className: string
  projects: []
}

const projectInfoCard = (projects: any, className: string) => {

  let projectInfoCards: any[] = [];

  projects.map((item: any) => {

    projectInfoCards.push(
      <Card className= {className} key={item.id}>
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>
            <span>
              <Icon name="eye" />
              <a href={item.html_url}>View Source</a>
            </span>
          </Card.Meta>
          <Card.Description>
            <List>
              <List.Item> {item.description} </List.Item>
              <List.Item> <span className = "languages dark"> {item.language} </span> </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name="github" />
            <a href={item.homepage}>GitHub</a>
          </span>
        </Card.Content>
      </Card>
    );

    return true;
  })

  return projectInfoCards;
}

const Projects: FunctionComponent<projectDescription> = (props): React.ReactElement => {
  const projectCards = projectInfoCard(props.projects, props.className);
  return (
    <Card.Group className={props.className} fluid="true" itemsPerRow={1} children={projectCards} />
  );
}

export default Projects;

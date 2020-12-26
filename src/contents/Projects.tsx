import React, { FunctionComponent, useState } from 'react';
import { Card, List, Icon, Pagination, Dropdown, SemanticWIDTHS} from 'semantic-ui-react';

interface projectDescription {
  className: string
  projects: []
}

const itemPerPage = [
  { key: '1', value: 1, text: 1 },
  { key: '2', value: 2, text: 2 },
  { key: '3', value: 3, text: 3 }
]

const projectInfoCard = (projects: any, className: string) => {

  let projectInfoCards: any[] = [];

  projects.map((item: any) => {

    projectInfoCards.push(
      <Card className={className} key={item.id}>
        <Card.Content className={className}>
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
              <List.Item> <span className="languages dark"> {item.language} </span> </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className={className}>
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
  const [maxRecords, setMaxRecords] = useState<SemanticWIDTHS>(1)
  const [page, setPage] = useState(1)
  const setMaxRec = (value: any) => setMaxRecords(value)
  const setPageNo = (e: any, activePage: number | string | undefined) => {
    (typeof activePage === "string") ? setPage(1) : setPage(activePage || 1);
  }

  const defaultMaxRec = (typeof maxRecords == "number") ? maxRecords : 1;
  const start = (page - 1) * defaultMaxRec;
  const end = start + defaultMaxRec;

  const projectCards = projectInfoCard(props.projects.slice(start, end), props.className);

  return (
    <div>
      <Card.Group className={props.className} fluid="true" itemsPerRow={maxRecords} children={projectCards} />
      <div className="centerfloat pagebottom">
        <Pagination className={props.className}
          defaultActivePage={1}
          disabled={props.projects.length <= defaultMaxRec}
          totalPages={props.projects.length / defaultMaxRec || 1}
          onPageChange={(e, { activePage }) => setPageNo(e, activePage)} /> 
        <Dropdown className={"floatleft " + props.className}
          options={itemPerPage}
          defaultValue={itemPerPage[0].value}
          onChange={(e, d) => setMaxRec(d.value)} />
      </div>
    </div>
  );
}

export default Projects;

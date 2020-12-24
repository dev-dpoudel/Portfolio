import React, { FunctionComponent, useState } from 'react'
import { Checkbox, Grid, Icon } from 'semantic-ui-react'

const Navigator: FunctionComponent<{}> = () => {
  const [displayProfile, setProfile] = useState(false);
  const [displayProject, setProject] = useState(false);
  const [displayConnect, setConnect] = useState(false);

  const handleChange = (e:any) => {

  }

  const ToggleLabel = (iconName:string, label:string) => {
  <span> <Icon name="address card" /> {label}</span>
  }

  return (
    <Grid.Column stackable columns={2}>
      <span>
        <Checkbox slider
        Checked = {displayProfile}
        onClick={() => setProfile(!displayProfile)}
        label={"Profile"}/>
        <Icon name="address card" />
      </span>

    </Grid.Column>
  );
}

export default Navigator;

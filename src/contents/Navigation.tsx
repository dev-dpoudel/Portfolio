import React, { FunctionComponent, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const Navigate: FunctionComponent<{}> = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const history = useHistory();

  const handleItemClick = (e: any) => {
    history.push(e.target.text);
    setActiveMenu(e.target.text);
  }

  return (
    <div>
      <Menu icon vertical >
        <Menu.Item
          name='home'
          active={activeMenu === 'home'}
          onClick={handleItemClick}
          icon="home"
        />
        <Menu.Item
          name='projects'
          active={activeMenu === 'projects'}
          onClick={handleItemClick}
          icon="file archive"
        />
        <Menu.Item
          name='contact'
          active={activeMenu === 'contact'}
          onClick={handleItemClick}
          icon="envelope"
        />
      </Menu>
    </div>
  );
}

export default Navigate;

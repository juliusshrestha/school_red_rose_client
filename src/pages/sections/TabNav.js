import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ReactChild, useState} from 'react';

function TabNav() {
  const [key, setKey] = useState('home');
  return (
    <Tabs fill
    activeKey={key}
    onSelect={(k) => setKey(k)}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default TabNav;

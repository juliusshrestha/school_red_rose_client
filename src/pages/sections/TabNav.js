import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ReactChild, useState} from 'react';
import PrincipleMessage from './PrincipleMessage';
import Contact from './Contact.js'

function TabNav() {
  const [key, setKey] = useState('home');
  return (
    <Tabs fill
    activeKey={key}
    onSelect={(k) => setKey(k)}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab sx = {styles.tabstyle} eventKey="home" title="Home">
        <PrincipleMessage/>
      </Tab>
      <Tab sx = {styles.tabstyle} eventKey="Contact Us" title="Contact Us">
        <Contact/>
      </Tab>
      <Tab sx = {styles.tabstyle} eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

const styles = {
  tabstyle:{
    backgroundColor: '#ff0000',
  }
}

export default TabNav;

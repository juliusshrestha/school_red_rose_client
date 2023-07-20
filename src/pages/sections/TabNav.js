/** @jsxImportSource theme-ui */
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {ReactChild, useState} from 'react';
import PrincipleMessage from './PrincipleMessage';
import Contact from './Contact.js';
import { Container } from 'theme-ui';
import PopularCourse from './popular-course';
// import style from '../sections/TabNav.module.css';
import styled from 'styled-components';

const StyledTab = styled(Tab)`
  .nav-link {
    color: white;
  }
`;


function TabNav() {
  const [key, setKey] = useState('About us');
  const tabStyle = {
    backgroundColor: '#8C0010',
    color: 'white', // Change the text color to red
  };
  return (
    <Tabs fill
    activeKey={key}
    onSelect={(k) => setKey(k)}
      id="uncontrolled-tab-example"
      className="mb-3"
      style={tabStyle}
    >
      <Tab eventKey="About us" title="About Us">
        <Container>
        <PopularCourse />  
        </Container>
      </Tab>
      <Tab eventKey="Contact Us"  className = "Tab" title="Contact Us" >
        <Contact/>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default TabNav;

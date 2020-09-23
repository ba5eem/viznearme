import React, { useState } from 'react';
import './App.css';
import { DatePicker, message } from 'antd';
import { PageHeader, Button, Descriptions } from 'antd';
import {FormSizeDemo} from './Form';
// import DarkSkyApi from 'dark-sky-api';


function Header(){
  return (<div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Viz Near Me"
      subTitle="Online community for sharing dive reports / findings / treasure / photos / mermaids"
      extra={[
        <Button key="3">Add</Button>,
        <Button key="2">Map</Button>,
        <Button key="1" type="primary">
          Logout
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="User">James D.</Descriptions.Item>
        <Descriptions.Item label="Dive Club">
          <a>Hawaii Divers</a>
        </Descriptions.Item>
        <Descriptions.Item label="Depth Rating">PADI-recreational</Descriptions.Item>
        <Descriptions.Item label="Certification Date">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Location">Oahu, HI</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>)
}

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div>
      <div>
      <Header/>
    </div>
    <div>
      <FormSizeDemo/>
    </div>
    </div>
  );
};

export default App;
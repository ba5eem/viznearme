import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  TimePicker
} from 'antd';
import MyMap from "./MyMap";

export const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [diveMarker, setDiveMarker] = useState({
      lat:'click map', 
      lng:'click map'
    });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


  const changeMarker = (e) => {
    let coords = {
      lat:e.latlng.lat, 
      lng:e.latlng.lng
    }
    setDiveMarker(coords);
  }

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >

        <Form.Item label="I'm a">
          <Select>
            <Select.Option value="Snorkeler">Snorkeler</Select.Option>
            <Select.Option value="Freediver">Freediver</Select.Option>
            <Select.Option value="Scubadiver">Scubadiver</Select.Option>
            <Select.Option value="RebreatherDiver">RebreatherDiver</Select.Option>
            <Select.Option value="ShowMeEverything">(+)ShowMeEverything</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Location">
          <Button>Location</Button>
        </Form.Item>
   
        <Form.Item label="Date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Time">
          <TimePicker value={this} onChange={value => console.log(value)} />
        </Form.Item>

        <Form.Item label="Weather ( api)">
          <Button>Sunrise</Button>
          <Button>Sunset</Button>
        </Form.Item>
        
        <Form.Item label="Tides">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Wind Speed">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Waves">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Water Temp">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Visibility">
          <Select>
            <Select.Option value="Snorkeler">Bad (less than 10ft)</Select.Option>
            <Select.Option value="Freediver">OK (10-20ft)</Select.Option>
            <Select.Option value="Scubadiver">Good (20-50ft)</Select.Option>
            <Select.Option value="RebreatherDiver">Great (greater than 50ft)</Select.Option>
          </Select>
        </Form.Item>


        
        <Form.Item label="Select dive location on map">
          <MyMap changeMarker={changeMarker}/>
        </Form.Item>

        
        
        <Form.Item label="Click to save">
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};


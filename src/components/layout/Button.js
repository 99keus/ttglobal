import React from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const AButton = (props) => {
  const { width, height } = props;
  const style = {
    width,
    height,
    borderRadius: '10px',
    fontSize: '30px',
    fontWeight: 'bold',
  };

  return (
    <Button style={style} danger>
      {props.children}
      <RightOutlined />
    </Button>
  );
};

export default AButton;

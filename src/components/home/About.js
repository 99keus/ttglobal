import React, { Fragment } from 'react';
import { Button } from 'antd';

const About = () => {
  const style = {
    root: {
      padding: '25px 10vw',
      textAlign: 'center'
    },
    icon_quote: {
      // textAlign: 'center'
    },
    title: {
      // textAlign: 'center',
      color: '#DA3849',
      fontSize : '24px',
      lineHeight : '36px'
    },
    text: {
      // textAlign: 'center',
      color: '#333333',
      fontSize : '16px',
      lineHeight : '24px'
    },
    button: {
      border: '1px solid #DA3849',
      borderRadius:"5px",
      color: '#333333'
    }
  };
  return(
    <div style={style.root}>
      <div style={style.icon_quote}>
        <img src='\quote-vector.png'/>
      </div>
      <br/>
      <div style={style.title}>
        <b>Investment in health is an investment in the sustainable development of society</b>
      </div>
      <br/>
      <div style={style.text}>
        <p>
        Embracing the message “Fostering sustainable values”, <br/>
        <b>T&T Global</b> has been delivering our core values to our employees,  partners, customers, shareholders and the society.
        And we would appreciate your continuous support in the future.
        </p>
      </div>
      <br/>
      <Button
        size="large"
        style={style.button}
        danger
      >
        About us >
      </Button>
    </div>
  )
};

export default About;
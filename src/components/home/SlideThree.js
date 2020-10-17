import { Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';


const SlideThree = () => {
  const [selected, setSelected] = useState([0, 0, 0, 0]);

  const style = {
    root: {
      marginTop: '20px',
    },
    side: {
      root: {
        display: 'block',
        backgroundColor: '#FFFFFF',
        height: '30vw'
      },
      content: {
        padding: '30px 20px',
      },
      icon: {
        width: '20px',
        height: '20px'
      },
      title: {
        fontSize: '28px',
        color: '#BE0B31'
      },
      text: {
        fontSize: '14px',
        color: '#333333'
      },
      image: {
        width: '100%',
        maxHeight: '30vw',
      }
    },
    mid: {
      root: {
        diplay: 'block',
        backgroundColor: '#DA3849',
        height: '30vw',
      },
      content: {
        padding: '30px 20px',
        color: '#FFFFFF',
      },
      icon: {
        width: '20px',
        height: '20px'
      },
      title: {
        fontSize: '28px',
        color: '#FFFFFF'
      },
      text: {
        fontSize: '14px',
        color: '#FFFFFF'
      }
    }
  };

  const getColGrid = (col) => {
    return "ant-col-lg-" + col.toString();
  };
  const handleClick = (part) => {
    let arr = [0, 0, 0, 0];
    if (!selected[part]) {
      arr[part] = 12; arr[3] = 1;
      setSelected(arr);
    } else {
      setSelected(arr);
    };
  }
  return (
    <Row style={style.root} align="middle">
      <Col
        xs={24}
        className={getColGrid(8 + (selected[0] ? 8 : selected[3] ? -4 : 0))}
        style={style.side.root}
        onClick={() => handleClick(0)}
      >
        <Row>
          <Col
            style={style.side.content}
            span={24 - selected[0]}
          >
            <img src="\icon\home-slidethree-icon-1.png" style={style.icon} />
            <br />
            <h3 style={style.side.title}>Our International Vision</h3>
            <p style={style.side.text}>
              T&T Global always strives to become the leading medical equipment distribution company and transportation forwarding field that is loved by customers.
            </p>
          </Col>
          <Col span={selected[0]}>
            <img src="\images\home-slidethree-img1.png" style={style.side.image} />
          </Col>
        </Row>
      </Col>

      <Col
        xs={24}
        className={getColGrid(8 + (selected[1] ? 8 : selected[3] ? -4 : 0))}
        style={style.mid.root}
        onClick={() => handleClick(1)}
      >
        <Row>
          <Col
            style={style.side.content}
            span={24 - selected[1]}
          >
            <img src="\icon\home-slidethree-icon-2.png" style={style.icon} />
            <br />
            <h3 style={style.mid.title}>Our Mission</h3>
            <p style={style.mid.text}>
              T&T Global applies the great achievements of the industrial revolution 4.0, connects and optimizes all available resources of the Vietnamese health system; constantly innovating, creating, creating new dynamics and resources, contributing to perfecting and improving the system's capacity; improve competitiveness in the production chain, supply pharmaceuticals, and provide medical services in an integrated environmen
            </p>
          </Col>
          <Col span={selected[1]}>
            <img src="\images\home-slidethree-img2.png" style={style.mid.image} />
          </Col>
        </Row>
      </Col>

      <Col
        xs={24}
        className={getColGrid(8 + (selected[2] ? 8 : selected[3] ? -4 : 0))}
        style={style.side.root}
        onClick={() => handleClick(2)}
      >
        <Row>
          <Col span={selected[2]}>
            <img src="\images\home-slidethree-img3.png" style={style.side.image} />
          </Col>
          <Col
            style={style.side.content}
            span={24 - selected[2]}
          >
            <img src="\icon\home-slidethree-icon-3.png" style={style.icon} />
            <br />
            <h3 style={style.side.title}>Values Proposition</h3>
            <p style={style.side.text}>
            • Constantly improving technology, improving product and service quality<br/>
• Always customer oriented
            </p>
          </Col>

        </Row>
      </Col>
    </Row>
  )
}

export default SlideThree;
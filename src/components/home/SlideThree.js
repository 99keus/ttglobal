import { Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';


const SlideThree = () => {
  const [selected, setSelected] = useState([0, 0, 0, 0]);

  const style = {
    icon: {
      width: '20px',
      height: '20px'
    },
    title: {
      fontSize: '16px'
    },
    text: {
      fontSize: '14px'
    }
  }

  return (
    <Row>
      <Col
        xs={24}
        lg={8 + selected[1] ? 8 : selected[3] ? -4 : 0}
        style={{display: 'block'}}
        onclick={() => setSelected([0, 12, 0, 1])}
      >
        <Row>
          <Col span={24 - selected[0]}>
            <img src="\home-slidethree-icon-1.png" style={style.icon} />
            <b style={style.title}>Title</b>
            <p style={style.text}>sdf<br/>sfds<br/></p>
          </Col>
          <Col span={selected[0]}>
            <img src="" style={style.image} />
          </Col>
        </Row>
      </Col>

      <Col
        xs={24}
        lg={8 + selected[1] ? 8 : selected[3] ? -4 : 0}
        onClick={() => setSelected([0, 12, 0, 1])}
      >
        <Row>
          <Col span={24 - selected[1]}>
            <img src="\home-slidethree-icon-1.png" style={style.icon} />
            <b style={style.title}></b>
            <p style={style.text}></p>
          </Col>
          <Col span={selected[1]}>
            <img src="" style={style.image} />
          </Col>
        </Row>
      </Col>

      <Col
        xs={24}
        lg={8 + selected[1] ? 8 : selected[3] ? -4 : 0}
        onClick={() => setSelected([0, 12, 0, 1])}
      >
        <Row>
          <Col span={24 - selected[2]}>
            <img src="\home-slidethree-icon-1.png" style={style.icon} />
            <b style={style.title}></b>
            <p style={style.text}></p>
          </Col>
          <Col span={selected[2]}>
            <img src="" style={style.image} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SlideThree;
import React, { Fragment } from 'react';
import Panner from '../layout/Panner';
import { Image } from 'antd';

const OurPartner = () => {
  let style = {
    img: {
      margin: "auto",
      width: "70%"
    },
    panner: {
      height: '120px'
    }
  };

  return (
    <Fragment>
      <div
        style={{
          fontSize: '30px',
          color: '#101D78',
          width: '100%',
          textAlign: 'center',
          marginTop: '30px',
          marginBottom: '20px',
        }}
      >
        Our <strong>Partners</strong>
      </div>
      <div style={style.panner}>
        <Panner>
          <Image src="/logo-partner.png" style={style.img} />
          <Image src="/logo-partner.png" style={style.img} />
        </Panner>
      </div>
    </Fragment>
  )
};

export default OurPartner;
import React, { Fragment } from 'react';
import Panner from '../layout/Panner';
import { Image } from 'antd';

const OurPartner = () => {
  let style = {
    img: {
      margin: "auto",
      width: "70%",
      maxWidth: "150px"
    },
    panner: {
      // height: '120px',
      minHeight: '120px',
      display: 'flex',
      alignItems: 'center'
      // margin: 'auto'
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
        <Panner style={{minHeight: '120px'}}>
          <Image src="/logo-main.png" style={style.img} />
          <Image src="/logo-1.jpg" style={style.img} />
        </Panner>
      </div>
    </Fragment>
  )
};

export default OurPartner;
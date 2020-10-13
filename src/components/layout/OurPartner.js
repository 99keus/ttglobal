import React, { Fragment } from 'react';
import Panner from '../layout/Panner';
import { Image } from 'antd';

const OurPartner = () => {
  return(
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
    <Panner>
      <Image src="/logo-partner.png" width={150} />
      <Image src="/logo-partner.png" width={150} />
    </Panner>
  </Fragment>
  )
};

export default OurPartner;
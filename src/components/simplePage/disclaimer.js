import React, { Fragment } from 'react';
import { Row, Col } from 'antd';

const style= {
  root: {
    padding: '0 10vw'
  },
  title: {
    fontSize: "24px",
    lineHeight: "36px",
    color: "#DA3849",
  },
  text: {
    root: {
      padding: '20px 20px 20px 20px'
    },
    title: {
      fontSize: "20px",
      lineHeight: "30px",
      color: "#333333"
    },
    text: {

    }
  }
};
const Disclaimer = () => {

  return(
    <Fragment>
      <Row style={style.root}>
        <b style={style.title}>
          Disclaimer
        </b>
        <br/>
        <br/>
        <p style={style.text.text}>
          Last updated: September 12, 2020<br/>
          <br/>
          Interpretation and Definitions<br/>
          Interpretation<br/>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.<br/>
          <br/>
          <b style={style.text.title}>Definitions</b><br/>
          For the purposes of this Disclaimer:<br/>
          <br/>
          Company (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Sole , 123.<br/>
          Service refers to the Website.<br/>
          You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.<br/>
          Website refers to T & T Global, accessible from TT.vn<br/>
          <br/>
          <b style={style.text.title}>Disclaimer</b><br/>
          The information contained on the Service is for general information purposes only.<br/>
          <br/>
          The Company assumes no responsibility for errors or omissions in the contents of the Service.<br/>
          <br/>
          In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the Disclaimer Generator.<br/>
          <br/>
          The Company does not warrant that the Service is free of viruses or other harmful components.<br/>
          <br/>
          <b style={style.text.title}>External Links Disclaimer</b><br/>
          The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.<br/>
          <br/>
          Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.<br/>
          <br/>
          <b style={style.text.title}>Errors and Omissions Disclaimer</b><br/>
          The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.<br/>
          <br/>
          The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.<br/>
          <br/>
          <b style={style.text.title}>Fair Use Disclaimer</b><br/>
          The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.<br/>
          <br/>
          The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.<br/>
          <br/>
          If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.<br/>
          <br/>
          <b style={style.text.title}>Views Expressed Disclaimer</b><br/>
          The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.<br/>
          <br/>
          Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever.<br/>
          <br/>
          <b style={style.text.title}>No Responsibility Disclaimer</b><br/>
          The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.<br/>
          <br/>
          In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.<br/>
          <br/>
          <b style={style.text.title}>"Use at Your Own Risk" Disclaimer</b><br/>
          All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.<br/>
          <br/>
          The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.<br/>
          <br/>
          <b style={style.text.title}>Contact Us</b><br/>
          If you have any questions about this Disclaimer, You can contact Us:<br/>
          <br/>
          By email: vpdd@ttglobal.vn<br/>
        </p>
      </Row>
    </Fragment>
  )
}
export default Disclaimer;
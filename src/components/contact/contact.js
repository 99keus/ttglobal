import React from 'react';
import { addInfoContact } from '../../utils/spreadSheet';
import { Row, Col, Button, Form, Input } from 'antd';

const style = {
  form:{
    root: {
      padding: "25px 100px 0px 100px"
    },
    title: {
      fontSize: "36px",
      lineHeight: "54px",
      color: "#DA3849",
      marginBottom: "10px"
    },
    button: {
      borderRadius:"5px",
      minWidth: '50px'
    },
    input: {
      backgroundColor : '#F5F5F5',
      borderRadius: '10px'
    }
  },
  image: {
  }
}

const Contact = () => {
  const [form] = Form.useForm();
  const onSubmit = data => {
    addInfoContact([data]);
    form.resetFields();
    // console.log('Success:', data);
  };

  return(
    <Row>
      <Col style={style.form.root} span={12}>
        <div>
          <p style={style.form.title}>
            <b>Contact Us</b>
          </p>
          <p style={style.form.text}>
            We are looking forward to this cooperation!
          </p>
          <br/>
          <Form
            wrapperCol={{ span: 20 }}
            layout="horizontal"
            size="large"
            onFinish={onSubmit}
            form={form}
          >
            <Form.Item name="name" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Name" style={style.form.input}/>
            </Form.Item>
            <Form.Item name="company" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Company" style={style.form.input}/>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Required' }, {type: 'email'}]}
            >
              <Input placeholder="Email" style={style.form.input}/>
            </Form.Item>
            <Form.Item name="message" rules={[{ required: true, message: 'Required' }]}>
              <Input.TextArea
                placeholder="Message"
                style={style.form.input}
                autoSize={{ minRows: 3, maxRows: 6 }}
                maxLength={200}
              />
            </Form.Item>
              <p>
              *Your information is protected and will not be published , <br/>
              read Our <u>Privacy Policy</u> for more details.
            </p>
            <br/>
            <Button
              type="primary"
              size="large"
              style={style.form.button}
              danger
              htmlType="submit"
            >
              Send Now
            </Button>
          </Form>

        </div>
      </Col>
      <Col style={style.image} span={12}>
        <img src="/contact-banner.png" className="style.banner" alt="T&T Global"/>
      </Col>
    </Row>
  )
};

export default Contact;


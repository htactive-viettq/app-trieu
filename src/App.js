import React from 'react';
import './App.css';
import { Form, Icon, Input, Button, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='main'>
        <Row>
          <Col span={12} offset={6}>
            <img style={{ width: '50%', height: '50%' }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </Col>
          <Col span={12} offset={6}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Vui lòng nhập email!',
                    },
                    {
                      type: 'email',
                      message: 'Nhập đúng định dạng Email!',
                    },
                  ],
                })(
                  <Input
                    className="custom"
                    size="large"
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Vui lòng nhập mật khẩu!'
                    },
                    {
                      min: 5,
                      message: 'Mật khẩu tối thiểu 05 kí tự'
                    }],
                })(
                  <Input
                    className="custom"
                    size="large"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary" htmlType="submit" style={{ borderRadius: '20px', width: '100%' }}>
                  LOG IN
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div >
    );
  }
}
export default Form.create()(App);

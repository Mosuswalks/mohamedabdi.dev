import React from "react"
import { Row, Col, Typography, Form, Button, Input } from "antd"
import { SendOutlined, MessageOutlined } from "@ant-design/icons"

import styles from "./contact.module.less"

const { Title } = Typography

const Contact = () => {
  const layout = {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 16,
    },
  }

  const tailLayout = {
    wrapperCol: {
      span: 1,
    },
  }

  const submitForm = () => {
    console.log("Form Submitted")
  }

  return (
    <section id="#contact">
      <div className={styles.container}>
        <Title level={3} className={styles.title}>
          Contact
          <MessageOutlined />
        </Title>
        <Form
          {...layout}
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your First & Last name",
            },
          ]}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your first & last name",
              },
            ]}
          >
            <Input className={styles.formInputs} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input className={styles.formInputs} />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            required={[
              {
                required: true,
                message: "Please enter a message",
              },
            ]}
          >
            <Input.TextArea className={styles.formInputs} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button shape="round" className={styles.formButton}>
              <SendOutlined />
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}

export default Contact

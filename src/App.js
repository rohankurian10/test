import { Button, Form, Input } from "antd";
import "./App.css";

export default function App() {
  const array = [
    {
      name: "input1",
      rules: [
        {
          required: true,
          message: "Input 1 is required",
        },
      ],
    },
    {
      name: "input2",
      rules: [
        {
          required: true,
          message: "Input 2 is required",
        },
      ],
    },
    {
      name: "input3",
      rules: [
        {
          required: false,
          message: "Input 3 is required",
        },
      ],
    },
    {
      name: "input4",
      rules: [
        {
          required: true,
          message: "Input 4 is required",
        },
      ],
    },
  ];
  const [form] = Form.useForm();

  const submitHandler = (values) => {
    console.log("---values---", values);
  };
  return (
    <div className="App">
      <div className="Container">
        <Form form={form} onFinish={submitHandler}>
          {array.map((i, key) => {
            return (
              <Form.Item name={i.name} rules={i.rules}>
                <Input />
              </Form.Item>
            );
          })}

          <Button htmlType="submit">Click Me</Button>
        </Form>
      </div>
    </div>
  );
}

import { useState } from "react";
const Button = (props) => {
  const { text } = props;
  return <button>{text}</button>;
};
const ReactHooks = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ name: "John" });
  const [style, setStyle] = useState({
    color: "red",
  });
  const changeObj = () => {
    setObj({ ...obj, name: "Jane" });
  };
  const changeStyle = () => {
    setStyle({
      ...style,
      color: "blue",
      fontSize: "20px",
    });
  };
  return (
    <div>
      <h3>1.useState</h3>
      <p>
        useState允许我们向组件添加一个{" "}
        <span style={{ color: "red" }}>状态变量</span> ，从而控制影响
        <br />
        <strong>{count}</strong>
        <button onClick={() => setCount(count + 1)}>数字加1</button>
        <br />
        <strong>{obj.name}</strong>
        <button onClick={changeObj}>修改对象</button>
        <br />
        <span style={style} onClick={changeStyle}>
          修改动态样式
        </span>
      </p>
    </div>
  );
};

export default ReactHooks;

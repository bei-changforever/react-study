import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const articleType = 0;
const getArticleTem = () => {
  if (articleType === 0) {
    return <div>我是无图文章</div>;
  } else if (articleType === 1) {
    return <div>我是单图文章</div>;
  } else {
    return <div>我是三图文章</div>;
  }
};

function App() {
  const [flag, setFlag] = useState(false);
  const handleClick = (name, e) => {
    console.log(name, e);
  };
  const list = [
    {
      id: 1001,
      name: "John",
    },
    {
      id: 1002,
      name: "Jane",
    },
    {
      id: 1003,
      name: "Jim",
    },
  ];
  return (
    <>
      <h3>遍历</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3>条件渲染</h3>
      <button onClick={() => setFlag(!flag)}>
        <div>{flag ? "注销" : "登录"}</div>
      </button>
      {flag ? <div>登录</div> : <div>未登录</div>}
      <h3>复杂条件渲染</h3>
      {getArticleTem()}
      <h3>事件绑定</h3>
      <button onClick={(e) => handleClick("jack", e)}>事件绑定</button>
    </>
  );
}

export default App;

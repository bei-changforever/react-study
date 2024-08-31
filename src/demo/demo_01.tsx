import { createContext, useState } from "react";
import demo_01_css from "./demo_01.module.css";
let List = [
  {
    id: 1,
    name: "张三",
    age: 18,
    sex: "男",
    comment: "123123131",
    createTime: "2023-01-03",
    hot: 102,
  },
  {
    id: 2,
    name: "李四",
    age: 18,
    sex: "男",
    comment: "123123131",
    createTime: "2023-01-02",
    hot: 301,
  },
  {
    id: 3,
    name: "王五",
    age: 18,
    sex: "男",
    comment: "123123131",
    createTime: "2023-01-01",
    hot: 999,
  },
];
const tabs = ["最新", "最热"];
const Tab = (props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const changeTab = (index) => {
    props.sendValueToFather(index);
    setActiveIndex(index);
  };
  return (
    <div className={demo_01_css["tab"]}>
      {tabs.map((item, index) => (
        <div
          className={activeIndex === index ? demo_01_css["active"] : ""}
          onClick={() => changeTab(index)}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
const Demo_01 = () => {
  const [commentList, setCommentList] = useState(List);
  const del = (id) => {
    setCommentList(commentList.filter((item) => item.id !== id));
  };
  const getValueFromSon = (params) => {
    console.log(params);
    if (params == 1) {
      const copy = [...commentList];
      let newlist = copy.sort((a, b) => b.hot - a.hot);
      setCommentList(newlist);
    } else {
      const copy = [...commentList];
      let newlist = copy.sort(
        (a, b) =>
          new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
      );
      setCommentList(newlist);
    }
  };
  return (
    <div>
      <Tab sendValueToFather={getValueFromSon.bind(this)} />
      {commentList.map((item) => (
        <div key={item.id}>
          <div className={demo_01_css["title-container"]}>
            姓名：{item.name}年龄：{item.age}性别：{item.sex}
          </div>
          <p>评论：{item.comment}</p>
          <button onClick={() => del(item.id)}>删除</button>
        </div>
      ))}
    </div>
  );
};

export default Demo_01;

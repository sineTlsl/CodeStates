import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React" },
  { id: 2, title: "Installation", content: "You can install React from npm" }
];

export default function App() {
  // 한 포스트의 정보를 담은 객체 post를 매개변수로 받고
  // obj를 JSX 표현식으로 바꿔 리턴해주는 함수 postToJSX
  const postToJSX = (post) => {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  };

  // TODO: postToJSX 함수를 이용하여 에러를 해결하고 여러 개의 엘리먼트롤 표시해보세요.
  return (
    <div className="App">
      <h1>Hello JSX</h1>
      {posts.map(/* TODO */)}
    </div>
  );
}

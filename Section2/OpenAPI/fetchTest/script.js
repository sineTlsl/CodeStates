const container = document.getElementById("container");

let githubID = "sineTlsl";
let url = `http://3.36.72.17:3000/${githubID}/messages`;

const dataZero = () => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const datas = json;
      datas.map((data) => {
        const name = document.createElement("div");
        const text = document.createElement("div");
        const roomname = document.createElement("div");

        const box = document.createElement("div");
        box.className = "box";

        name.textContent = data.username;
        text.textContent = data.text;
        roomname.textContent = data.roomname;

        box.append(name, text, roomname);
        container.append(box);
        console.log(data);
      });
    });
};

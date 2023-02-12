const container = document.getElementById("container");
const apiText = document.createElement("h3");
apiText.className = "apiText";

// const serviceKey =
//   "s3IE1KONj8EyZqTkReUDXWXgIb0c0yawUbt34Ynd2hTj8M1fy88cVOsNKrQ8KRF1jX1u0AaZXVuTadDst81hDQ%3D%3D";
// const url = `http://apis.data.go.kr/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason?serviceKey=${serviceKey}`;

// const fun = () => {
//   fetch(url, {
//     headers: {
//       "content-Type": "application/json",
//     },
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// fun();

var xhr = new XMLHttpRequest();
var url =
  "http://apis.data.go.kr/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason"; /*URL*/
var queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "s3IE1KONj8EyZqTkReUDXWXgIb0c0yawUbt34Ynd2hTj8M1fy88cVOsNKrQ8KRF1jX1u0AaZXVuTadDst81hDQ%3D%3D"; /*Service Key*/
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert(
      "Status: " +
        this.status +
        "nHeaders: " +
        JSON.stringify(this.getAllResponseHeaders()) +
        "nBody: " +
        this.responseText
    );
  }
};

xhr.send("");

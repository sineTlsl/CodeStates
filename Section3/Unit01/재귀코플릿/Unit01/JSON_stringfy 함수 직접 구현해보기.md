**JSON.stringfy()란?**

`JSON.stringfy()` 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환한다.

## JSON.stringfy 함수 구현

### 과제 Rule

> 1. JSON.stringfy 함수는 input 값을 JSON 형식으로 반환한다.
> 2. spec/stringifyJSONSpec.js의 stringifiableObjects 배열을 참고해서 테스트에서 어떤 input 값들이 주어지고, 어떻게 stringify해 주어야 할지 생각해야 한다.

<br>

#### [테스트 하는데 사용되는 데이터]

```jsx
const stringifiableObjects = [
  9,
  null,
  true,
  false,
  "Hello world",
  [],
  [8],
  ["hi"],
  [8, "hi"],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999],
  [8, [[], 3, 4]],
  [[[["foo"]]]],
  {},
  { a: "apple" },
  { foo: true, bar: false, baz: null },
  { "boolean, true": true, "boolean, false": false, null: null },
  // basic nesting
  { a: { b: "c" } },
  { a: ["b", "c"] },
  [{ a: "b" }, { c: "d" }],
  { a: [], c: {}, b: true },
];
```

<br>

### 👩🏻‍💻 CODE

구현한 `stringifyJSON` 함수는 다음과 같다.

```jsx
function stringifyJSON(obj) {
  if (obj === null) {
    return "null";
  }
  if (Array.isArray(obj)) {
    let newArr = [];
    if (obj.length !== 0) {
      obj.forEach((el) => {
        newArr = [...newArr, stringifyJSON(el)];
      });
    }
    return `[${newArr}]`;
  } else if (typeof obj === "object") {
    let str = "";

    for (let key in obj) {
      if (obj[key] === undefined || typeof obj[key] === "function") {
        continue;
      } else {
        let tmpKey = stringifyJSON(key);
        let tmpValue = stringifyJSON(obj[key]);

        str += `${tmpKey}:${tmpValue}` + ",";
      }
    }
    return `{${str.slice(0, -1)}}`;
  }

  if (typeof obj === "string") {
    return `"${obj}"`;
  }
  return obj.toString();
}
```

<br>

### 💡 풀이

**1. 문자열이 주어졌을 때 따옴표로 감싸서 반환해준다.**

```jsx
if (typeof obj === "string") {
  return `"${obj}"`;
}
```

**2. Number와 Boolean이 주어졌을 때 문자열로 반환해준다.**

```jsx
return obj.toString();
```

**3. null 값이 주어졌을 때 큰따옴표로 감싼 null로 반환해준다.**

```jsx
if (obj === null) {
  return "null";
}
```

**4. 배열이 주어졌을 때 재귀를 이용하여 새로운 배열로 반환해준다.**

```jsx
if (Array.isArray(obj)) {
  let newArr = [];
  if (obj.length !== 0) {
    obj.forEach((el) => {
      newArr = [...newArr, stringifyJSON(el)];
    });
  }
  return `[${newArr}]`;
}
```

**5. 객체가 주어졌을 때 재귀를 이용하여 새로운 객체로 반환해준다.**

```jsx
if (typeof obj === "object") {
  let str = "";

  for (let key in obj) {
    if (obj[key] === undefined || typeof obj[key] === "function") {
      // undefined, function일 경우 다음으로 넘어가게끔 ...
      continue;
    } else {
      let tmpKey = stringifyJSON(key);
      let tmpValue = stringifyJSON(obj[key]);

      str += `${tmpKey}:${tmpValue}` + ",";
    }
  }
  return `{${str.slice(0, -1)}}`; // 마지막에 쉼표(,) 제외
}
```

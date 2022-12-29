# HTML이란?
> `HTML (Hyper Text Markup Language)` 은 웹 페이지의 틀을 만드는 마크업 언어다.

## How to use HTML?
- HTML은 태그(tag)들의 집합
- `Tag` : 부등호(<>)로 묶인 HTML의 기본 구성 요소
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <h1>Hello world!</h1>
    <div>Contents here
      <span>Here too!</span>
    </div>
  </body>
</html>
```

태그 내부에 내용이 없다면, (<tah></tag>와 같이 표현되는 경우) `<tag />` 와 같이 표현 가능
```html
<img src="codestates-logo.png"></img>

<img src="codestates-logo.png" />
```

## Most used tags in HTML
- `<div>` : Divison
- `<span>` : Span
- `<img>` : Image
- `<a>` : Link
- `<ul>&<li>` : Unoredred List & List Item
- `<input>` : Input (Text, Radio, Checkbox)
- `<textarea>` : Multi-line Text Input
- `<button>` : Button

### div VS span
`div` 태그는 한 줄을 차지하고, `span` 태그는 컨텐츠 크기만큼 공간을 차지한다.

```html
<div>div 태그는 한 줄을 차지한다.</div>
<div>division 2</div>
<span>span 태그는 컨텐츠 크기만큼 공간을 차지한다.</span>
<span>span 2</span>
<span>span 3</span>
<div>division 3</div>
```
![div VS span](https://velog.velcdn.com/images/tlsl13/post/42d47435-99e0-42a1-ab92-dd5291eaac38/image.png)

### img: 이미지 삽입
```html
<img src="/라푼젤.jpeg" />
```
![라푼젤](https://velog.velcdn.com/images/tlsl13/post/78112d4c-6420-4b5e-b718-2892a7b86e37/image.png)

### a: 링크 삽입
```html
<a href="https://codestates.com" target="_blank">코드스테이츠</a>

```
![링크](https://velog.velcdn.com/images/tlsl13/post/a6211bac-68f5-4f69-9820-21c6470eb722/image.png)

### ul, li: 목록 입력
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3 3 has nested list
    <ul>
      <li>Item 3-1</li>
    </ul>
  </li>
</ul>
```

![ul&li](https://velog.velcdn.com/images/tlsl13/post/84f292eb-74a6-457e-b53b-3a4fc74ab21f/image.png)

### input, textarea: 다양한 입력 폼
```html
<input type="text" placeholder="type-here" />
<div>
  <input type="radio" name="choice" value="a" /> a
  <input type="radio" name="choice" value="b" /> b
</div>
<textarea></textarea>
<div>
  <input type="checkbox" checked /> checked
  <input type="checkbox" /> unchecked
</div>
```
![input, textarea](https://velog.velcdn.com/images/tlsl13/post/698a145b-0af7-41cb-b092-09806f5e6543/image.png)


### button: 버튼
```html
<button>Submit</button>
```
![button](https://velog.velcdn.com/images/tlsl13/post/0fc0a86c-082e-4ea7-a064-2f3eaa43ae48/image.png)


## 아이디, 비밀번호 입력 창 예제 (뼈대만)
```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>아이디, 비밀번호 입력 창 만들기</title>
  </head>
  <body>
    <input type="text" placeholder="ID" />
    <input type="password" placeholder="password" />
    <button>Login</button>
    <label> <input type="checkbox" />Keep Login </label>
  </body>
</html>

```
![예제](https://velog.velcdn.com/images/tlsl13/post/9217fa91-df3b-40e9-a310-172760f9c955/image.png)

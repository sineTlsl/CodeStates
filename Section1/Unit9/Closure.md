# 클로저란?
> `클로저(Closure)` 는 함수와 함수가 선언된 어휘적 환경의 조합이다. 여기서 말하는 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다.

자바스크립트는 어휘적 환경(Lexical Environment)을 가진다.

## 클로저 함수의 특징
### 1. 함수를 리턴하는 함수
다음 예제는 화살표 함수를 이용한 간단한 덧셈 함수다.
```jsx

const add = (x, y) => x + y;
add(5, 7);  // 12
```
위 함수를 화살표 두 번을 사용하여, 로직을 구성할 경우에는 함수의 호출이 두 번 발생한다.
```jsx
const adder = x => y => x + y;
adder(5)(7);  // 12

typeof adder(5);  // 'function'

adder(5)  // y => x + y
```
즉, adder는 함수를 리턴하는 함수다.

화살표 함수로 작성된 함수 표현식을 `function` 키워드를 사용하여 작성하면 다음과 같다.
```jsx
const adder = function (x) {
	return function (y) {
    	return x + y;
    }
}
```

### 2. 외부 함수의 변수에 접근 가능한 내부 함수
클로저는 리턴하는 함수에 의해 `스코프(변수의 접근 범위)` 가 구분된다. 클로저의 핵심은 스코프를 이용해서, 변수의 접근 범위를 닫는 곳에 있다.

따라서, 함수를 리턴하는 것 만큼이나 변수가 선언된 곳도 중요하다.
```jsx
const adder = function (x) {  // 외부 함수
  	// 내부 함수
	return function (y) {
    	return x + y;
    }
}
```
- **외부 함수는 y 접근이 불가능하다. **
=> 바깥 스코프에서 안쪽 스코프로의 접근이 불가능

- **내부 함수는 x 접근이 가능하다. **
=> 안쪽 스코프에서 바깥 스코프에서 선언된 변수에 접근이 가능

### 3. 데이터를 보존하는 함수
외부 함수(adder)의 실행이 끝나더라도, 외부 함수 내 변수(x)로 사용할 수 있다.
```jsx
const adder = function (x) {
	return function (y) {
    	return x + y;
    }
}

const add5 = adder(5);
add5(7)  // 12
add5(10)  // 15
```
일반 함수는 함수 실행이 끝나고 나면 함수 내부의 변수를 사용할 수 없다. 이와 다르게, **클로저는 외부 함수의 실행이 끝나더라도, 외부 함수 내 변수가 메모리에 저장된다.** (어휘적 환경을 메모리에 저장하기 때문에 가능한 일)

변수 add5에는 클로저를 통해 리턴한 함수가 담겨있다. add5는 외부 함수의 실행이 끝나도, 인자로 넘긴 5라는 값을 x 변수에 계속 담은 채로 남아 있다.

```jsx
// HTML 문자열 생성하는 예제
const tagMaker = tag => content => `<${tag}>&{content}</${tag}>`

const divMaker = tagMaker('div');
divMaker('hello')  // '<div>hello</div>'
divMaker('codestates')  // '<div>codestates</div>'

const anchorMaker = tagMaker('a');
anchorMaker('go')  // <a>go</a>'
anchorMaker('urclass')  // <a>urclass</a>'
```
`divMaker` 함수는 'div'라는 문자열을 `tag` 라는 변수에 담아두고 있고, `anchorMaker` 함수는 'a'라는 문자열을 `tag`에 담아두고 있다.

클로저는 이처럼 특정 데이터를 스코프 안에 가두어 둔 채로 계속 사용할 수 있게 해준다.

### 정보의 접근 제한 (캡슐화)
```jsx
// 클로저 모듈 패턴
const makeCounter = () => {
	let value = 0;
  
  	return {
    	increase: () => {
        	value = value + 1
        },
      	decrease: () => {
        	value = value - 1
        },
      	getValue: () => value
    }
}

const counter1 = makeCounter();
counter1  // { increase: f, decrease: f, getValue: f }
```
- 내부 함수를 여러 개 만들 수 있다.
- 함수 여러개를 포함한 객체를 리턴한다.

### 모듈화
```jsx
// 재활용 가능한 makeCounter 함수
const counter1 = makeCounter();
counter1.increase();
counter1.increase();
counter1.decrease();
counter1.getValue();  // 1

const counter2 = makeCounter();
counter2.decrease();
counter2.decrease();
counter2.decrease();
counter2.getValue();  // -3
```
makeCounter에 의해 리턴된 객체는, makeCounter를 실행할 때에 선언되는 value 값을 각자 독립적으로 가지게 된다. 따라서 counter1에서의 value와 counter2에서의 value는 서로에게 영향을 끼치지 않고, 각각의 값을 보존할 수 있다.


## 클로저 예시
```jsx
<!DOCTYPE html>
<html>
<body>
  <button class="toggle">toggle</button>
  <div class="box" style="width: 100px; height: 100px; background: red;"></div>

  <script>
    var box = document.querySelector('.box');
    var toggleBtn = document.querySelector('.toggle');

    var toggle = (function () {
      var isShow = false;

      // TODO: ① 클로저를 반환하는 함수를 작성하세요.
      return function () {
        box.style.display = isShow ? 'block' : 'none';
        // TODO: ③ isShow 변수의 상태를 변경하는 코드를 작성하세요.
        isShow = !isShow;
      };
    })();

    // ② 이벤트 프로퍼티에 클로저를 할당
    toggleBtn.onclick = toggle;
  </script>
</body>
</html>
```
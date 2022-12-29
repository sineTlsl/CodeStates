# 함수란?
현실에서 발생하는 대부분의 복잡한 문제는 더 작고 간단한 문제로 나눌 수 있다. 복잡한 문제를 해결하기 위해서는 반대로 작고 간단한 문제를 하나씩 해결하고, 마지막에는 크고 복잡한 문제를 해결한다. 이러한 과정을 컴퓨터라는 함수라는 것을 사용해 해결한다.

함수는 입력에 따라 그에 걸맞은 작업을 하는 하나의 작업 단위다. 샌드위치를 만드는 과정도 함수로 나타낼 수 있다. 우리가 하나의 샌드위치를 만들기 위해서는 여러 재료와 만들고자 하는 샌드위치의 종류에 맞는 레시피가 필요하다. 샌드위치를 만드는 레시피의 종류에 따라 빵을 얼마나 구울지, 양상추를 어떻게 자를지, 토마토를 넣을지 말지가 달라진다.

만약 베이컨 에그 샌드위치를 기대하고 베이컨과 달걀을 재료로 사용했는데, 토마토 샌드위치가 나오는 경우를 생각헤보자. 이 경우에는 준비한 재료가 베이컨이나 달걀이 아니라 토마토였거나, 밖에서 토마토 샌드위치를 사 온다는 황당한 내용이 레시피에 적혀져 있을 수 있다. 이런 황당한 일이 일어나지 않도록, **논리적인 일련의 작업을 하는 하나의 단위**를 <span style="background-color: #f0baaa">&nbsp;**함수**&nbsp;</span> 라 한다.

> <span style="color: red">`함수`</span> 는 입력을 받아서 코드블럭 내부의 코드를 실행한 후 실행결과를 반환하는 일련의 과정의 묶음이다.


![함수 정의 - 1](https://velog.velcdn.com/images/tlsl13/post/d50d4000-a6e1-46f1-b3a7-f43b8dad958d/image.png)

먼저, 함수 외부에서 특정한 입력값을 전달하여 **호출**할 수 있다. 함수가 호출되면 함수의 내부의 코드가 실행된다. 그리고 함수의 실행결과는 다시 함수 외부로 **반환(return)** 할 수 있다.

![함수 정의 - 2](https://velog.velcdn.com/images/tlsl13/post/509132f9-a8e5-41d5-9e61-d0065f11894c/image.png)

예를 들어, 함수 외부에서 x는 2, y는 3이라는 입력값이 주어졌다고 하면, 함수 내부에는 x와 y를 더하여 함수 외부로 반환하도록 코드가 작성되어 있다. x와 y를 더한 값은 5이기 때문에, 이 함수는 5를 반환하게 된다. 만약 함수외부에서 x와 y에 2와 3이 아닌 다른 값을 전달했다면, 다른 결과가 나왔을 거라는 것을 유추할 수 있을 것이다.

정리하자면, **함수를 사용한다는 것은 특정한 코드실행 과정을 하나의 묶음으로 묶어서 필요할 때마다 호출하여 실행한다는 것을 의미**한다. 그리고 이때, 특정한 코드실행 과정을 묶어서 함수를 생성하는 것을 **'함수를 정의한다.'**고 한다.

## 1. 함수선언문과 함수표현식
JavaScript에서 함수를 정의하는 방법은 여러 가지가 있다. 그 중에서 가장 대표적인 함수 정의 방법인 `힘수선언문` 과 `함수표현식` 에 관하여 소개한다.

먼저 문자열 'hello world'를 출력하는 함수를 <span style="background-color: #f0baaa">&nbsp;**함수선언문**&nbsp;</span> 으로 예제를 들겠다.
```javascript
// 함수선언문으로 정의한 함수
function greeting () { 
	console.log('hello world');
};
```
함수를 정의할 때는 `function` 키워드를 사용한다. `function` 키워드 다음에는 함수명을 지정해야하고, 현재 예제에서는 `greeting` 이라는 함수명을 사용했다. 그 뒤에는 소괄호(`()`)를 입력해야하고, 소괄호 안에는 매개변수를 넣어 데이터를 넘겨줄 수 있다. 다음으로는 실행할 코드를 코드블록(`{}`) 내부에 넣어 사용할 수 있다.

이번에는 <span style="background-color: #f0baaa">&nbsp;**함수표현식**&nbsp;</span> 으로 똑같은 내용으로 정의한다.
```javascript
// 함수표현식으로 정의한 함수
let greeting = function () {
	console.log('hello world');
}
```
함수표현식은 변수를 선언할 때 사용했던 `let` 키워드를 사용해서 변수를 선언하고, 함수를 할당하는 형태로 코드를 작성한다. 이때, 함수선언문과 달리 함수에는 특별한 식별자를 지정할 필요가 없다. JavaScript에서는 이처럼 함수를 변수에 할당하는 것이 가능하다. 이렇게 변수에 함수를 할당한 것과 같은 형태로 함수를 정의하는 것을 `함수표현식` 이라고 한다.

**정리**
- `함수선언문` : 함수 선언 키워드인 function으로 함수를 "선언"
- `함수표현식` : 변수에 함수를 할당하여 함수를 "표현"

<br>

## 2. 함수 호출
함수 내부에 있는 코드는 함수를 호출했을 때만 실행된다. 
```javascript
// 함수선언문
function greeting() {
	console.log('hello world');
}

greeting();  // 'hello world'
```

```javascript
// 함수표현식
let greeting = function() {
	console.log('hello world');
}

greeting();  // 'hello world'
```
<br>

## 3. 매개변수와 전달인자
**매개변수**는 함수를 정의할 때 선언하고, 함수 코드 블록 안에서 변수처럼 취급된다. 함수를 정의할 때 소괄호(`()`)에 매개변수를 추가할 수 있다. 이렇게 추가된 매개변수는 함수 내부에서 마치 변수와 같은 역할을 하게 된다.
```javascript
function greeting (name) {
	console.log('hello ' + name);
}

greeting('kimcoding');  // 'hello kimcoding'
```
함수를 호출할 때 소괄호 안에 값을 넣음으로써 매개변수에 값을 할당할 수 있다. 이것을 바로 **전달인자**라고 한다.

매개변수의 수보다 전달인자가 적은 경우에도 가능하다.
```javascript
function getUserName (user1, user2) {
	console.log(user1);
	console.log(user2);
};

getUserName('kimcoding');  // 'kimcoding' undefined
```
아무것도 전달되지 않은 매개변수는 `undefined` 로 초기화되어 있다. 아무것도 할당하지 않은 변수가 `undefined` 로 초기화 되어 있는 것과 같다.
<br>

## 4. return문
반환한다는 것은 함수 외부에서 함수의 결과값을 사용할 수 있다는 의미다.
```javascript
function add (x, y) {
	return x + y;  // 반환문
}
```
이 함수는 두 수를 입력받아 합을 리턴하는 함수다. 여기서 주목해야할 것은 `return` 이라는 키워드다. 지금까지 사용했던 '반환한다'라는 표현도 `return` 을 번역한 표현이라고 보면 된다.

1. 함수 내부의 코드가 차례대로 실행되다가 return문을 만나면 값을 반환한 후 함수는 종료된다. 다시 말해 return문 뒤에 나오는 코드는 실행되지 않는다.
	```javascript
	function add (x, y) {
		return x + y;  // 반환문
		console.log('실행되지 않습니다');
	}
	```
2. return문에 작성된 코드를 실행한 후 결과를 함수 외부로 리턴한다. 함수 외부에서 함수를 호출하면 함수의 실행결과를 확인할 수 있다.
	```javascript
     function add (x, y) {
        return x + y;  // 반환문
     }

     console.log(add(3, 2));  // 5
	```
3. 또는 함수 호출의 결과를 변수에 할당하는 것도 가능하다.
	```javascript
    function add (x, y) {
        return x + y;  // 반환문
    }

    let result = add(3, 2);
    console.log(result);  // 5
	```
4. 조금 더 응용하면, 함수의 호출 결과끼리도 연산이 가능하다.
	```javascript
    function add (x, y) {
        return x + y;  // 반환문
    }

    let result = add(3, 2) + add(5, 7);
    console.log(result);  // 17
	```
    
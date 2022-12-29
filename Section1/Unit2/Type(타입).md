# 타입(Type) 이란?
정보를 전달하기 위해서 다양한 사용을 하고 자주 쓰는 표현은 분류가 필요하다.
> <span style="color: red">`타입(type)`</span> 은 값(value)의 종류다.

- 자바스크립트의 모든 값은 타입을 가지고 있다.
- 타입이 있어 쉽게 분류할 수 있다.
- 각 타입은 고유한 속성과 메서드를 가진다.
<br>
## 1. Number 타입
> <span style="color: red">`Number`</span> 는 일상생활에서 흔히 접할 수 있는 숫자를 자바스크립트에서 표현하기 위한 데이터 타입이다.

**정수와(Integer)**와 **실수(Float)** 를 모두 표현할 수 있다.
```javascript
100;  // 정수를 표현할 수 있다.
-100;  // 음수를 표현할 수 있다.
100.123;  // 실수를 표현할 수 있다.
```

`typeof` 연산자로 해당 값이 숫자 타입인지 확인할 수 있다.
```javascript
typeof 100;  // 'number'
typeof -100;  // 'number'
typeof 100.123;  // 'number'
```

같은 숫자 값 간에는 간단한 사칙연산을 할 수 있다. 아래 예시에서 사용한 수학 기호 (`+` `-` `*` `/` )를 자바스크립트에서는 <span style="background-color: #f0baaa">&nbsp;**산술 연산자(Arithmetic Operator)&nbsp;**</span> 라고 부른다.
```javascript
console.log(1 + 2);  // 3
console.log(1 - 2);  // -1
console.log(1 * 2);  // 2
console.log(1 / 2);  // 0.5
console.log(9 % 2);  // 1 (9를 2로 나눈 나머지 구하기)
```

### 1.1. Math 내장 객체
좀 더 복잡한 계산을 위해서는 Math 내장 객체를 사용한다. 

**Math 내장 객체의 대표적인 메서드**
- `Math.floor()` : 괄호 안의 숫자를 내림하여 반환한다.
- `Math.ceil()` : 괄호 안의 숫자를 올림하여 반환한다.
- `Math.round()` : 괄호 안의 숫자를 반올림하여 반환한다.
- `Math.abs()` : 괄호 안의 숫자의 절대값을 반환한다.
- `Math.sqrt()` : 괄호 안의 숫자의 루트값을 반환한다.
- `Math.pow()` : 괄호 안의 첫 번째 숫자를 밑, 두 번째 숫자를 지수인 수자로 반환한다.

<br>

## 2. String 타입
> <span style="color: red">`String`</span> 은 인간의 언어, 자연어를 JavaScript에서 표현하기 위한 데이터 타입이다.

따옴표('), 쌍따옴표("), 백틱(`)으로 감싸면 된다.

한자나 이모지와 같은 특수문자도 문자열로 만들 수 있고, 숫자와 문자를 조합해서 문자열로 만들 수도 있다. 특히 백틱으로 만든 문자열은 줄바꿈도 가능하다.
```javascript
'사과'
"JavaScript"
"欢迎你"
"😇"
"최초의 JavaScript는 Netscape의 Brendan Eich에 의해 만들었다."
`JavaScript (줄여서 JS)는 일급 함수를 사용하는 가벼운 객체 지향 인터프리터 언어이며 
웹페이지의 스크립트 언어로 잘 알려져 있지만, 브라우저가 아닌 환경에서도 많이 사용된다.
프로토타입 기반, 다중 패러다임 스크립트 언어이며, 동적이고 명령어, 객체 지향, 함수 프로그래밍
스타일을 지원한다.`
```

`+` 로 문자열을 이어붙일 수 있다 문자열과 문자열을 이어불일 때의 `+` 는 <span style="background-color: #f0baaa">&nbsp;**문자열 연결 연산자**&nbsp;</span> 로써 쓰인다. 다른 타입과 이어붙이려고 하면 모두 문자열로 변한다. 특히, 숫자와 이어붙이기를 시도하다가 예상 못한 결과를 얻지 않도록 조심해야 한다. 위 이유로 가능하면 다른 타입 간의 연산을 하지 않도록 조심해야 한다.
```javascript
"안녕하세요" + "!!";  // 안녕하세요!!
"감사합니다." + " " + "🙏" / / 감사합니다. 🙏
1 + "1" // 11
```

### 2.1. 문자열의 length 속성
문자열의 length 속성을 이용하면 문자열의 길이를 확인할 수 있다. 문자열 값에 `.length` 를 붙이면 된다.
```javascript
console.log('欢迎你'.length);  // 3
console.log('최초의 JavaScript는 Netscape의 Brendan Eich에 의해 만들었다.'.length);  // 48
```

### 2.2. 인덱스(Index)
문자열의 각 문자는 순서를 가지고 있다. 각 문자가 몇 번째에 위치하는지 인덱스(Index)로 확인할 수 있다.
첫 번째 문자의 인덱스는 $0$이다. Javascript는 우리 일상생활에서 순서를 셀 때 $1$부터 $1$, $2$, $3$ ... 세는 것이 아니고, $0$부터 세는 점을 주의 해야한다. 이를 <span style="background-color: #f0baaa">&nbsp;**Zero-based numbering**&nbsp;</span> 이라고 한다.
```javascript
let str = 'codestates';
console.log(str[0]);  // 'c'
console.log(str[4]);  // 's'
```

### 2.3. 문자열 주요 메소드
문자열의 유용한 메서드 일부다.
- `toLowerCase()` : 문자열을 소문자로 변경한다.
- `toUpperCase()` : 문자열을 대문자로 변경한다.
- `concat()` : 문자열 연결 연산자 `+` 처럼 문자열을 이어붙일 수 있다.
- `slice()` : 문자열의 일부를 자를 수 있다.
```javascript
'HELLO WORLD'.toLowerCase();  // 'hello world'
'hello world'.toUpperCase();  // 'HELLO WORLD'
'hello '.concat('world');  // 'hello world'
```
- `indexOf()` : 문자열 내에 특정 문자나 문자가 몇 번째 위치하는지 확인한다.
    - 만약 찾는 문자가 2개 이상일 경우, 가장 앞에 있는 문자의 인덱스를 조회한다.
    - 포함되어 있지 않으면 `-1` 을 반환한다.
    
```javascript
'🍎🍓🍉🍇'.indexOf('🍎');  // 0
'🍎🍓🍉🍇'.indexOf('🖥');  // -1
'최초의 JavaScript는 Netscape의 Brendan Eich에 의해 만들었다.'.indexOf('Eich');  // 34
'최초의 JavaScript는 Netscape의 Brendan Eich에 의해 만들었다.'.indexOf('Dahl');  // -1
```

- `includes()` : 문자열 내에 특정 문자나 문자가 포함되어 있는지 확인한다.

```javascript
'🍎🍓🍉🍇'.includes('🍎');  // true
'🍎🍓🍉🍇'.includes('🖥');  // false
'최초의 JavaScript는 Netscape의 Brendan Eich에 의해 만들었다.'.includes('Eich');  // true
'최초의 JavaScript는 Netscape의 Brendan Eich에 의해 만들었다.'.includes('Dahl');  // false
```
<br>

## 3. Boolean 타입

> <span style="color: red">`Boolean`</span> 은 사실 관계를 구분하기 위한 타입이다.
불리언 타입의 값은 `true` 혹은 `false` 둘 중 하나다.

### 3.1. falsy 
불리언 타입은 아니지만, 자바스크립트에서 `false` 로 "여겨지는" 값이 일부 있는데 이를 <span style="background-color: #f0baaa">&nbsp;**falsy 값**&nbsp;</span> 이라고 한다. 반대로 `true` 로 "여겨지는" 값은 <span style="background-color: #f0baaa">&nbsp;**truthy 값 **&nbsp;</span> 이라고 한다. truthy 값은 매우 많아서, `falsy 값` 을 암기하면 구분하기 쉽다.
```javascript
// 대표적인 falsy 값
false
0
-0
0n
""
''
``
null
undefined
NaN
```

### 3.2. 비교연산자 (Comparison Operator)
불리언은 비교연산자로 두 값이 같은지 다른지를 확인할 때 유용하다.
- `===` , `!==` : 엄격한 동치 연산자. 두 피연산자의 값과 타입이 같으면 `true` , 다르면 `false` 를 반환한다. 엄격한 동치 연산자는 보이는 값도 같아도, 두 값의 타입이 다르면 `false` 가 된다.
```javascript
123 === (100 + 23);  // true ("123의 값과 100 + 23의 값은 같다."는 사실이기 때문에 true)
123 === '123';  // false ("123의 값과 '123'의 값은 같다."는 사실이 아니기 때문에 false)
123 !== (100 + 23);  // false ("123의 값과 100 + 23의 값은 같지 않다."는 사실이기 아니기 때문에 false)
123 !== '123';  // true ("123의 값과 '123'의 값은 같지 않다."는 사실이기 때문에 true)
```

- `==` , `!=` : 느슨한 동치 연산자. 느슨한 동치 연산자는 "대체로" 타입이 달라도 값이 같으면 `true` , 다르면 `false` 를 반환한다. 이렇게 "느슨하게" 동치 여부를 판단하기 때문에 예외가 많아 **현대 웹 개발에서는 사용을 권장하지 않는다.** 참고로 다른 프로그래밍 언어에서는 `==` , `!=` 를 주로 사용하는데, Javscript에서는 `===` , `!==` 로 비교해야 한다.
```javascript
12 == '12';  // true
```

- `>` , `<` , `>=` , `<=` : 대소 관계 비교 연산자. 두 피연산자의 값의 크기를 비교한다. 수학에서의 부등호 기호의 사용법과 유사하다.
```javascript
100 > 200;  // false ("100은 200보다 크다."는 거짓)
200 > 100;  // true ("200은 100보다 크다."는 참) 
100 >= 100;  // true ("100은 100보다 크거나 같다."는 참)
200 <= 100;  // false ("200은 100보다 작거나 같다."는 거짓)
```

### 3.3. 논리연산자 (Logical Operator)
논리연산자는 두 값 간의 논리 관계를 확인할 수 있다.

- `||` : **논리합(OR)**
    - 두 값 중 하나만 `true` 여도 `true` 로 판단한다.
  ```javascript
  true || false;  // true
  false || true;  // true
  100 > 200 || 200 > 100;  // true ("100은 200보다 크다" 혹은 "200은 100보다 크다" 중 하나는 true)
  ```
    - 두 값이 모두 `false` 면 `false` 로 판단한다.
  ```javascript
  false || false  // false
  200 < 100 || 20 < 10;  // false
  ```

- `&&` : **논리곱(AND)**
    - 두 값이 모두 `true` 면 `true` 로 판단한다.
  ```javascript
  true && true  // true
  200 > 100 && 20 > 10;  // true
  ```
    - 두 값 중 하나만 `false` 여도 `false` 로 판단한다.
  ```javascript
  true && false // false
  false && true // false
  100 > 200 && 200 > 100; // false
  ```
  
**논리 부정 연산자**(`!`)의 경우, 사실 관계를 반대로 표현합니다.
- `!` : **부정(NOT)**
    - 오른쪽 피연산자와 반대의 사실을 반환한다
  ```javascript
  !true // false
  !(100 > 200) // true
  ```
    - falsy, truthy의 반대 값을 반환한다.
  ```javascript
  !0 // true
  !'' // true
  !1 // false
  !'코드스테이츠' // false
  ```
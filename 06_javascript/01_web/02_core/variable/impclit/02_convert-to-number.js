/* 02_convert-to-number (숫자 타입으로 변환) */
console.log('===== 숫자 타입으로 변환 ======');

// 산술 연산자의 피연산자는 모두 숫자여야하므로 
// 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 - '5');              // 5
console.log(10 * '5');              // 50
console.log(10 / '5');              // 2
console.log(10 % 'JavaScript');     // NaN - 피연산자 숫자 변환 불가로 연산 수행 불가

// 비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이여야 하므로
// 숫자가 아닌 피 연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 > '5');

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');                   // 0
console.log(+'1');                  // 1
console.log(+'JavaScript');         // NaN
console.log(+true);                 // 1
console.log(+false);                // 0
console.log(+null);                 // 0
console.log(+undefined);            // NaN
// console.log(+Symbol());          // Cannot convert a Symbol value to a number
console.log(+{});                   // NaN
console.log(+[]);                   // 0
console.log(+function(){});         // NaN

// 빈 문자열, 빈 배열, null, false는 0으로 true는 1로 변환
// 객체와 undefined는 변환되지 않아 NaN
/* 02_convert-to-number (숫자 타입으로 변환) */
console.log('===== 숫자 타입으로 변환 ======');

// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number('10'));          // 10
console.log(Number('10.01'));       // 10.01
console.log(Number(true));          // 1
console.log(Number(false));         // 0

// 2. parseInt, parseFloat 함수 이용 (문자열 -> 숫자만 가능)
console.log(parseInt('10'));        // 10
console.log(parseFloat('10'));      // 10
console.log(parseInt('10.01'));     // 10
console.log(parseFloat('10.01'));   // 10.01

// 3. + 단항 산술 연산자 이용  - 암묵적 변환 챕터에서 확인함

// 4. * 산술 연산자 이용
console.log('10' * 1);              // 10
console.log('10.01' * 1);           // 10.01
console.log(true * 1);              // 1
console.log(false * 1);             // 0
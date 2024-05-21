/* 03_convert-to-boolean (불리언 타입으로 변환) */
console.log('===== 논리 타입으로 변환 ======');

// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.
if(true) console.log("if(true)");       
if(false) console.log("if(false)");
if(undefined) console.log("if(undefined)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN)");
if('') console.log("if('')");
if('JavaScript') console.log("if('JavaScript')");

// false, undefined, null, 0, NaN, ''(빈 문자열)은 Falsy 값이며
// 이 외의 모든 값은 Truthy 값이다.

/* 03_convert-to-boolean (불리언 타입으로 변환) */
console.log('===== 논리 타입으로 변환 ======');

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('JavaScript'));         // true
console.log(Boolean(''));                   // false
console.log(Boolean(1));                    // true
console.log(Boolean(0));                    // false
console.log(Boolean(NaN));                  // false
console.log(Boolean(Infinity));             // true
console.log(Boolean(null));                 // false
console.log(Boolean(undefined));            // false
console.log(Boolean({}));                   // true
console.log(Boolean([]));                   // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
console.log(!!'JavaScript');                // true
console.log(!!'');                          // false
console.log(!!1);                           // true
console.log(!!0);                           // false
console.log(!!NaN);                         // false
console.log(!!Infinity);                    // true
console.log(!!null);                        // false
console.log(!!undefined);                   // false
console.log(!!{});                          // true
console.log(!![]);                          // true
# B-02_02-Vue.js


## vue란?
<p>
    Vue.js는 Evan You가 개발한 오픈 소스 프로젝트로, Angular와 react의 장점을 결합하여 생성된 웹 애플리케이션 개발을 위한 프로그레시브 자바스크립트 프레임워크이다.
    <br> 단일 페이지 애플리케이션 (SPA) 및 UI 컴포넌트 개발에 매우 유용하며, 가볍고 성능이 우수한 특징을 가지고 있다. 
    <br>
    Vue.js는 MVVM(Model-View-ViewModel) 아키텍처 패턴을 기반으로 하며, 선언적인 구문을 사용하여 데이터와 DOM 요소 사이의 바인딩을 수행한다.
</p>

> 프로그레시브 자바스크립트 : 웹 개발의 새로운 패러다임으로, 웹 퍼포먼스, 접근성, 유지보수성을 향상시키는 데 중점둔 것을 의미한다.

## Vue의 주요 특징
1. 간편한 문법: Vue.js는 직관적이고 간결한 문법을 제공하여 쉽게 배울 수 있다.
2. 리액티브 데이터 바인딩: 데이터와 DOM 요소 사이의 양방향 바인딩을 지원하여 데이터의 변경이 자동으로 화면에 반영된다.
3. 컴포넌트 기반 아키텍처: Vue.js는 컴포넌트 기반 아키텍처를 사용하여 UI를 구성하고 재사용 가능한 코드를 작성할 수 있다.
4. 가볍고 빠른 속도: Vue.js는 가볍고 빠른 속도로 동작하여 웹 애플리케이션의 성능을 향상시킨다.



## React VS Vue
<p>
    REACT <br>
    React에서는 Virtual Dom을 사용하여 실제 Dom과의 비교를 최소화하고 성능을 향상시키며 react에서 상태(state)가 변경되면, 해당 상태를 사용하는 컴포넌트가
     다시 렌더링되며 이 과정에서 Virtual Dom이 생성되고 이전 상태와 비교하여 실제 dom에 변경 사항을 적용한다. 이러한 프로세스는 react의 재조정(Reconciliation)알고리즘에 의해 관리가 된다.
</p>
<p>
    Vue <br>
    반응성 시스템을 사용하여 데이터와 DOM을 연결한다. Vue 인스턴스의 데잍가 변경될 때마다 Vue는 해당 변경 사항을 감지하고 연결된 Dom을 업데이트한다. 
    이를 위해 Vue는 각 데이터 변경에 대항 응답으로 동작하는 "리액티브" 시스템을 제공한다. Vue는 변경사항을 추적하고 변경된 부분만 업데이트하여 효율적으로 Dom을 관리한다.

    리플로우와의 차이점
    Vue는 Virtual Dom을 사용하지 않아 react와 다른 접근 방식을 취한다. Vue에서는 데이터가 변경될 때마다 해당 변경을 직접 감지하고
     업데이트하게 되는데 해당 과정에서 최소한의 Dom 조작만 수행하여 성능을 최적화하고 리플로우를 최소화시킨다.
</p>
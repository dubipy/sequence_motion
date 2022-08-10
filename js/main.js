//동적으로 DOM 생성, 방법 2개
//부모요소.innerHTML="넣을태그를 문자열로 변환하여"
//기존 부모 안쪽의 자식 요소를 모두 제거하고 새로 생성한다

//부모요소.append(DOM node)
//인수로 생성할 태그의 문자열이 아닌 노드를 생성해서 삽입

//새로운 DOM 노드 생성 방법
//document.createElement('dom이름')

//536개의 이미지 동적으로 불러오기
const main = document.querySelector('main')

for(let i = 0; i < 500; i++) {
    const imgNode = document.createElement('img'); //img는 dom 이름이 된다
    //src는 Img를 불러오는 속성이므로 속성값을 추가한다
    imgNode.setAttribute('src', `img/cat${i}.png`) //src 값 지정, 모든 이미지를 하나씩 처리할 수 없으니 특정 값으로 가져온다
    main.append(imgNode); //속성까지 연결 완료된 Dom node를 실제 main에 append 메소드로 붙여넣으면 img DOM이 생성된다
}
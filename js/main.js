//536개의 이미지 동적으로 불러오기
const main = document.querySelector('main')
const loading = document.querySelector('aside');

//첫번째 방법
for(let i = 0; i < 200; i++) {
    const imgNode = document.createElement('img'); //img는 dom 이름이 된다
    //src는 Img를 불러오는 속성이므로 속성값을 추가한다
    imgNode.setAttribute('src', `img/cat${i}.jpg`) //src 값 지정, 모든 이미지를 하나씩 처리할 수 없으니 특정 값으로 가져온다
    main.append(imgNode); //속성까지 연결 완료된 Dom node를 실제 main에 append 메소드로 붙여넣으면 img DOM이 생성된다
}

//두번째 방법
//빈 문자열에 담길 변수 생성
// let tags = '';
// for (let i = 0; i < 300; i++) {
//     tags += `<img src='img/cat${i}.png' />`; //더하면서 계속 자기 자신에게 데이터 변수 쌓기
// }
// console.log(tags)
// main.innerHTML = tags;

//사용자가 발생시킨 이벤트가 아닌 시스템이 발생시킨 이벤트를 다룬다
//lode event: 반복 돌 때 소스 이미지가 완료되면 total 값을 1씩 증가.
//img DOM이 완성될 때 마다 lode event 실행

const imgs = document.querySelectorAll('img');
const len = imgs.length;
//카운트 증가 변수 생성
let total = 0;
//퍼센트 진행상황
let percent = 0;

//load event 연결
imgs.forEach(img => {
    img.addEventListener('load', () => { //DOM 순환 이미지까지 끝난 후에 함수 처리됨
        total++;
        //반복되는 이미지 반복률 생성
        percent = parseInt((total/len) * 100); //parseInt는 정수 변환
        loading.innerText = `${total} / ${len} (${percent}%)`;
        
        if(total === len){
            main.classList.add('on');
            loading.classList.add('off'); // 로딩 완료 시 로딩 서서히 사라지기

            setTimeout(() => {
                loading.remove();
            },convertSpeed(loading))
        } 
    })

})

//특정 요소에 인수를 넣으면 인수를 받은 선택자가 aside scss의 transition 속성 값 2.5s라는 값이 나온다
//만약 scss에서 다른 값을 입력해도 맞춰지게 된다

function convertSpeed(el) {
    let speed = getComputedStyle(el).transitionDuration;
    speed = parseFloat(speed) * 1000; //실수변환  
    return speed;
}
 
//Date 객체 생성
let date = new Date();


const renderCalendar = () => {
  const viewYear = date.getFullYear();  //년도
  const viewMonth = date.getMonth();   //월

  //year, month 채우기
  document.querySelector('.year').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  //지난 달 마지막 Date, 이번 달 마지막 Date
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  //Dates 기본 배열
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);  
  const nextDates = [];

  //prevDates 계산
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  //nextDates 계산 
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  //Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  //Dates 정리
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'        //이번년도                              //삼항 연산자
                      : 'other';       //지난달 다음달 
    dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`;
  });

  //Dates
  document.querySelector('.dates').innerHTML = dates.join('');

  //오늘 날짜
  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
};

renderCalendar();

//지난 달로 이동
const prev = () => {
  date.setMonth(9);
  renderCalendar();
}
//다음 달로 이동
const next = () => {
  date.setMonth(11);
  renderCalendar();
}
//오늘 날짜로 이동
const go_today = () => {
  date = new Date();
  renderCalendar();
}

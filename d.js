// Date 객체 생성
const date = new Date();
const renderCalendar = () =>{
const viewYear = date.getFullYear();
const viewMonth = date.getMonth();


const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}

const nextMoth = () => {
    date.setMonth(date.getMonth)
    renderCalendar();
}

const goToday = () =>{
    date = new Date();
    renderCalendar();
}

  // Dates 정리
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';

    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  })

  // 오늘 날짜 그리기
  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }

// year-month 채우기
document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

//지난 달 마지막 Date, 이번 달 마지막 Date
const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDate();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

//Dates 기본 배열들
const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

//prevDates 계산
if (PLDay !==6){
    for(let i=0; i < PLDay + 1; i++){
        prevDates.unshift(PLDate - 1);
    }
}


// nextDates 계산
for ( let i =1; i < 7 - TLDay; i++){
    nextDates.push(i);
}
//Dates 합치기
const dates = prevDates.concat(thisDates, nextDates);
// Dates 정리
dates.forEach((date, i) => {
    dates[i] = '<div class="date>${date}</div>';
})
//Dates 그리기
document.querySelector(".dates").innerHTML = dates.join("");
}

renderCalendar();



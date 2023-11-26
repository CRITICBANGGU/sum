export const getDateString = () => {
  const dateObjecgt = new Date();
  const YEAR = dateObjecgt.getFullYear();
  const MONTH = dateObjecgt.getMonth() + 1;
  const DATE = dateObjecgt.getDate();
  const DAY = dateObjecgt.getDay();
  const DAY_STRINGS = ['일', '월', '화', '수', '목', '금', '토'];
  return `${YEAR}년 ${MONTH}월 ${DATE}일 ${DAY_STRINGS[DAY]}요일`;
};

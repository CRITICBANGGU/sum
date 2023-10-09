export type contentCardPropsType = {
  writer: string;
  date: string;
  contentTitle: string;
  contentBody: string;
  //20231008 float number하기 위서 우선 number로 저장함. 
  // 추후 img 경로 array로 변경해야함
  imgArray:number;
};

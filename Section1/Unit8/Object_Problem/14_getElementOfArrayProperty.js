function getElementOfArrayProperty(obj, key, index) {
  let arrProperty = obj[key];
  // 주어진 키에 해당하는 값이 배열인지 확인
  // 그 값의 인덱스 해당하는 요소를 리턴
  if(Array.isArray(arrProperty)) {
    return arrProperty[index];
  } else {
    return undefined;
  }
}

let obj = {
  key: ['Jamil', 'Albrey'],
};

let output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
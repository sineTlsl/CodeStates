const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

// 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.
function findMatryoshka(matryoshka, size) {
  if (matryoshka.size === size) return true;

  if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  } else {
    return false;
  }
}

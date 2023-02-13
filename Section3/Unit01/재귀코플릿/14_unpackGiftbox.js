const giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

let output = unpackGiftbox(giftBox, "iphone");
console.log(output); // --> false

// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.
function unpackGiftbox(giftBox, wish) {
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) {
      return true;
    } else if (Array.isArray(giftBox[i])) {
      let result = unpackGiftbox(giftBox[i], wish);

      if (result === true) return true;
    }
  }

  return false;
}

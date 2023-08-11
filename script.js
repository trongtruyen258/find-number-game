let startNumber = 1;
$("#add_total_num").click(function () {
  if (checkExistItemClass() != false) {
    $("#box_num").empty();
  }
  const totalNumber = Number($("#total_num").val());
  let arrNum = createArr(totalNumber);
  showArr(arrNum);
});
function showArr(arrNum) {
  for (i = 0; i < arrNum.length; i++) {
    let myObj = arrNum[i];
    let divNum = `<div class="div_num" onclick="changeActive(this)">${myObj.number}</div>`;
    $("#box_num").append(divNum);
  }
}
function createArr(totalNumber) {
  let tempArr = [];
  for (let i = 0; i < totalNumber; i++) {
    const data = {
      number: i + 1,
      isActive: false,
    };
    tempArr.push(data);
  }
  return shuffle(tempArr);
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function changeActive(me) {
  let numOfDiv = Number(me.textContent);
  if (numOfDiv == startNumber) {
    me.classList.add("active");
    startNumber++;
  }
}
function checkExistItemClass() {
  let elems = document.getElementsByClassName("div_num");
  if (elems.length != 0) {
    return true; //existed
  } else {
    return false; //not exist
  }
}

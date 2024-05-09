let btnBack = document.querySelector(".back");
let btnNext = document.querySelector(".next");

let list = document.querySelector(".container .list");
let thumb = document.querySelector("container .thumb");

btnNext.onclick = () => moneItemOnClick("next");
btnBack.onclick = () => moneItemOnClick("back");

function moneItemOnClick(type) {
  let listItem = document.querySelectorAll(".list .list-item");
  let thumbItems = document.querySelectorAll(".thumb .thumb-item");

  if (type === "next") {
    list.appendChild(listItem[0]);
    thumb.appendChild(thumbItems[0]);
  } else {
    list.prepend(listItem[listItem.length - 1]);
    thumb.prepend(thumbItems[thumbItems.length - 1]);
  }
}

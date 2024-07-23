
 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  
  if (n > x.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = x.length;
  } else {
    slideIndex = n;
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  if (x[slideIndex-1]) {
    x[slideIndex-1].style.display = "block";
  }
}
var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  
  // 隱藏所有幻燈片
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  // 更新索引並確保它在範圍內
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  
  // 顯示當前幻燈片
  if (x[myIndex-1]) {
    x[myIndex-1].style.display = "block";
  }
  
  // 設置定時器以每2秒調用一次 carousel 函數
  setTimeout(carousel, 2000);
}

// 初始化調用
carousel();















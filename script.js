let title = document.getElementById("title"); 
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let content = document.getElementById("content");
btn.addEventListener("click",news);
function news(){
  list.innerHTML=list.innerHTML+`
  <div class="news">
    <p>${content.value}</p><hr>
   </div>
   `
  ;
}
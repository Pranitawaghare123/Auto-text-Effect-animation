const containerE1=document.querySelector(".container");
let career=["web Developer","Full Stack Developer","AI developer","freelancer","traveler"]
let index=0
let char_index=0;
updateText()
function updateText(){
    char_index++;
  containerE1.innerHTML=`<h1>I am ${career[index].slice(0,1)==="t" ? "an":"a"} ${career[index].slice(0,char_index)}</h1>
  `;

  if(char_index===career[index].length){
    index++;
    char_index=0;
  }
  if (index===career.length){
    index=0;
  }
  
  setTimeout(updateText,400);
}

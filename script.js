/* .js files add interaction to your website */
//read more getinspired page */

  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

function myFunction() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
/////////////////
// factclick page 
var displayName = document.getElementById("welcome");
var next = document.getElementById("next");
if (next){
next.addEventListener("click", message);
}
function message(){
  var name = document.getElementById("name").value;
  
  displayName.innerHTML= "Hello, " + name + ". Welcome to the land of programming. Click a button to learn an intersting fact about any of the programming languages below."
}

var pythonList= [
  "In December 1989, Python’s creator Guido Van Rossum was looking for a hobby project to keep him occupied in the week around Christmas. He had been thinking of writing a new scripting language that’d be a descendant of ABC and also appeal to Unix/C hackers. He chose to call it Python.",
  "The language’s name isn’t about snakes, but about the popular British comedy troupe Monty Python (from the 1970s). Guido himself is a big fan of Monty Python’s Flying Circus. Being in a rather irreverent mood, he named the project ‘Python’.",
  "In Python, a function can return more than one value as a tuple.This isn’t possible in a language like Java. There, you can return an array of values instead.",
  "If you get to the IDLE and type in import antigravity, it opens up a webpage with a comic about the antigravity module.",
  "If you type in string literals separated by a space, Python concatenates them together. So, ‘Hello’ ‘World’ becomes ‘HelloWorld’.",
  "According to a recent survey, in the UK in 2015, Python overtook French to be the most popular language taught in primary schools. Out of 10, 6 parents preferred their children to learn Python over French. One of my favorite facts about Python programming."];

  var pythonFact= document.getElementById("fact1");
  var pythonBtn = document.getElementById("python");
  var count=0;

  if (pythonBtn){
    pythonBtn.addEventListener("click", displayFact1);
  }

  function displayFact1(){
   pythonFact.innerHTML= pythonList[count];
   count++;
   if (count == pythonList.length){
     count=0;
   }
  }

var htmlList= ["HTML was designed by the British scientist Sir Tim Berners-Lee at the CERN nuclear physics laboratory in Switzerland during the 1980s.",
"The HTML <map> elements can be used to create image maps. Image maps are basically images with clickable areas on them, that can be hyperlinked to another web page or other parts of the same document. You can define which areas of an image are clickable by simply mentioning the corresponding X Y coordinates of those points in the <area> elements nested inside <map>.",
"Alt-text is not a description of an image, but a replacement for the image in case it is not displayed. This is a subtle difference. For many cases, alt=” does a good job – as the image might be purely illustrative, or just visualize something which the main text itself explains well. Also, “alt-tag” is wrong – it’s “alt-attribute”, or “alt-text”. (Opening and closing tags are what forms an element.)",
"There is an even stricter HTML flavor called ISO-HTML – it doesn’t allow “false” nesting of headlines, so that you need an h1-tag before you can include an h2-tag."];

 var htmlFact= document.getElementById("fact2");
  var htmlBtn = document.getElementById("html");
  var count=0;

  if (htmlBtn){htmlBtn.addEventListener("click", displayFact2);}

  function displayFact2(){
   htmlFact.innerHTML= htmlList[count];
   count++;
   if (count == htmlList.length){
     count=0;
   }
  }

  var javaList= ["Along with HTML an CSS, JavaScript is one of the three main things of the www (World Wide Web). It enables interactive web pages and thus is an essential part of web applications. A majority of websites use it and all major web browsers have a devoted JavaScript engine to execute it.",
  "Despite the fact that there are similarities between JavaScript and Java, including language name, respective standard libraries and syntax, these two languages are distinct and differ significantly in design.",
  "In many other programming languages you have to put semicolon(;) in the end of a statement. In JavaScript you can start with a semicolon(;)",
  "In javascript to declare a variable we have to use ‘=’ but to check equality of two variables we have to use ‘==’ or ‘===’ for matching data and data types."];

  var javaFact= document.getElementById("fact3");
  var javaBtn = document.getElementById("java");
  var count=0;

  if(javaBtn){javaBtn.addEventListener("click", displayFact3);}

  function displayFact3(){
   javaFact.innerHTML= javaList[count];
   count++;
   if (count == javaList.length){
     count=0;
   }
  }

//var titlearray =["css","js","python","java","android","jquery","ruby"];
//var descriptionarray =["css style","js program","python code","java objects","android program","jquery objects","ruby code"];

var bookarray = [
    ["Indian History <br>", "Teslim Chowdhury", "Honors Grad", "Bengali", "840", ""], 
    ["Modern Indian History 2 ", "Sekhar Bondopadhya", "Honors Grad", "Bengali", "620", "Palashi to Partition"],
    ["Math Book ", "S chand", "Career Development", "Bengali", "777", "General Mathematics"],
    ["General Intelligence & Reasoning", "Subir Das", "Career Development", "Bengali", "850", "Competitive Exam"],
    ["General Studies Handbook", "Jana Banerjee Mondol", "Career Development", "Bengali", "1400", "Competitive Exam"]
];
var dynamic = document.querySelector('.container1');  
for (var i = 0; i < bookarray.length; i++) {
  var x = (parseInt(bookarray[i][4]) / 500) * 4000;

    var fetch = document.querySelector('.container1').innerHTML;  
    dynamic.innerHTML = `<div id="cards${i}" class="boxes">
      <div class="box-content">
        <h4>${bookarray[i][0]}</h4> <br>
        <p>
          
          Author: ${bookarray[i][1]}  <br>
          Grade: ${bookarray[i][2]}  <br>
          Language: ${bookarray[i][3]} <br>
          Book: ${bookarray[i][4]} pages <br>
          Description: ${bookarray[i][5]}  <br>
          
          Estimated Cost: ${x.toString()} INR <br>
        </p>
        <br>
        <a class="showmore" href="#">Let's connect in FB</a>
      </div>
    </div>` + fetch ; 
    //var bgimg = document.getElementById(`cards${i}`);
    //bgimg.style.backgroundImage = `url('img/logo-small.png.jpg')`;
} 
/*
<div class="col-sm-3">
<div class="bookcard">
  <img src="img/logo-small.png" alt="Subjects" width="50" height="50">
  <h4 class="card-title">Life Science for Class 9 </h4>
  <p class="bookcarddetail"><strong> Author: Unknown<br><br>
    Level: Secondary, IX<br>
    Language: Bengali<br>
    Audio duration: 5 Hrs <br>
    Original Book: 145 Pages<br>
     </strong></p>
</div>
</div> */
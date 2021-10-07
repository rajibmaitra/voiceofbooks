//var titlearray =["css","js","python","java","android","jquery","ruby"];
//var descriptionarray =["css style","js program","python code","java objects","android program","jquery objects","ruby code"];

var bookarray = [
    ["Life Science for Class 9", "Author Name", "Career Development", "Bengali", "100"],
    ["Railway Exam", "Author Name", "GClass XI", "Bengali", "240"],
    ["History", "Author Name", "Graduation", "Bengali", "111"], 
    ["Political Science", "Author Name", "Graduation", "Bengali", "300"],
    ["Bengali text", "Author Name", "Class XII", "Bengali", "1000"],
    ["English Text", "Author Name", "Masters", "Bengali", "900"],
    ["Humanity", "Author Name", "Graduation", "Bengali", "333"]
];
var dynamic = document.querySelector('.container1');  
for (var i = 0; i < bookarray.length; i++) {
    var fetch = document.querySelector('.container1').innerHTML;  
    dynamic.innerHTML = `<div id="cards${i}" class="boxes">
      <div class="box-content">
        <h2>${bookarray[i][0]}</h2>
        <p>
          
          Author: ${bookarray[i][1]}  <br>
          Grade: ${bookarray[i][2]}  <br>
          Language: ${bookarray[i][3]} <br>
          Original Book: ${bookarray[i][4]} pages <br>
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
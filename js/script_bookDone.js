
var bookarray_CareerDevelopment = [
  ["Teaching Aptitude ", "WBSC", "Career Development", "English", "100", "Competitive Exam", "8.5"], 
  ["Railway Clarical Exam ", "WBSC", "Career Development", "English", "75", "Competitive Exam", "3.5"], 
  ["Railway Recruitment ", "Gen D Kamal Hosen", "Career Development", "English", "250", "Competitive Exam", "12"], 
  ["Rail General Knowledge ", "Debabrata Sarkar", "Career Development", "Bengali", "128", "Competitive Exam", "6"], 
  ["CWBCS General Studies Manual", "Nitin Singhania", "Career Development", "Bengali", "1400", "Competitive Exam", "46"]
];

var bookarray_Graduation = [
  
  ["Sikhya Bigyan Dishari", "Sanjay Kr Das & Rakesh Ghosh", "Graduation", "Bengali", "260", "Educational Psychology", "29"],
  ["Modern Indian History 2 ", "Sekhar Bondopadhya", "Honors Grad", "Bengali", "620", "Palashi to Partition History", "31"],
  ["Indian History", "Teslim Chowdhury", "Honors Grad", "Bengali", "840", "Grad level History book","42"],
  ["History of Modern India", "Sidhartha Guho Roy", "Honors Grad", "Bengali", "1024", "Grad level Text book","51.5"], 
  ["Biswa Sovyotar Modhyojug ", "Asif Jamal Noskor", "Graduation", "Bengali", "343", "Grad level History book", "23"], 
  ["Bengali Teacher ", "Bhutan Chandra Ghosh", "Graduation", "Bengali", "460", "Grad level Text book", "25"], 
  ["Political Science ", "Anadi Kumar Mahapatra", "Graduation", "Bengali", "953", "Grad level Pol Science", "60"], 
  ["Bangla Bhasha Porikroma ", "Paresh Ch Majumder", "Graduation", "Bengali", "256", "Grad level Text book", "12.5"], 
  ["B. Ed Scanner ", "Asim Kumar", "Graduation", "Bengali", "550", "Grad level Text book", "42"],
  
  ["Proshno Uttore <br> Bharat Itihaasher Ruprekha", "J K Pahari", "Graduation 4th Sem", "Bengali", "255", "Q&A of Indian History", "27"],
  ["Modern Times of India <br> 1880-1950 AD", "Sumit Sarkar", "Graduation", "Bengali", "484", "Political Science", "43"],
  ["Prachin Rome er Itihaas <br> 753-718 AD", "Deboshree Dey", "Graduation", "Bengali", "460", "History of Rome", "60"],
  ["Prachin Biswa: Social O <br> Cultural Development", "Suman Mukherjee", "Honors Grad", "Bengali", "288", "Grad level Text book","15"]
]; 

var bookarray_HS = [
  
  ["WBHA ARTS Test Paper 2021 ", "Parul Prakashani", "Class XII", "Bengali", "544", "Higher Secondary", "23"],
  ["Bengali Text ", "WB Govt", "Class XI", "Bengali", "127", "Higher Secondary", "6"], 
  ["Itihaas Sahayika ", "Subhas Biswas", "Class XII", "Bengali", "250", "Higher Secondary", "12.5"], 
  ["Bangla Bhasha O Shilpo Sanskriti Itihaas ", "WBCHSE", "Class XI", "Bengali", "192", "Higher Secondary", "12.5"],
  ["WBHA Higher Secondary Test Paper", "Parul Prakasani", "Class XII", "Bengali", "1000", "Higher Secondary", "49"]
]; 

var bookarray_S = [ 
  ["Class 10 Challenger - All subjects", "Puja Prokashoni", "Class X", "Bengali", "800", "Secondary / Madhyamik", "36"],
  ["Life Science for Class 9", "Ray Martin", "Class IX", "Bengali", "145", "Secondary / Madhyamik", "5"],
  ["History for Class 9", "Samar Kr Mallik & Prasanta Kundu", "Class IX", "Bengali", "141", "Secondary / Madhyamik", "3"],
  ["Life Science for Class 10", "Ray Martin", "Class X", "Bengali", "455", "Secondary / Madhyamik", "11"],
  ["Geography for Class 10", "Judhisthir Hazra", "Class X", "Bengali", "149", "Secondary / Madhyamik", "8"],
  ["WBHA Test Paper ", "WB Govt", "Class X", "Bengali", "400", "Secondary / Madhyamik", "19.6"],
  ["WBTA Test Paper 2021", "Parul Prakashani", "Class X", "Bengali", "577", "Secondary / Madhyamik", "15"],
  ["WBBSE & CBSE Chemistry", "Asim Kumar & Debabrata Sarkar", "Class X", "Bengali", "250", "Secondary / Madhyamik", "6.5"]
]; 

var bookarray_literature = [
  ["Kapalkundala", "Bankim Chandra Chattopadhyay", "For all", "Bengali", "68", "Literature", "4.5"]
]; 

var dynamic = document.querySelector('.container1');  

document.write("<div class=\"container\"><div class=\"row\"><h2><br>Career Development Audio Books<br></h2><br></div></div>");
cardPrintArray(bookarray_CareerDevelopment);

document.write("<div class=\"container\"><div class=\"row\"><h2><br>Graduation  Audio Books<br></h2><br></div></div>");
cardPrintArray(bookarray_Graduation);

document.write("<div class=\"container\"><div class=\"row\"><h2><br>Higher Secondary Audio Books<br></h2><br></div></div>");
cardPrintArray(bookarray_HS);

document.write("<div class=\"container\"><div class=\"row\"><h2><br>Secondary (Madhyamik) Audio Books<br></h2><br></div></div>");
cardPrintArray(bookarray_S);

document.write("<div class=\"container\"><div class=\"row\"><h2><br>Literature<br></h2><br></div></div>");
cardPrintArray(bookarray_literature);



function cardPrintArray(bookarray) {
  for (var i = 0; i < bookarray.length; i++) {
    //var x = (parseInt(bookarray[i][4]) / 500) * 4000;
  
      var fetch = document.querySelector('.container1').innerHTML;  
      dynamic.innerHTML = fetch + `<div id="cards${i}" class="boxes">
        <div class="box-content">
          <h4>${bookarray[i][0]}</h4> <br>
          <p>
            
            Author: ${bookarray[i][1]}  <br>
            Grade: ${bookarray[i][2]}  <br>
            Language: ${bookarray[i][3]} <br>
            Book: ${bookarray[i][4]} pages <br>
            Description: ${bookarray[i][5]}  <br>         
            Duration: ${bookarray[i][6]} Hours <br>
          </p>
          <a class="showmore" href="https://www.facebook.com/Prerana-Audio-Library-100342325822550">Let's connect in FB</a>
 
        </div>
      </div>`; 
  
      //if ((i+1)%3 == 0)
      //  <br>

      //var bgimg = document.getElementById(`cards${i}`);
      //bgimg.style.backgroundImage = `url('img/logo-small.png.jpg')`;
  } 

}
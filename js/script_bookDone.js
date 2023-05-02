
// Career Dev Count 9 :: update the sum in audiobooklist.html
var bookarray_CareerDevelopment = [
  ["Teaching Aptitude ", "WBSC", "Career Development", "English", "100", "Competitive Exam", "8.5"], 
  ["Achievers year book 2022 ", "Collector's Handbook", "Career Development", "Bengali", "464", "Competitive Exam", "30"], 
  ["Railway Clarical Exam ", "WBSC", "Career Development", "English", "75", "Competitive Exam", "3.5"], 
  ["Railway Recruitment ", "Gen D Kamal Hosen", "Career Development", "English", "250", "Competitive Exam", "12"], 
  ["Rail General Knowledge ", "Debabrata Sarkar", "Career Development", "Bengali", "128", "Competitive Exam", "6"], 
  ["CWBCS General Studies Manual", "Nitin Singhania", "Career Development", "Bengali", "1400", "Competitive Exam", "46"],
  ["Complete Guide to Primary TET ", "Rita Publication", "Career Development", "Bengali", "928", "Competitive Exam/TET", "52.5"],
  ["poribes ", "Dr anish chottyopadhay", "Career Development", "Bengali", "512", "Competitive Exam", "25"],
  ["General Studies Handbook", "Jana Banerjee Mondol", "Career Development", "Bengali", "1575", "Competitive Exam", "60"]
];

//Grad Books: 63 update the sum in audiobooklist.html
var bookarray_Graduation = [

  ["Adhunik purbo asia-chin o japaner itihas", "Sidhartho guho roy", "Graduation", "Bengali", "472", "History of Chin o Japan", "22.5"],
  ["Varoter itihaser adiporbo,1st part pracintomo porbo - 600AD", "Ranbir Chakrabarti", "Graduation", "Bengali", "395", "History OF India:600AD", "19.5"],
  ["Varot itihas 600-1556", "Teslim Chowdhury", "Honors Grad", "Bengali", "863", "History","41"],
  ["Varoter sasonbebostyha o rajniti porichoy ", "Anadi Kumar Mahapatra", "Graduation", "Bengali", "843", "Grad level Pol Science", "33"], 
  ["Varoter Itihas O Jatiyo Mukti Andolon", "Raju Seth", "Honors Grad", "Bengali", "796", "History","67.5"],
  ["South east Asia", "Subodh Kr Mukhopadhya", "Honors Grad", "Bengali", "888", "History","45.7"],
  ["Biplob theke Biswajudhyo","Gopal Krishna Pahari", "Honors Grad", "Bengali", "378", "History","39.57"],
  ["Sultani rajotyokale varat","Soumitra srimani", "Honors Grad", "Bengali", "340", "History","40.00"],
  ["Adhunik england part 1","Gopalchandra Sinha", "Honors Grad", "Bengali", "216", "History","15.57"],
  ["Adhunik england part 2","Gopalchandra Sinha", "Honors Grad", "Bengali", "268", "History","14.00"],
  ["Antorjatik somporker itihas","dr Pranab kr Chatyapadhay", "Honors Grad", "Bengali", "392", "History","17.00"],
  ["Prachin Rome er Itihaash", "Debasree Dey", "Graduation", "Bengali", "460", "History of Rome: 753-718AD", "60"],
  ["Sikhya Bigyan Dishari", "Sanjay Kr Das & Rakesh Ghosh", "Graduation", "Bengali", "260", "Educational Psychology", "29"],
  ["Modern Indian History 2 ", "Sekhar Bondopadhya", "Honors Grad", "Bengali", "620", "Palashi to Partition History", "31"],
  ["Indian History", "Teslim Chowdhury", "Honors Grad", "Bengali", "840", "Grad level History book","42"],
  ["History of Modern India", "Sidhartha Guho Roy", "Honors Grad", "Bengali", "1024", "Grad level Text book","51.5"], 
  ["Biswa Sovyotar Modhyojug ", "Asif Jamal Noskor", "Graduation", "Bengali", "343", "Grad level History book", "23"], 
  ["Bengali Teacher ", "Bhutan Chandra Ghosh", "Graduation", "Bengali", "460", "Grad level Text book", "25"], 
  ["Political Science ", "Anadi Kumar Mahapatra", "Graduation", "Bengali", "953", "Grad level Pol Science", "60"], 
  ["Bangla Bhasha Porikroma ", "Paresh Ch Majumder", "Graduation", "Bengali", "256", "Grad level Text book", "12.5"], 
  ["B. Ed Scanner ", "Asim Kumar", "Graduation", "Bengali", "550", "Grad level Text book", "42"],
  ["Rajnitik Somaj Totto", "Anadi Kr Mohapatra", "Honors Grad", "Bengali", "676", "Political Science","68"],
  ["Sikhya Totto", "Sushil Roy", "Honors Grad", "Bengali", "456", "Education","26"],
  ["Tulonamulok Sikhya", "Debasish Paul", "Honors Grad", "Bengali", "436", "Education","20"],
  ["Proshno Uttore <br> Bharat Itihaasher Ruprekha", "J K Pahari", "Graduation 4th Sem", "Bengali", "255", "Q&A of Indian History", "27"],
  ["Modern Times of India <br> 1880-1950 AD", "Sumit Sarkar", "Graduation", "Bengali", "484", "Political Science", "43"],
  ["Prachin Rome er Itihaas <br> 753-718 AD", "Deboshree Dey", "Graduation", "Bengali", "460", "History of Rome", "60"],
  ["Prachin Biswa: Social O <br> Cultural Development", "Suman Mukherjee", "Honors Grad", "Bengali", "288", "Grad level Text book","15"],
  ["Itihas O Oitihasik", "Amalesh Tripathi","Honors Grad", "Bengali", "179", "History", "12.00"],
  ["Antorjatik Somporker Ruprekha Part 1", "Purushottam Bhattachariya and Anindajyoti Majumder", "Honors Grad", "Bengali", "218", "pol Science", "15.00"],
  ["Europer Biplaber Kal(1789-1848)", "Samar Kumar Mallick", "Honors Grad", "Bengali", "380", "History", "27.00"],
  ["Antorjatik Somporker Ruprekha part-2", "Puroshottam Bhattachariya and Anindajyoti Majumder", "Honors Grad", "Bengali", "274", "Pol Science", "18.00"],
  ["Boro Somoy Theke Choto Somoy", "Rajkumar Chakrabarty", "Honors Grad", "Bengali", "237", "History", "12.00"],
  ["Biswa Sovyatar Prachin Yug", "Siddhartha Guho Roy and Aparajita Bhattachariya", "Honors Grad", "Bengali", "211", "History", "13.00"],
  ["Rom Arab O Madhya Juger Europe", "Dhrubo Kar and Bumba Dey", "Honors Grad", "Bengali",  "206", "History", "13.40"],
  ["Sadharon Bangla Porikroma", "N. Chowdhury", "Honors Grad", "Bengali", "223", "Bengali", "17.00"],

  ["Siksha Darshan O <br> Siksha Niti", "Archana Bandyopadhyay", "Honors Grad", "Bengali", "479", "Grad level Text book","30"],
  ["Chaya Itihas semester Note", "Dr. Pradip Kumar Mondal", "Graduation", "Bengali", "202", "History", "12.5"],
  ["Jana Proshason", "Rajashree Basu", "Graduation", "Bengali", "214", "political Science", "12.5"],
  ["Mughal Amal(Akbar Theke Aurangajeb 1556-1707)", "Samar Kumar Mallik and Swastik Mallik", "Graduation", "Bengali", "577", "History", "38"],
  ["Banglar Itihas", "Siddhartho Guho Roy and Shreya Roy", "Graduation", "Bengali", "368", "History", "23"], 
  ["Bamar Bangla Shikkhok", "Tapan Kumar Chattopadhay", "Graduation", "Bengali", "439", "Bengali", "33.5"],
  ["Rajnitir Tottokotha", "Dipak Kumar Das", "Graduation", "Bengali", "372", "Political Science", "24"],
  ["Rastra Samaj Rajniti", "Satyabrata Chakrabarty", "Graduation", "Bengali", "494", "Political Science", "32"],
  ["Bamar Bangla Shikkhok sem VI", "Adhyapak N. Mukhopadhyay", "Graduation", "Bengali", "625", "Bengali", "40"],
  ["Language Aspect 1", "Prodip Roy", "Graduation", "English", "140", "English Language", "10"],
  ["Banglar Somikkha Sem I", "Dr. Debesh Kumar Achyarya", "Graduation", "Bengali", "213", "Bengali", "12"],
  ["Antorjatik Somporker Totto O Biborton", "Gautam Kumar Basu", "Graduation", "Bengali", "196", "Political Science", "12"],
  ["Rastra chintar Dhara Part 3", "Debasish Chakrabarty", "Graduation", "Bengali", "609", "Political Science", "27"],
  ["Rastra chintar Dhara Part 2", "Debasish Chakrabarty", "Graduation", "Bengali", "407", "Political Science", "24"],
  ["Rastra chintar Dhara Part 1", "Debasish Chakrabarty", "Graduation", "Bengali", "346", "Political Science", "19"],
  ["Banglar Sahitya O Pradesik Sahitya", "PDF", "Graduation", "Bengali", "141", "Bengali", "9"],
  ["Bharat Itihas Parikrama", "Adhyapak Probhatangshu Maiti", "M.A", "Bengali", "898", "History", "40"],
  ["Marx Engels", "Unknown", "Graduation", "Bengali", "339", "Political Science", "20"],
  ["Chand Boniker Pala", "Shambhu Mitra", "Graduation", "Bengali", "125", "Bengali", "6"],
  ["Podi Pisir Bormi Bakso", "Lila Majumder", "Graduation", "Bengali", "64", "Bengali", "2"],
  ["Sahityer Rupriti O Onnanno Prasanga", "Kuntal Chattopadhayay", "Graduation", "Bengali", "379", "Bengali", "27"],
  ["Samasamayik Antorjatik Somporko", "Radharamon Chakrabarti and Sukalpa Chakrabarti", "Graduation", "Bengali", "780", "Political Science", "40"],
  ["Bharate Manabadhikar D.S.E-III(Sem 6)", "Adhyapak Amit Kumar Laha", "Graduation", "Bengali", "48", "Political Science", "3"],
  ["Bhasha Shikkhaner Koushal(Sem 6)", "Adhyapak Ashim Kumar Mukherjee", "Graduation", "Bengali", "96", "Bengali", "5"],
  ["Shikhan O Bikash", "Adhyapika Keka Das and Chiranjit Das", "Graduation", "Bengali", "80", "Education", "4"],
  ["Bangla Sahityer Itihas D.S.E-III(Sem 6)", "Adhyapak Ashim Kumar Mukherjee and Ranjit Kumar Sahis", "Graduation", "Bengali", "128", "Bengali", "8"],
  ["Uttoroner Pothe Europe 1400-1700", "Pulakesh Roy/Sayonton Das", "Graduation", "Bengali", "559", "History", "32"]
 
]; 

//HS: 16 update the sum in audiobooklist.html
var bookarray_HS = [
  ["Darshon Sikhyok ", "Bimolendu Samanta", "Class XI", "Bengali", "230", "XI Reference", "20"],
  ["Highlights ", "P K Mukherjee", "Class XII", "English", "833", "Higher Secondary", "40"],
  ["WBHA ARTS Test Paper 2021 ", "Parul Prakashani", "Class XII", "Bengali", "544", "Higher Secondary", "23"],
  ["Bengali Text ", "WB Govt", "Class XI", "Bengali", "127", "Higher Secondary", "6"], 
  ["Itihaas Sahayika ", "Subhas Biswas", "Class XII", "Bengali", "250", "Higher Secondary", "12.5"], 
  ["Bangla Bhasha O Shilpo Sanskriti Itihaas ", "WBCHSE", "Class XI", "Bengali", "192", "Higher Secondary", "12.5"],
  ["Chaya Proshno Uttor e Sikhkhabigyan", "Dr. Debasis Pal & Dr. Susantanto Kr Sahu", "Class XII", "Bengali", "343", "Higher Secondary", "23"],
  ["WBHA Higher Secondary Test Paper", "Parul Prakasani", "Class XII", "Bengali", "1000", "Higher Secondary", "49"],
  ["WBHA test paper 2023", "Parul Prakasani", "Class X", "Bengali", "1000", " Secondary", "38"],
  ["WBHA test paper 2023", "Parul Prakasani", "Class XII", "Bengali", "1000", "higher  Secondary", "33"],
  ["Poribesh Shikkha Reference", "Dr. Dulal Chandra Santra", "Class XI", "Bengali", "270", "Environmental Studies", "17.5"],
  ["Samaj Totter Sahaj Path", "Tilak Dutta, Sukanya Dutta, Arindam Dutta", "Class XI", "Bengali", "197", "Sociology", "15"],
  ["Bangalir Bhasa O Sanskriti", "W.B.H.S Shikkha Sansad", "Class XI", "Bengali", "149", "Bengali", "12.5"],
  ["Poribesh Sikkha Reference", "Dr. Dulal Chandra Santra", "Class XII", "Bengali", "242", "Environmental Studies", "17"],
  ["Darshan Bichitra 11 (Roy and Martin)", "Mondal O Sarkar", "Class XI", "Bengali", "240", "Philosophy", "26"],
  ["Darshan Bichitra 12 (Roy and Martin)", "Mondal O Sarkar", "Class XI", "Bengali", "416", "Philosophy", "35"]

]; 

//Sec: 12 update the sum in audiobooklist.html
var bookarray_S = [ 
  ["Physical Science Reference", "Ray & Martin", "Class X", "Bengali", "537", "Secondary / Madhyamik", "23"],
  ["Adhunik Bhugol p Poribesh", "Judhisthir Hazra", "Class X", "Bengali", "149", "Secondary / Madhyamik", "10"],
  ["Class 10 Challenger - All subjects", "Puja Prokashoni", "Class X", "Bengali", "800", "Secondary / Madhyamik", "36"],
  ["Life Science for Class 9", "Ray Martin", "Class IX", "Bengali", "145", "Secondary / Madhyamik", "5"],
  ["History for Class 9", "Samar Kr Mallik & Prasanta Kundu", "Class IX", "Bengali", "141", "Secondary / Madhyamik", "3"],
  ["Life Science for Class 10", "Ray Martin", "Class X", "Bengali", "455", "Secondary / Madhyamik", "11"],
  ["Geography for Class 10", "Judhisthir Hazra", "Class X", "Bengali", "149", "Secondary / Madhyamik", "8"],
  ["WBHA Test Paper ", "WB Govt", "Class X", "Bengali", "400", "Secondary / Madhyamik", "19.6"],
  ["WBTA Test Paper 2021", "Parul Prakashani", "Class X", "Bengali", "577", "Secondary / Madhyamik", "15"],
  ["WBBSE & CBSE Chemistry", "Asim Kumar & Debabrata Sarkar", "Class X", "Bengali", "250", "Secondary / Madhyamik", "6.5"],
  ["poribesh o bigyan", "vuiya dhor", "Class xiii", "bengali", "544", "bigyan", "34"],
  ["Chaya English Tutor", "Satyajit Bosu & Koushik kr Maiti", "Class X", "English", "452", "Secondary / Madhyamik", "26"]
]; 

//Other: 3
var bookarray_literature = [
 ["Kapalkundala", "Bankim Chandra Chattopadhyay", "For all", "Bengali", "68", "Literature", "4.5"],
 ["Loko Oitijheyer Dorpone", "Manos Mojumdar ", "For all", "Bengali", "176", "Literature", "7.5"],
 ["Mayamridonga", "Soid mustafa siraj", "For all", "Bengali", "144", "Literature", "8.5"]
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
            Language: ${bookarray[i][3]} <br>
            Book: ${bookarray[i][4]} pages <br>
            Description: ${bookarray[i][5]}  <br>         
            Duration: ${bookarray[i][6]} Hours <br>
          </p>
        
        </div>
      </div>`; 
  
      //if ((i+1)%3 == 0)

     //Grade: ${bookarray[i][2]}  <br>
     //<a class="showmore" href="https://www.facebook.com/Prerana-Audio-Library-100342325822550">Let's connect in FB</a>
 
      //  <br>

      //var bgimg = document.getElementById(`cards${i}`);
      //bgimg.style.backgroundImage = `url('img/logo-small.png.jpg')`;
  } 

}
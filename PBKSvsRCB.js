function openit()
{
    document.getElementById("defaultOpen").click();
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) 
{
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } 
    else
    {
      panel.style.display = "block";
    }
  });
}

var dates = document.getElementById("match_date");

dates.innerHTML = new Date(2021,3,30,7,30);
}

function openPage(pageName,elmnt)
{
  var  tabcontent, tabbuttons;

  tabcontent = document.getElementsByClassName("tabcontent");

  tabbuttons = document.getElementsByClassName("tabbutton");

  for (i = 0; i < tabcontent.length; i++) 

  {tabcontent[i].style.display = "none";}

  for(i=0 ; i<tabbuttons.length ; i++)
  {tabbuttons[i].style.backgroundColor="#555";}

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor="blue";
}

function initialize_batting(batname,mode,runs,balls,fours,sixes)
{
    this.batsman_name = batname;
    this.mode_of_dismissal = mode;
    this.runs = runs;
    this.balls = balls;
    this.fours = fours;
    this.sixes = sixes;
    this.strike_rate = (parseFloat(runs)/parseFloat(balls))*100;
    this.strike_rate = this.strike_rate.toFixed(2);
}

function initialize_bowling(name,over,maiden,runs,wkts,nb,wd)
{
  this.name = name;
  this.over = over;
  this.maiden = maiden;
  this.runs = runs;
  this.wkts = wkts;
  this.nb = nb;
  this.wd = wd;
  this.eco = parseFloat(runs)/parseFloat(over);
  this.eco = this.eco.toFixed(2);
}

function pbks_battingtable()
{
    var pbks_no_of_batsman = 7,i;

    var pbks_playing_xi=["KL Rahul","Prabhsimran (wk)","Gayle","Pooran","Deepak Hooda","Shahrukh Khan","Harpreet Brar","Chris Jordan","Riley Meredith","R Bishnoi","Md Shami"];

    var pbks_did_not_bat = new Array();
    
    var pbks_batsman_details = new Array();

    var pbks_extras = 5;
  
    pbks_batsman_details[0] = new initialize_batting("KL Rahul","not out",91,57,7,5);

    pbks_batsman_details[1] = new initialize_batting("Prabhsimran (wk)","c Kohli b Jamieson",7,7,1,0);

    pbks_batsman_details[2] = new initialize_batting("Gayle","c de Villiers b Daniel Sams",46,24,6,2);

    pbks_batsman_details[3] = new initialize_batting("Pooran","c Shahbaz Ahmed b Jamieson",0,3,0,0);

    pbks_batsman_details[4] = new initialize_batting("Deepak Hooda","c Shahbaz Ahmed b Jamieson",5,9,0,0);

    pbks_batsman_details[5] = new initialize_batting("Shahrukh Khan","b Chahal",0,3,0,0);
    
    pbks_batsman_details[6] = new initialize_batting("Harpreet Brar","not out",25,17,1,2);


    for( i = pbks_no_of_batsman ; i < 11 ; i++)
    {pbks_did_not_bat.push(pbks_playing_xi[i]);}

    var row,table=document.getElementById("pbks_batting_table");

    var col = new Array();

    for(i=1;i<=pbks_no_of_batsman;i++)
    {
        row= table.insertRow(i);

        col[0] = row.insertCell(0);
        col[0].setAttribute("class", "pbks_color");
        col[0].innerHTML = pbks_batsman_details[i-1].batsman_name;
        
        col[1] = row.insertCell(1);
        col[1].innerHTML = pbks_batsman_details[i-1].mode_of_dismissal;
        if(pbks_batsman_details[i-1].mode_of_dismissal === "not out")
        {row.setAttribute("class","not_out")};

        col[2] = row.insertCell(2);
        col[2].setAttribute("style", "font-weight: bold;");
        col[2].innerHTML = pbks_batsman_details[i-1].runs;

        col[3] = row.insertCell(3);
        col[3].innerHTML = pbks_batsman_details[i-1].balls;

        col[4] = row.insertCell(4);
        col[4].innerHTML = pbks_batsman_details[i-1].fours;

        col[5] = row.insertCell(5);
        col[5].innerHTML = pbks_batsman_details[i-1].sixes;

        col[6] = row.insertCell(6);
        col[6].innerHTML = pbks_batsman_details[i-1].strike_rate;
    }
    
    var temp = document.getElementById("pbks_extras");
    col[7] = temp.insertCell(1);
    col[7].innerHTML = "<b>"+pbks_extras+"</b>"+"(b 0, lb 1, w 4, nb 0, p 0)";
    
    var pbks_total = 0;
    for(i=0;i<pbks_no_of_batsman;i++)
    {pbks_total+=pbks_batsman_details[i].runs;}
    pbks_total+=pbks_extras;

    temp = document.getElementById("pbks_total");
    col[8] = temp.insertCell(1);
    col[8].innerHTML = "<b>"+pbks_total+"</b>"+"/ 5(20 ovr)";

    temp = document.getElementById("pbks_did_not_bat");
    col[9] = temp.insertCell(1);
    col[9].innerHTML = pbks_did_not_bat;
    var temp1 = document.getElementById("pbkss_playing_xi");
    temp1.innerHTML=pbks_playing_xi;
}



function rcb_bowlingtable()
{
   var rcb_bowlers_details = new Array();

   rcb_bowlers_details[0] = new initialize_bowling("Daniel Sams",4,0,24,1,0,2);

   rcb_bowlers_details[1] = new initialize_bowling("Md Siraj",3,0,24,0,0,1);

   rcb_bowlers_details[2] = new initialize_bowling("Jamieson",3,0,32,2,0,1);

   rcb_bowlers_details[3] = new initialize_bowling("Chahal",4,0,34,1,0,0);

   rcb_bowlers_details[4] = new initialize_bowling("Harshal Patel",4,0,53,0,0,0);

   rcb_bowlers_details[5] = new initialize_bowling("Shabhaz Ahmed",2,0,11,1,0,0);

   var row,table = document.getElementById("rcb_bowling_table");

   var col = new Array();

   for(i=1;i<=rcb_bowlers_details.length;i++)
   {
       row = table.insertRow(i);

       col[0] = row.insertCell(0);
       col[0].setAttribute("class", "rcb_color");
       col[0].innerHTML = rcb_bowlers_details[i-1].name;

       col[1] = row.insertCell(1);
       col[1].innerHTML = rcb_bowlers_details[i-1].over;

       col[2] = row.insertCell(2);
       col[2].innerHTML = rcb_bowlers_details[i-1].maiden;
       
       col[3] = row.insertCell(3);
       col[3].innerHTML = rcb_bowlers_details[i-1].runs;

       col[4] = row.insertCell(4);
       col[4].setAttribute("style","font-weight: bold");
       col[4].innerHTML = rcb_bowlers_details[i-1].wkts;

       col[5] = row.insertCell(5);
       col[5].innerHTML = rcb_bowlers_details[i-1].nb;

       col[6] = row.insertCell(6);
       col[6].innerHTML = rcb_bowlers_details[i-1].wd;

       col[7] = row.insertCell(7);
       col[7].innerHTML = rcb_bowlers_details[i-1].eco;

   }
}


function rcb_battingtable()
{
    var rcb_no_of_batsman = 9,i;

    var rcb_playing_xi=["Virat Kohli (c)", "Devdutt Padikkal", "Rajat Patidar", "Glenn Maxwell", "AB de Villiers (wk)", "Shahbaz Ahmed", "Daniel Sams", "Kyle Jamieson", "Harshal Patel", "Mohammed Siraj", "Yuzvendra Chahal"];

    var rcb_did_not_bat = new Array();
    
    var rcb_batsman_details = new Array();

    var rcb_extras = 11;
  
    rcb_batsman_details[0] = new initialize_batting("Virat Kohli (c)","b Harpreet Brar",35,34,3,1);

    rcb_batsman_details[1] = new initialize_batting("Devdutt Padikkal","b Meredith",7,6,0,1);

    rcb_batsman_details[2] = new initialize_batting("Rajat Patidar","c Pooran b Chris Jordan",31,30,2,1);

    rcb_batsman_details[3] = new initialize_batting("Glenn Maxwell","b Harpreet Brar",0,1,0,0);

    rcb_batsman_details[4] = new initialize_batting("AB de Villiers (wk)","c Rahul b Harpreet Brar",0,1,0,0);

    rcb_batsman_details[5] = new initialize_batting("Shahbaz Ahmed","c Harpreet Brar b Ravi Bishnoi",8,11,1,0);

    rcb_batsman_details[6] = new initialize_batting("Daniel Sams","b Ravi Bishnoi",3,4,0,0);

    rcb_batsman_details[7] = new initialize_batting("Kyle Jamieson","not out",16,11,1,0);

    rcb_batsman_details[8] = new initialize_batting("Harshal Patel","c Ravi Bishnoi b Shami",31,13,3,2);

    rcb_batsman_details[8] = new initialize_batting("Mohammed Siraj","not out",0,1,0,0);


    for( i = rcb_no_of_batsman ; i < 11 ; i++)
    {rcb_did_not_bat.push(rcb_playing_xi[i]);}

    var row,table=document.getElementById("rcb_batting_table");

    var col = new Array();

    for(i=1;i<=rcb_no_of_batsman;i++)
    {
        row= table.insertRow(i);

        col[0] = row.insertCell(0);
        col[0].setAttribute("class", "rcb_color");
        col[0].innerHTML = rcb_batsman_details[i-1].batsman_name;
        
        col[1] = row.insertCell(1);
        col[1].innerHTML = rcb_batsman_details[i-1].mode_of_dismissal;
        if(rcb_batsman_details[i-1].mode_of_dismissal === "not out")
        {row.setAttribute("class","not_out")};

        col[2] = row.insertCell(2);
        col[2].setAttribute("style", "font-weight: bold;");
        col[2].innerHTML = rcb_batsman_details[i-1].runs;

        col[3] = row.insertCell(3);
        col[3].innerHTML = rcb_batsman_details[i-1].balls;

        col[4] = row.insertCell(4);
        col[4].innerHTML = rcb_batsman_details[i-1].fours;

        col[5] = row.insertCell(5);
        col[5].innerHTML = rcb_batsman_details[i-1].sixes;

        col[6] = row.insertCell(6);
        col[6].innerHTML = rcb_batsman_details[i-1].strike_rate;
    }
    
    var temp = document.getElementById("rcb_extras");
    col[7] = temp.insertCell(1);
    col[7].innerHTML = "<b>"+rcb_extras+"</b>"+"(b 0, lb 8, w 3, nb 0, p 0)";
    
    var rcb_total = 0;
    for(i=0;i<rcb_no_of_batsman;i++)
    {rcb_total+=rcb_batsman_details[i].runs;}
    rcb_total+=rcb_extras;

    temp = document.getElementById("rcb_total");
    col[8] = temp.insertCell(1);
    col[8].innerHTML = "<b>"+rcb_total+"</b>"+"/8 (20 ovr)";

    temp = document.getElementById("rcb_did_not_bat");
    col[9] = temp.insertCell(1);
    col[9].innerHTML = rcb_did_not_bat;

    var temp2 = document.getElementById("rcbs_playing_xi");
    temp2.innerHTML=rcb_playing_xi;
}


function pbks_bowlingtable()
{
   var pbks_bowlers_details = new Array();

   pbks_bowlers_details[0] = new initialize_bowling("Riley Meredith",3.2,0,29,1,0,0);

   pbks_bowlers_details[1] = new initialize_bowling("Mohammed Shami",3.4,0,28,1,0,0);

   pbks_bowlers_details[2] = new initialize_bowling("Ravi Bishnoi",4,0,17,2,0,2);

   pbks_bowlers_details[3] = new initialize_bowling("Harpreet Brar",4,1,19,3,0,0);

   pbks_bowlers_details[4] = new initialize_bowling("Chris Jordan",4,0,31,1,0,1);

   pbks_bowlers_details[5] = new initialize_bowling("Deepak Hooda",1,0,13,0,0,0);


   var row,table = document.getElementById("pbks_bowling_table");

   var col = new Array();

   for(i=1;i<=pbks_bowlers_details.length;i++)
   {
       row = table.insertRow(i);

       col[0] = row.insertCell(0);
       col[0].setAttribute("class", "pbks_color");
       col[0].innerHTML = pbks_bowlers_details[i-1].name;

       col[1] = row.insertCell(1);
       col[1].innerHTML = pbks_bowlers_details[i-1].over;

       col[2] = row.insertCell(2);
       col[2].innerHTML = pbks_bowlers_details[i-1].maiden;
       
       col[3] = row.insertCell(3);
       col[3].innerHTML = pbks_bowlers_details[i-1].runs;

       col[4] = row.insertCell(4);
       col[4].setAttribute("style","font-weight: bold");
       col[4].innerHTML = pbks_bowlers_details[i-1].wkts;

       col[5] = row.insertCell(5);
       col[5].innerHTML = pbks_bowlers_details[i-1].nb;

       col[6] = row.insertCell(6);
       col[6].innerHTML = pbks_bowlers_details[i-1].wd;

       col[7] = row.insertCell(7);
       col[7].innerHTML = pbks_bowlers_details[i-1].eco;

   }
}



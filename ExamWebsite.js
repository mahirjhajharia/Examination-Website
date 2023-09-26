
// LOGIN FORM JAVASCRIPT & USERIDS
function verify(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="mahirjhajharia" && password=="Mahir@123"){
       alert("Login Successful");
       document.getElementById("loginform").style.display="none";
       document.getElementById("contactdetails").style.display="initial";
       document.getElementById("pusername").innerHTML="NAME - Mahir";
       document.getElementById("puid").innerHTML="UID - 20BCS1949";
    }else{
        alert("Your UserID or Password is incorrect.Please try again");
        window.location.reload();
    }
}

// TIMER JAVASCRIPT
function timer(){
let tempSeconds=1800;
let tempMin=30;
let tempSecs=00;
document.getElementById("timer").innerHTML=tempMin+"m 0"+tempSecs+"s";
document.getElementById("timer").style.color="darkgreen";
function showtime(){
    tempSeconds=tempSeconds-1;
    tempMin=Math.floor(tempSeconds/60);
    tempSecs=tempSeconds%60;
    if(tempSecs<10 && tempMin>=10){
        document.getElementById("timer").innerHTML=tempMin+"m 0"+tempSecs+"s";
    }else if(tempMin<10 && tempSecs<10){
        document.getElementById("timer").innerHTML="0"+tempMin+"m 0"+tempSecs+"s";
    }else if(tempMin<10 && tempSecs>=10){
        document.getElementById("timer").innerHTML="0"+tempMin+"m "+tempSecs+"s";
    }else{
        document.getElementById("timer").innerHTML=tempMin+"m "+tempSecs+"s";
    }
    //adding colours
    if(tempSeconds<=120){
        document.getElementById("timer").style.color="red";
    }else if(tempSeconds<=600){
        document.getElementById("timer").style.color="firebrick";
    }else if(tempSeconds<=1200){
        document.getElementById("timer").style.color="tan";
    }else{
        document.getElementById("timer").style.color="darkgreen";
    }
    // When your time is over
    if(tempSeconds==0){
        alert("Your time is over.Press Ok to submit your exam");

        //Reasoning Score
        if(r1==0){
            document.getElementById("r1marked").innerHTML="-";
            document.getElementById("r1obmark").innerHTML="0";
            document.getElementById("r1marked").style.color="peru";
            document.getElementById("r1obmark").style.color="peru";
            r1score=0;
        }
        if(r2==0){
            document.getElementById("r2marked").innerHTML="-";
            document.getElementById("r2obmark").innerHTML="0";
            document.getElementById("r2marked").style.color="peru";
            document.getElementById("r2obmark").style.color="peru";
            r2score=0;
        }
        if(r3==0){
            document.getElementById("r3marked").innerHTML="-";
            document.getElementById("r3obmark").innerHTML="0";
            document.getElementById("r3marked").style.color="peru";
            document.getElementById("r3obmark").style.color="peru";
            r3score=0;
        }
        if(r4==0){
            document.getElementById("r4marked").innerHTML="-";
            document.getElementById("r4obmark").innerHTML="0";
            document.getElementById("r4marked").style.color="peru";
            document.getElementById("r4obmark").style.color="peru";
            r4score=0;
        }
        if(r5==0){
            document.getElementById("r5marked").innerHTML="-";
            document.getElementById("r5obmark").innerHTML="0";
            document.getElementById("r5marked").style.color="peru";
            document.getElementById("r5obmark").style.color="peru";
            r5score=0;
        }
        
        //Apptitude score
        if(a1==0){
            document.getElementById("a1marked").innerHTML="-";
            document.getElementById("a1obmark").innerHTML="0";
            document.getElementById("a1marked").style.color="peru";
            document.getElementById("a1obmark").style.color="peru";
            a1score=0;
        }
        if(a2==0){
            document.getElementById("a2marked").innerHTML="-";
            document.getElementById("a2obmark").innerHTML="0";
            document.getElementById("a2marked").style.color="peru";
            document.getElementById("a2obmark").style.color="peru";
            a2score=0;
        }
        if(a3==0){
            document.getElementById("a3marked").innerHTML="-";
            document.getElementById("a3obmark").innerHTML="0";
            document.getElementById("a3marked").style.color="peru";
            document.getElementById("a3obmark").style.color="peru";
            a3score=0;
        }
        if(a4==0){
            document.getElementById("a4marked").innerHTML="-";
            document.getElementById("a4obmark").innerHTML="0";
            document.getElementById("a4marked").style.color="peru";
            document.getElementById("a4obmark").style.color="peru";
            a4score=0;
        }
        if(a5==0){
            document.getElementById("a5marked").innerHTML="-";
            document.getElementById("a5obmark").innerHTML="0";
            document.getElementById("a5marked").style.color="peru";
            document.getElementById("a5obmark").style.color="peru";
            a5score=0;
        }
    
        //English Score
        if(e1==0){
            document.getElementById("e1marked").innerHTML="-";
            document.getElementById("e1obmark").innerHTML="0";
            document.getElementById("e1marked").style.color="peru";
            document.getElementById("e1obmark").style.color="peru";
            e1score=0;
        }
        if(e2==0){
            document.getElementById("e2marked").innerHTML="-";
            document.getElementById("e2obmark").innerHTML="0";
            document.getElementById("e2marked").style.color="peru";
            document.getElementById("e2obmark").style.color="peru";
            e2score=0;
        }
        if(e3==0){
            document.getElementById("e3marked").innerHTML="-";
            document.getElementById("e3obmark").innerHTML="0";
            document.getElementById("e3marked").style.color="peru";
            document.getElementById("e3obmark").style.color="peru";
            e3score=0;
        }
        if(e4==0){
            document.getElementById("e4marked").innerHTML="-";
            document.getElementById("e4obmark").innerHTML="0";
            document.getElementById("e4marked").style.color="peru";
            document.getElementById("e4obmark").style.color="peru";
            e4score=0;
        }
        if(e5==0){
            document.getElementById("e5marked").innerHTML="-";
            document.getElementById("e5obmark").innerHTML="0";
            document.getElementById("e5marked").style.color="peru";
            document.getElementById("e5obmark").style.color="peru";
            e5score=0;
        }
    
        //Core Subject Score
        if(c1==0){
            document.getElementById("c1marked").innerHTML="-";
            document.getElementById("c1obmark").innerHTML="0";
            document.getElementById("c1marked").style.color="peru";
            document.getElementById("c1obmark").style.color="peru";
            c1score=0;
        }
        if(c2==0){
            document.getElementById("c2marked").innerHTML="-";
            document.getElementById("c2obmark").innerHTML="0";
            document.getElementById("c2marked").style.color="peru";
            document.getElementById("c2obmark").style.color="peru";
            c2score=0;
        }
        if(c3==0){
            document.getElementById("c3marked").innerHTML="-";
            document.getElementById("c3obmark").innerHTML="0";
            document.getElementById("c3marked").style.color="peru";
            document.getElementById("c3obmark").style.color="peru";
            c3score=0;
        }
        if(c4==0){
            document.getElementById("c4marked").innerHTML="-";
            document.getElementById("c4obmark").innerHTML="0";
            document.getElementById("c4marked").style.color="peru";
            document.getElementById("c4obmark").style.color="peru";
            c4score=0;
        }
        if(c5==0){
            document.getElementById("c5marked").innerHTML="-";
            document.getElementById("c5obmark").innerHTML="0";
            document.getElementById("c5marked").style.color="peru";
            document.getElementById("c5obmark").style.color="peru";
            c5score=0;
        }
        if(c6==0){
            document.getElementById("c6marked").innerHTML="-";
            document.getElementById("c6obmark").innerHTML="0";
            document.getElementById("c6marked").style.color="peru";
            document.getElementById("c6obmark").style.color="peru";
            c6score=0;
        }
        if(c7==0){
            document.getElementById("c7marked").innerHTML="-";
            document.getElementById("c7obmark").innerHTML="0";
            document.getElementById("c7marked").style.color="peru";
            document.getElementById("c7obmark").style.color="peru";
            c7score=0;
        }
        if(c8==0){
            document.getElementById("c8marked").innerHTML="-";
            document.getElementById("c8obmark").innerHTML="0";
            document.getElementById("c8marked").style.color="peru";
            document.getElementById("c8obmark").style.color="peru";
            c8score=0;
        }
        if(c9==0){
            document.getElementById("c9marked").innerHTML="-";
            document.getElementById("c9obmark").innerHTML="0";
            document.getElementById("c9marked").style.color="peru";
            document.getElementById("c9obmark").style.color="peru";
            c9score=0;
        }
        if(c10==0){
            document.getElementById("c10marked").innerHTML="-";
            document.getElementById("c10obmark").innerHTML="0";
            document.getElementById("c10marked").style.color="peru";
            document.getElementById("c10obmark").style.color="peru";
            c10score=0;
        }
        document.getElementById("loginform").style.display="none";
            document.getElementById("contactdetails").style.display="none";
            document.getElementById("instructionspart").style.display="none"
            document.getElementById("reasoningpart").style.display="none";
            document.getElementById("apptitudepart").style.display="none";
            document.getElementById("coresubjectpart").style.display="none";
            document.getElementById("mainpage").style.display="none";
            document.getElementById("englishpart").style.display="none";
            document.getElementById("end").style.display="initial";
            document.getElementById("endpart").style.display="initial";

            //TOTAL MARKS CALCULATION
            reasoningscore=r1score+r2score+r3score+r4score+r5score;
            apptitudescore=a1score+a2score+a3score+a4score+a5score;
            englishscore=e1score+e2score+e3score+e4score+e5score;
            coresubjectscore=c1score+c2score+c3score+c4score+c5score+c6score+c7score+c8score+c9score+c10score;
            totalscore=reasoningscore+apptitudescore+englishscore+coresubjectscore;
            //Enter Marks in table
            document.getElementById("robmark").innerHTML=reasoningscore;
            document.getElementById("aobmark").innerHTML=apptitudescore;
            document.getElementById("eobmark").innerHTML=englishscore;
            document.getElementById("cobmark").innerHTML=coresubjectscore;
            document.getElementById("totalscore").innerHTML=totalscore;
    }
}
setInterval(showtime,1000);
} 

// JAVASCRIPT CODE TO SELECT OPTIONS & TO STORE THE MARKED ANSWERS

//REASONING QUESTION 1
var reasoningscore=0;
var r1score=0;
var r2score=0;
var r3score=0;
var r4score=0;
var r5score=0;
var r1=0;
function r1a(){
    if(document.getElementById("r1a").style.backgroundColor=="honeydew"){
        r1=0;
        document.getElementById("r1a").style.backgroundColor="white";
        document.getElementById("gotorq1button").style.backgroundColor="white";
    }else{
        r1=1;
    document.getElementById("r1a").style.backgroundColor="honeydew";
    document.getElementById("r1b").style.backgroundColor="white";
    document.getElementById("r1c").style.backgroundColor="white";
    document.getElementById("r1d").style.backgroundColor="white";
    } 
}
function r1b(){
    if(document.getElementById("r1b").style.backgroundColor=="honeydew"){
        r1=0;
        document.getElementById("r1b").style.backgroundColor="white";
        document.getElementById("gotorq1button").style.backgroundColor="white";
    }else{
        r1=2;
    document.getElementById("r1a").style.backgroundColor="white";
    document.getElementById("r1b").style.backgroundColor="honeydew";
    document.getElementById("r1c").style.backgroundColor="white";
    document.getElementById("r1d").style.backgroundColor="white";
    } 
}
function r1c(){
    if(document.getElementById("r1c").style.backgroundColor=="honeydew"){
        r1=0;
        document.getElementById("r1c").style.backgroundColor="white";
        document.getElementById("gotorq1button").style.backgroundColor="white";
    }else{
        r1=3;
    document.getElementById("r1a").style.backgroundColor="white";
    document.getElementById("r1b").style.backgroundColor="white";
    document.getElementById("r1c").style.backgroundColor="honeydew";
    document.getElementById("r1d").style.backgroundColor="white";
    }
}
function r1d(){
    if(document.getElementById("r1d").style.backgroundColor=="honeydew"){
        r1=0;
        document.getElementById("r1d").style.backgroundColor="white";
        document.getElementById("gotorq1button").style.backgroundColor="white";
    }else{
        r1=4;
    document.getElementById("r1a").style.backgroundColor="white";
    document.getElementById("r1b").style.backgroundColor="white";
    document.getElementById("r1c").style.backgroundColor="white";
    document.getElementById("r1d").style.backgroundColor="honeydew";
    }
}
function submitr1(){
    if(r1==1 || r1==2 || r1==3 || r1==4){
        document.getElementById("gotorq1button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotorq1button").style.backgroundColor="white";
    }

    if(r1==0){
        document.getElementById("r1marked").innerHTML="-";
        document.getElementById("r1obmark").innerHTML="0";
        document.getElementById("r1marked").style.color="peru";
        document.getElementById("r1obmark").style.color="peru";
        r1score=0;
    }else if(r1==1){
        document.getElementById("r1marked").innerHTML="A";
        document.getElementById("r1obmark").innerHTML="-1";
        document.getElementById("r1marked").style.color="red";
        document.getElementById("r1obmark").style.color="red";
        r1score=-1;
    }else if(r1==2){
        document.getElementById("r1marked").innerHTML="B";
        document.getElementById("r1obmark").innerHTML="-1";
        document.getElementById("r1marked").style.color="red";
        document.getElementById("r1obmark").style.color="red";
        r1score=-1;
    }else if(r1==3){
        document.getElementById("r1marked").innerHTML="C";
        document.getElementById("r1obmark").innerHTML="+4";
        document.getElementById("r1marked").style.color="green";
        document.getElementById("r1obmark").style.color="green";
        r1score=4;
    }else if(r1==4){
        document.getElementById("r1marked").innerHTML="D";
        document.getElementById("r1obmark").innerHTML="-1";
        document.getElementById("r1marked").style.color="red";
        document.getElementById("r1obmark").style.color="red";
        r1score=-1;
    }
    
}

//REASONING QUESTION 2
var r2=0;
function r2a(){
    if(document.getElementById("r2a").style.backgroundColor=="honeydew"){
        r2=0;
        document.getElementById("r2a").style.backgroundColor="white";
        document.getElementById("gotorq2button").style.backgroundColor="white";
    }else{
        r2=1;
    document.getElementById("r2a").style.backgroundColor="honeydew";
    document.getElementById("r2b").style.backgroundColor="white";
    document.getElementById("r2c").style.backgroundColor="white";
    document.getElementById("r2d").style.backgroundColor="white";
    } 
}
function r2b(){
    if(document.getElementById("r2b").style.backgroundColor=="honeydew"){
        r2=0;
        document.getElementById("r2b").style.backgroundColor="white";
        document.getElementById("gotorq2button").style.backgroundColor="white";
    }else{
        r2=2;
    document.getElementById("r2a").style.backgroundColor="white";
    document.getElementById("r2b").style.backgroundColor="honeydew";
    document.getElementById("r2c").style.backgroundColor="white";
    document.getElementById("r2d").style.backgroundColor="white";
    } 
}
function r2c(){
    if(document.getElementById("r2c").style.backgroundColor=="honeydew"){
        r2=0;
        document.getElementById("r2c").style.backgroundColor="white";
        document.getElementById("gotorq2button").style.backgroundColor="white";
    }else{
        r2=3;
    document.getElementById("r2a").style.backgroundColor="white";
    document.getElementById("r2b").style.backgroundColor="white";
    document.getElementById("r2c").style.backgroundColor="honeydew";
    document.getElementById("r2d").style.backgroundColor="white";
    }
}
function r2d(){
    if(document.getElementById("r2d").style.backgroundColor=="honeydew"){
        r2=0;
        document.getElementById("r2d").style.backgroundColor="white";
        document.getElementById("gotorq2button").style.backgroundColor="white";
    }else{
        r2=4;
    document.getElementById("r2a").style.backgroundColor="white";
    document.getElementById("r2b").style.backgroundColor="white";
    document.getElementById("r2c").style.backgroundColor="white";
    document.getElementById("r2d").style.backgroundColor="honeydew";
    }
}
function submitr2(){
    if(r2==1 || r2==2 || r2==3 || r2==4){
        document.getElementById("gotorq2button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotorq2button").style.backgroundColor="white";
    }

    if(r2==0){
        document.getElementById("r2marked").innerHTML="-";
        document.getElementById("r2obmark").innerHTML="0";
        document.getElementById("r2marked").style.color="peru";
        document.getElementById("r2obmark").style.color="peru";
        r2score=0;
    }else if(r2==1){
        document.getElementById("r2marked").innerHTML="A";
        document.getElementById("r2obmark").innerHTML="-1";
        document.getElementById("r2marked").style.color="red";
        document.getElementById("r2obmark").style.color="red";
        r2score=-1;
    }else if(r2==2){
        document.getElementById("r2marked").innerHTML="B";
        document.getElementById("r2obmark").innerHTML="+4";
        document.getElementById("r2marked").style.color="green";
        document.getElementById("r2obmark").style.color="green";
        r2score=4;
    }else if(r2==3){
        document.getElementById("r2marked").innerHTML="C";
        document.getElementById("r2obmark").innerHTML="-1";
        document.getElementById("r2marked").style.color="red";
        document.getElementById("r2obmark").style.color="red";
        r2score=-1;
    }else if(r2==4){
        document.getElementById("r2marked").innerHTML="D";
        document.getElementById("r2obmark").innerHTML="-1";
        document.getElementById("r2marked").style.color="red";
        document.getElementById("r2obmark").style.color="red";
        r2score=-1;
    }
}

//REASONING QUESTION 3
var r3=0;
function r3a(){
    if(document.getElementById("r3a").style.backgroundColor=="honeydew"){
        r3=0;
        document.getElementById("r3a").style.backgroundColor="white";
        document.getElementById("gotorq3button").style.backgroundColor="white";
    }else{
        r3=1;
    document.getElementById("r3a").style.backgroundColor="honeydew";
    document.getElementById("r3b").style.backgroundColor="white";
    document.getElementById("r3c").style.backgroundColor="white";
    document.getElementById("r3d").style.backgroundColor="white";
    } 
}
function r3b(){
    if(document.getElementById("r3b").style.backgroundColor=="honeydew"){
        r3=0;
        document.getElementById("r3b").style.backgroundColor="white";
        document.getElementById("gotorq3button").style.backgroundColor="white";
    }else{
        r3=2;
    document.getElementById("r3a").style.backgroundColor="white";
    document.getElementById("r3b").style.backgroundColor="honeydew";
    document.getElementById("r3c").style.backgroundColor="white";
    document.getElementById("r3d").style.backgroundColor="white";
    } 
}
function r3c(){
    if(document.getElementById("r3c").style.backgroundColor=="honeydew"){
        r3=0;
        document.getElementById("r3c").style.backgroundColor="white";
        document.getElementById("gotorq3button").style.backgroundColor="white";
    }else{
        r3=3;
    document.getElementById("r3a").style.backgroundColor="white";
    document.getElementById("r3b").style.backgroundColor="white";
    document.getElementById("r3c").style.backgroundColor="honeydew";
    document.getElementById("r3d").style.backgroundColor="white";
    }
}
function r3d(){
    if(document.getElementById("r3d").style.backgroundColor=="honeydew"){
        r3=0;
        document.getElementById("r3d").style.backgroundColor="white";
        document.getElementById("gotorq3button").style.backgroundColor="white";
    }else{
        r3=4;
    document.getElementById("r3a").style.backgroundColor="white";
    document.getElementById("r3b").style.backgroundColor="white";
    document.getElementById("r3c").style.backgroundColor="white";
    document.getElementById("r3d").style.backgroundColor="honeydew";
    }
}
function submitr3(){
    if(r3==1 || r3==2 || r3==3 || r3==4){
        document.getElementById("gotorq3button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotorq3button").style.backgroundColor="white";
    }

    if(r3==0){
        document.getElementById("r3marked").innerHTML="-";
        document.getElementById("r3obmark").innerHTML="0";
        document.getElementById("r3marked").style.color="peru";
        document.getElementById("r3obmark").style.color="peru";
        r3score=0;
    }else if(r3==1){
        document.getElementById("r3marked").innerHTML="A";
        document.getElementById("r3obmark").innerHTML="-1";
        document.getElementById("r3marked").style.color="red";
        document.getElementById("r3obmark").style.color="red";
        r3score=-1;
    }else if(r3==2){
        document.getElementById("r3marked").innerHTML="B";
        document.getElementById("r3obmark").innerHTML="-1";
        document.getElementById("r3marked").style.color="red";
        document.getElementById("r3obmark").style.color="red";
        r3score=-1;
    }else if(r3==3){
        document.getElementById("r3marked").innerHTML="C";
        document.getElementById("r3obmark").innerHTML="+4";
        document.getElementById("r3marked").style.color="green";
        document.getElementById("r3obmark").style.color="green";
        r3score=4;
    }else if(r3==4){
        document.getElementById("r3marked").innerHTML="D";
        document.getElementById("r3obmark").innerHTML="-1";
        document.getElementById("r3marked").style.color="red";
        document.getElementById("r3obmark").style.color="red";
        r3score=-1;
    }
    
}

//REASONING QUESTION 4
var r4=0;
function r4a(){
    if(document.getElementById("r4a").style.backgroundColor=="honeydew"){
        r4=0;
        document.getElementById("r4a").style.backgroundColor="white";
        document.getElementById("gotorq4button").style.backgroundColor="white";
    }else{
        r4=1;
    document.getElementById("r4a").style.backgroundColor="honeydew";
    document.getElementById("r4b").style.backgroundColor="white";
    document.getElementById("r4c").style.backgroundColor="white";
    document.getElementById("r4d").style.backgroundColor="white";
    } 
}
function r4b(){
    if(document.getElementById("r4b").style.backgroundColor=="honeydew"){
        r4=0;
        document.getElementById("r4b").style.backgroundColor="white";
        document.getElementById("gotorq4button").style.backgroundColor="white";
    }else{
        r4=2;
    document.getElementById("r4a").style.backgroundColor="white";
    document.getElementById("r4b").style.backgroundColor="honeydew";
    document.getElementById("r4c").style.backgroundColor="white";
    document.getElementById("r4d").style.backgroundColor="white";
    } 
}
function r4c(){
    if(document.getElementById("r4c").style.backgroundColor=="honeydew"){
        r4=0;
        document.getElementById("r4c").style.backgroundColor="white";
        document.getElementById("gotorq4button").style.backgroundColor="white";
    }else{
        r4=3;
    document.getElementById("r4a").style.backgroundColor="white";
    document.getElementById("r4b").style.backgroundColor="white";
    document.getElementById("r4c").style.backgroundColor="honeydew";
    document.getElementById("r4d").style.backgroundColor="white";
    }
}
function r4d(){
    if(document.getElementById("r4d").style.backgroundColor=="honeydew"){
        r4=0;
        document.getElementById("r4d").style.backgroundColor="white";
        document.getElementById("gotorq4button").style.backgroundColor="white";
    }else{
        r4=4;
    document.getElementById("r4a").style.backgroundColor="white";
    document.getElementById("r4b").style.backgroundColor="white";
    document.getElementById("r4c").style.backgroundColor="white";
    document.getElementById("r4d").style.backgroundColor="honeydew";
    }
}
function submitr4(){
    if(r4==1 || r4==2 || r4==3 || r4==4){
        document.getElementById("gotorq4button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotorq4button").style.backgroundColor="white";
    }

    if(r4==0){
        document.getElementById("r4marked").innerHTML="-";
        document.getElementById("r4obmark").innerHTML="0";
        document.getElementById("r4marked").style.color="peru";
        document.getElementById("r4obmark").style.color="peru";
        r4score=0;
    }else if(r4==1){
        document.getElementById("r4marked").innerHTML="A";
        document.getElementById("r4obmark").innerHTML="+4";
        document.getElementById("r4marked").style.color="red";
        document.getElementById("r4obmark").style.color="red";
        r4score=4;
    }else if(r4==2){
        document.getElementById("r4marked").innerHTML="B";
        document.getElementById("r4obmark").innerHTML="-1";
        document.getElementById("r4marked").style.color="red";
        document.getElementById("r4obmark").style.color="red";
        r4score=-1;
    }else if(r4==3){
        document.getElementById("r4marked").innerHTML="C";
        document.getElementById("r4obmark").innerHTML="-1";
        document.getElementById("r4marked").style.color="red";
        document.getElementById("r4obmark").style.color="red";
        r4score=-1;
    }else if(r4==4){
        document.getElementById("r4marked").innerHTML="D";
        document.getElementById("r4obmark").innerHTML="-1";
        document.getElementById("r4marked").style.color="red";
        document.getElementById("r4obmark").style.color="red";
        r4score=-1;
    }
    
}

//REASONING QUESTION 5
var r5=0;
function r5a(){
    if(document.getElementById("r5a").style.backgroundColor=="honeydew"){
        r5=0;
        document.getElementById("r5a").style.backgroundColor="white";
        document.getElementById("gotorq5button").style.backgroundColor="white";
    }else{
        r5=1;
    document.getElementById("r5a").style.backgroundColor="honeydew";
    document.getElementById("r5b").style.backgroundColor="white";
    document.getElementById("r5c").style.backgroundColor="white";
    document.getElementById("r5d").style.backgroundColor="white";
    } 
}
function r5b(){
    if(document.getElementById("r5b").style.backgroundColor=="honeydew"){
        r5=0;
        document.getElementById("r5b").style.backgroundColor="white";
        document.getElementById("gotorq5button").style.backgroundColor="white";
    }else{
        r5=2;
    document.getElementById("r5a").style.backgroundColor="white";
    document.getElementById("r5b").style.backgroundColor="honeydew";
    document.getElementById("r5c").style.backgroundColor="white";
    document.getElementById("r5d").style.backgroundColor="white";
    } 
}
function r5c(){
    if(document.getElementById("r5c").style.backgroundColor=="honeydew"){
        r5=0;
        document.getElementById("r5c").style.backgroundColor="white";
        document.getElementById("gotorq5button").style.backgroundColor="white";
    }else{
        r5=3;
    document.getElementById("r5a").style.backgroundColor="white";
    document.getElementById("r5b").style.backgroundColor="white";
    document.getElementById("r5c").style.backgroundColor="honeydew";
    document.getElementById("r5d").style.backgroundColor="white";
    }
}
function r5d(){
    if(document.getElementById("r5d").style.backgroundColor=="honeydew"){
        r5=0;
        document.getElementById("r5d").style.backgroundColor="white";
        document.getElementById("gotorq5button").style.backgroundColor="white";
    }else{
        r5=4;
    document.getElementById("r5a").style.backgroundColor="white";
    document.getElementById("r5b").style.backgroundColor="white";
    document.getElementById("r5c").style.backgroundColor="white";
    document.getElementById("r5d").style.backgroundColor="honeydew";
    }
}
function submitr5(){
    if(r5==1 || r5==2 || r5==3 || r5==4){
        document.getElementById("gotorq5button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotorq5button").style.backgroundColor="white";
    }

    if(r5==0){
        document.getElementById("r5marked").innerHTML="-";
        document.getElementById("r5obmark").innerHTML="0";
        document.getElementById("r5marked").style.color="peru";
        document.getElementById("r5obmark").style.color="peru";
        r5score=0;
    }else if(r5==1){
        document.getElementById("r5marked").innerHTML="A";
        document.getElementById("r5obmark").innerHTML="-1";
        document.getElementById("r5marked").style.color="red";
        document.getElementById("r5obmark").style.color="red";
        r5score=-1;
    }else if(r5==2){
        document.getElementById("r5marked").innerHTML="B";
        document.getElementById("r5obmark").innerHTML="+4";
        document.getElementById("r5marked").style.color="green";
        document.getElementById("r5obmark").style.color="green";
        r5score=4;
    }else if(r5==3){
        document.getElementById("r5marked").innerHTML="C";
        document.getElementById("r5obmark").innerHTML="-1";
        document.getElementById("r5marked").style.color="red";
        document.getElementById("r5obmark").style.color="red";
        r5score=-1;
    }else if(r5==4){
        document.getElementById("r5marked").innerHTML="D";
        document.getElementById("r5obmark").innerHTML="-1";
        document.getElementById("r5marked").style.color="red";
        document.getElementById("r5obmark").style.color="red";
        r5score=-1;
    }
}

//APPTITUDE QUESTION 1
var apptitudescore=0;
var a1score=0;
var a2score=0;
var a3score=0;
var a4score=0;
var a5score=0;
var a1=0;
function a1a(){
    if(document.getElementById("a1a").style.backgroundColor=="honeydew"){
        a1=0;
        document.getElementById("a1a").style.backgroundColor="white";
        document.getElementById("gotoaq1button").style.backgroundColor="white";
    }else{
        a1=1;
    document.getElementById("a1a").style.backgroundColor="honeydew";
    document.getElementById("a1b").style.backgroundColor="white";
    document.getElementById("a1c").style.backgroundColor="white";
    document.getElementById("a1d").style.backgroundColor="white";
    } 
}
function a1b(){
    if(document.getElementById("a1b").style.backgroundColor=="honeydew"){
        a1=0;
        document.getElementById("a1b").style.backgroundColor="white";
        document.getElementById("gotoaq1button").style.backgroundColor="white";
    }else{
        a1=2;
    document.getElementById("a1a").style.backgroundColor="white";
    document.getElementById("a1b").style.backgroundColor="honeydew";
    document.getElementById("a1c").style.backgroundColor="white";
    document.getElementById("a1d").style.backgroundColor="white";
    } 
}
function a1c(){
    if(document.getElementById("a1c").style.backgroundColor=="honeydew"){
        a1=0;
        document.getElementById("a1c").style.backgroundColor="white";
        document.getElementById("gotoaq1button").style.backgroundColor="white";
    }else{
        a1=3;
    document.getElementById("a1a").style.backgroundColor="white";
    document.getElementById("a1b").style.backgroundColor="white";
    document.getElementById("a1c").style.backgroundColor="honeydew";
    document.getElementById("a1d").style.backgroundColor="white";
    }
}
function a1d(){
    if(document.getElementById("a1d").style.backgroundColor=="honeydew"){
        a1=0;
        document.getElementById("a1d").style.backgroundColor="white";
        document.getElementById("gotoaq1button").style.backgroundColor="white";
    }else{
        a1=4;
    document.getElementById("a1a").style.backgroundColor="white";
    document.getElementById("a1b").style.backgroundColor="white";
    document.getElementById("a1c").style.backgroundColor="white";
    document.getElementById("a1d").style.backgroundColor="honeydew";
    }
}
function submita1(){
    if(a1==1 || a1==2 || a1==3 || a1==4){
        document.getElementById("gotoaq1button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoaq1button").style.backgroundColor="white";
    }

    if(a1==0){
        document.getElementById("a1marked").innerHTML="-";
        document.getElementById("a1obmark").innerHTML="0";
        document.getElementById("a1marked").style.color="peru";
        document.getElementById("a1obmark").style.color="peru";
        a1score=0;
    }else if(a1==1){
        document.getElementById("a1marked").innerHTML="A";
        document.getElementById("a1obmark").innerHTML="-1";
        document.getElementById("a1marked").style.color="red";
        document.getElementById("a1obmark").style.color="red";
        a1score=-1;
    }else if(a1==2){
        document.getElementById("a1marked").innerHTML="B";
        document.getElementById("a1obmark").innerHTML="-1";
        document.getElementById("a1marked").style.color="red";
        document.getElementById("a1obmark").style.color="red";
        a1score=-1;
    }else if(a1==3){
        document.getElementById("a1marked").innerHTML="C";
        document.getElementById("a1obmark").innerHTML="-1";
        document.getElementById("a1marked").style.color="red";
        document.getElementById("a1obmark").style.color="red";
        a1score=-1;
    }else if(a1==4){
        document.getElementById("a1marked").innerHTML="D";
        document.getElementById("a1obmark").innerHTML="+4";
        document.getElementById("a1marked").style.color="green";
        document.getElementById("a1obmark").style.color="green";
        a1score=4;
    }
}

//APPTITUDE QUESTION 2
var a2=0;
function a2a(){
    if(document.getElementById("a2a").style.backgroundColor=="honeydew"){
        a2=0;
        document.getElementById("a2a").style.backgroundColor="white";
        document.getElementById("gotoaq2button").style.backgroundColor="white";
    }else{
        a2=1;
    document.getElementById("a2a").style.backgroundColor="honeydew";
    document.getElementById("a2b").style.backgroundColor="white";
    document.getElementById("a2c").style.backgroundColor="white";
    document.getElementById("a2d").style.backgroundColor="white";
    } 
}
function a2b(){
    if(document.getElementById("a2b").style.backgroundColor=="honeydew"){
        a2=0;
        document.getElementById("a2b").style.backgroundColor="white";
        document.getElementById("gotoaq2button").style.backgroundColor="white";
    }else{
        a2=2;
    document.getElementById("a2a").style.backgroundColor="white";
    document.getElementById("a2b").style.backgroundColor="honeydew";
    document.getElementById("a2c").style.backgroundColor="white";
    document.getElementById("a2d").style.backgroundColor="white";
    } 
}
function a2c(){
    if(document.getElementById("a2c").style.backgroundColor=="honeydew"){
        a2=0;
        document.getElementById("a2c").style.backgroundColor="white";
        document.getElementById("gotoaq2button").style.backgroundColor="white";
    }else{
        a2=3;
    document.getElementById("a2a").style.backgroundColor="white";
    document.getElementById("a2b").style.backgroundColor="white";
    document.getElementById("a2c").style.backgroundColor="honeydew";
    document.getElementById("a2d").style.backgroundColor="white";
    }
}
function a2d(){
    if(document.getElementById("a2d").style.backgroundColor=="honeydew"){
        a2=0;
        document.getElementById("a2d").style.backgroundColor="white";
        document.getElementById("gotoaq2button").style.backgroundColor="white";
    }else{
        a2=4;
    document.getElementById("a2a").style.backgroundColor="white";
    document.getElementById("a2b").style.backgroundColor="white";
    document.getElementById("a2c").style.backgroundColor="white";
    document.getElementById("a2d").style.backgroundColor="honeydew";
    }
}
function submita2(){
    if(a2==1 || a2==2 || a2==3 || a2==4){
        document.getElementById("gotoaq2button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoaq2button").style.backgroundColor="white";
    }

    if(a2==0){
        document.getElementById("a2marked").innerHTML="-";
        document.getElementById("a2obmark").innerHTML="0";
        document.getElementById("a2marked").style.color="peru";
        document.getElementById("a2obmark").style.color="peru";
        a2score=0;
    }else if(a2==1){
        document.getElementById("a2marked").innerHTML="A";
        document.getElementById("a2obmark").innerHTML="-1";
        document.getElementById("a2marked").style.color="red";
        document.getElementById("a2obmark").style.color="red";
        a2score=-1;
    }else if(a2==2){
        document.getElementById("a2marked").innerHTML="B";
        document.getElementById("a2obmark").innerHTML="-1";
        document.getElementById("a2marked").style.color="red";
        document.getElementById("a2obmark").style.color="red";
        a2score=-1;
    }else if(a2==3){
        document.getElementById("a2marked").innerHTML="C";
        document.getElementById("a2obmark").innerHTML="+4";
        document.getElementById("a2marked").style.color="green";
        document.getElementById("a2obmark").style.color="green";
        a2score=4;
    }else if(a2==4){
        document.getElementById("a2marked").innerHTML="D";
        document.getElementById("a2obmark").innerHTML="-1";
        document.getElementById("a2marked").style.color="red";
        document.getElementById("a2obmark").style.color="red";
        a2score=-1;
    }
}

//APPTITUDE QUESTION 3
var a3=0;
function a3a(){
    if(document.getElementById("a3a").style.backgroundColor=="honeydew"){
        a3=0;
        document.getElementById("a3a").style.backgroundColor="white";
        document.getElementById("gotoaq3button").style.backgroundColor="white";
    }else{
        a3=1;
    document.getElementById("a3a").style.backgroundColor="honeydew";
    document.getElementById("a3b").style.backgroundColor="white";
    document.getElementById("a3c").style.backgroundColor="white";
    document.getElementById("a3d").style.backgroundColor="white";
    } 
}
function a3b(){
    if(document.getElementById("a3b").style.backgroundColor=="honeydew"){
        a3=0;
        document.getElementById("a3b").style.backgroundColor="white";
        document.getElementById("gotoaq3button").style.backgroundColor="white";
    }else{
        a3=2;
    document.getElementById("a3a").style.backgroundColor="white";
    document.getElementById("a3b").style.backgroundColor="honeydew";
    document.getElementById("a3c").style.backgroundColor="white";
    document.getElementById("a3d").style.backgroundColor="white";
    } 
}
function a3c(){
    if(document.getElementById("a3c").style.backgroundColor=="honeydew"){
        a3=0;
        document.getElementById("a3c").style.backgroundColor="white";
        document.getElementById("gotoaq3button").style.backgroundColor="white";
    }else{
        a3=3;
    document.getElementById("a3a").style.backgroundColor="white";
    document.getElementById("a3b").style.backgroundColor="white";
    document.getElementById("a3c").style.backgroundColor="honeydew";
    document.getElementById("a3d").style.backgroundColor="white";
    }
}
function a3d(){
    if(document.getElementById("a3d").style.backgroundColor=="honeydew"){
        a3=0;
        document.getElementById("a3d").style.backgroundColor="white";
        document.getElementById("gotoaq3button").style.backgroundColor="white";
    }else{
        a3=4;
    document.getElementById("a3a").style.backgroundColor="white";
    document.getElementById("a3b").style.backgroundColor="white";
    document.getElementById("a3c").style.backgroundColor="white";
    document.getElementById("a3d").style.backgroundColor="honeydew";
    }
}
function submita3(){
    if(a3==1 || a3==2 || a3==3 || a3==4){
        document.getElementById("gotoaq3button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoaq3button").style.backgroundColor="white";
    }
    
    if(a3==0){
        document.getElementById("a3marked").innerHTML="-";
        document.getElementById("a3obmark").innerHTML="0";
        document.getElementById("a3marked").style.color="peru";
        document.getElementById("a3obmark").style.color="peru";
        a3score=0;
    }else if(a3==1){
        document.getElementById("a3marked").innerHTML="A";
        document.getElementById("a3obmark").innerHTML="-1";
        document.getElementById("a3marked").style.color="red";
        document.getElementById("a3obmark").style.color="red";
        a3score=-1;
    }else if(a3==2){
        document.getElementById("a3marked").innerHTML="B";
        document.getElementById("a3obmark").innerHTML="-1";
        document.getElementById("a3marked").style.color="red";
        document.getElementById("a3obmark").style.color="red";
        a3score=-1;
    }else if(a3==3){
        document.getElementById("a3marked").innerHTML="C";
        document.getElementById("a3obmark").innerHTML="-1";
        document.getElementById("a3marked").style.color="red";
        document.getElementById("a3obmark").style.color="red";
        a3score=-1;
    }else if(a3==4){
        document.getElementById("a3marked").innerHTML="D";
        document.getElementById("a3obmark").innerHTML="+4";
        document.getElementById("a3marked").style.color="green";
        document.getElementById("a3obmark").style.color="green";
        a3score=4;
    }
}

//APPTITUDE QUESTION 4
var a4=0;
function a4a(){
    if(document.getElementById("a4a").style.backgroundColor=="honeydew"){
        a4=0;
        document.getElementById("a4a").style.backgroundColor="white";
        document.getElementById("gotoaq4button").style.backgroundColor="white";
    }else{
        a4=1;
    document.getElementById("a4a").style.backgroundColor="honeydew";
    document.getElementById("a4b").style.backgroundColor="white";
    document.getElementById("a4c").style.backgroundColor="white";
    document.getElementById("a4d").style.backgroundColor="white";
    } 
}
function a4b(){
    if(document.getElementById("a4b").style.backgroundColor=="honeydew"){
        a4=0;
        document.getElementById("a4b").style.backgroundColor="white";
        document.getElementById("gotoaq4button").style.backgroundColor="white";
    }else{
        a4=2;
    document.getElementById("a4a").style.backgroundColor="white";
    document.getElementById("a4b").style.backgroundColor="honeydew";
    document.getElementById("a4c").style.backgroundColor="white";
    document.getElementById("a4d").style.backgroundColor="white";
    } 
}
function a4c(){
    if(document.getElementById("a4c").style.backgroundColor=="honeydew"){
        a4=0;
        document.getElementById("a4c").style.backgroundColor="white";
        document.getElementById("gotoaq4button").style.backgroundColor="white";
    }else{
        a4=3;
    document.getElementById("a4a").style.backgroundColor="white";
    document.getElementById("a4b").style.backgroundColor="white";
    document.getElementById("a4c").style.backgroundColor="honeydew";
    document.getElementById("a4d").style.backgroundColor="white";
    }
}
function a4d(){
    if(document.getElementById("a4d").style.backgroundColor=="honeydew"){
        a4=0;
        document.getElementById("a4d").style.backgroundColor="white";
        document.getElementById("gotoaq4button").style.backgroundColor="white";
    }else{
        a4=4;
    document.getElementById("a4a").style.backgroundColor="white";
    document.getElementById("a4b").style.backgroundColor="white";
    document.getElementById("a4c").style.backgroundColor="white";
    document.getElementById("a4d").style.backgroundColor="honeydew";
    }
}
function submita4(){
    if(a4==1 || a4==2 || a4==3 || a4==4){
        document.getElementById("gotoaq4button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoaq4button").style.backgroundColor="white";
    }

    if(a4==0){
        document.getElementById("a4marked").innerHTML="-";
        document.getElementById("a4obmark").innerHTML="0";
        document.getElementById("a4marked").style.color="peru";
        document.getElementById("a4obmark").style.color="peru";
        a4score=0;
    }else if(a4==1){
        document.getElementById("a4marked").innerHTML="A";
        document.getElementById("a4obmark").innerHTML="-1";
        document.getElementById("a4marked").style.color="red";
        document.getElementById("a4obmark").style.color="red";
        a4score=-1;
    }else if(a4==2){
        document.getElementById("a4marked").innerHTML="B";
        document.getElementById("a4obmark").innerHTML="-1";
        document.getElementById("a4marked").style.color="red";
        document.getElementById("a4obmark").style.color="red";
        a4score=-1;
    }else if(a4==3){
        document.getElementById("a4marked").innerHTML="C";
        document.getElementById("a4obmark").innerHTML="-1";
        document.getElementById("a4marked").style.color="red";
        document.getElementById("a4obmark").style.color="red";
        a4score=-1;
    }else if(a4==4){
        document.getElementById("a4marked").innerHTML="D";
        document.getElementById("a4obmark").innerHTML="+4";
        document.getElementById("a4marked").style.color="green";
        document.getElementById("a4obmark").style.color="green";
        a4score=4;
    }
}

//APPTITUDE QUESTION 5
var a5=0;
function a5a(){
    if(document.getElementById("a5a").style.backgroundColor=="honeydew"){
        a5=0;
        document.getElementById("a5a").style.backgroundColor="white";
        document.getElementById("gotoaq5button").style.backgroundColor="white";
    }else{
        a5=1;
    document.getElementById("a5a").style.backgroundColor="honeydew";
    document.getElementById("a5b").style.backgroundColor="white";
    document.getElementById("a5c").style.backgroundColor="white";
    document.getElementById("a5d").style.backgroundColor="white";
    } 
}
function a5b(){
    if(document.getElementById("a5b").style.backgroundColor=="honeydew"){
        a5=0;
        document.getElementById("a5b").style.backgroundColor="white";
        document.getElementById("gotoaq5button").style.backgroundColor="white";
    }else{
        a5=2;
    document.getElementById("a5a").style.backgroundColor="white";
    document.getElementById("a5b").style.backgroundColor="honeydew";
    document.getElementById("a5c").style.backgroundColor="white";
    document.getElementById("a5d").style.backgroundColor="white";
    } 
}
function a5c(){
    if(document.getElementById("a5c").style.backgroundColor=="honeydew"){
        a5=0;
        document.getElementById("a5c").style.backgroundColor="white";
        document.getElementById("gotoaq5button").style.backgroundColor="white";
    }else{
        a5=3;
    document.getElementById("a5a").style.backgroundColor="white";
    document.getElementById("a5b").style.backgroundColor="white";
    document.getElementById("a5c").style.backgroundColor="honeydew";
    document.getElementById("a5d").style.backgroundColor="white";
    }
}
function a5d(){
    if(document.getElementById("a5d").style.backgroundColor=="honeydew"){
        a5=0;
        document.getElementById("a5d").style.backgroundColor="white";
        document.getElementById("gotoaq5button").style.backgroundColor="white";
    }else{
        a5=4;
    document.getElementById("a5a").style.backgroundColor="white";
    document.getElementById("a5b").style.backgroundColor="white";
    document.getElementById("a5c").style.backgroundColor="white";
    document.getElementById("a5d").style.backgroundColor="honeydew";
    }
}
function submita5(){
    if(a5==1 || a5==2 || a5==3 || a5==4){
        document.getElementById("gotoaq5button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoaq5button").style.backgroundColor="white";
    }

    if(a5==0){
        document.getElementById("a5marked").innerHTML="-";
        document.getElementById("a5obmark").innerHTML="0";
        document.getElementById("a5marked").style.color="peru";
        document.getElementById("a5obmark").style.color="peru";
        a5score=0;
    }else if(a5==1){
        document.getElementById("a5marked").innerHTML="A";
        document.getElementById("a5obmark").innerHTML="+4";
        document.getElementById("a5marked").style.color="green";
        document.getElementById("a5obmark").style.color="green";
        a5score=4;
    }else if(a5==2){
        document.getElementById("a5marked").innerHTML="B";
        document.getElementById("a5obmark").innerHTML="-1";
        document.getElementById("a5marked").style.color="red";
        document.getElementById("a5obmark").style.color="red";
        a5score=-1;
    }else if(a5==3){
        document.getElementById("a5marked").innerHTML="C";
        document.getElementById("a5obmark").innerHTML="-1";
        document.getElementById("a5marked").style.color="red";
        document.getElementById("a5obmark").style.color="red";
        a5score=-1;
    }else if(a5==4){
        document.getElementById("a5marked").innerHTML="D";
        document.getElementById("a5obmark").innerHTML="-1";
        document.getElementById("a5marked").style.color="red";
        document.getElementById("a5obmark").style.color="red";
        a5score=-1;
    }
}

//ENGLISH QUESTION 1
var englishscore=0;
var e1score=0;
var e2score=0;
var e3score=0;
var e4score=0;
var e5score=0;
var e1=0;
function e1a(){
    if(document.getElementById("e1a").style.backgroundColor=="honeydew"){
        e1=0;
        document.getElementById("e1a").style.backgroundColor="white";
        document.getElementById("gotoeq1button").style.backgroundColor="white";
    }else{
        e1=1;
    document.getElementById("e1a").style.backgroundColor="honeydew";
    document.getElementById("e1b").style.backgroundColor="white";
    document.getElementById("e1c").style.backgroundColor="white";
    document.getElementById("e1d").style.backgroundColor="white";
    } 
}
function e1b(){
    if(document.getElementById("e1b").style.backgroundColor=="honeydew"){
        e1=0;
        document.getElementById("e1b").style.backgroundColor="white";
        document.getElementById("gotoeq1button").style.backgroundColor="white";
    }else{
        e1=2;
    document.getElementById("e1a").style.backgroundColor="white";
    document.getElementById("e1b").style.backgroundColor="honeydew";
    document.getElementById("e1c").style.backgroundColor="white";
    document.getElementById("e1d").style.backgroundColor="white";
    } 
}
function e1c(){
    if(document.getElementById("e1c").style.backgroundColor=="honeydew"){
        e1=0;
        document.getElementById("e1c").style.backgroundColor="white";
        document.getElementById("gotoeq1button").style.backgroundColor="white";
    }else{
        e1=3;
    document.getElementById("e1a").style.backgroundColor="white";
    document.getElementById("e1b").style.backgroundColor="white";
    document.getElementById("e1c").style.backgroundColor="honeydew";
    document.getElementById("e1d").style.backgroundColor="white";
    }
}
function e1d(){
    if(document.getElementById("e1d").style.backgroundColor=="honeydew"){
        e1=0;
        document.getElementById("e1d").style.backgroundColor="white";
        document.getElementById("gotoeq1button").style.backgroundColor="white";
    }else{
        e1=4;
    document.getElementById("e1a").style.backgroundColor="white";
    document.getElementById("e1b").style.backgroundColor="white";
    document.getElementById("e1c").style.backgroundColor="white";
    document.getElementById("e1d").style.backgroundColor="honeydew";
    }
}
function submite1(){
    if(e1==1 || e1==2 || e1==3 || e1==4){
        document.getElementById("gotoeq1button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoeq1button").style.backgroundColor="white";
    }

    if(e1==0){
        document.getElementById("e1marked").innerHTML="-";
        document.getElementById("e1obmark").innerHTML="0";
        document.getElementById("e1marked").style.color="peru";
        document.getElementById("e1obmark").style.color="peru";
        e1score=0;
    }else if(e1==1){
        document.getElementById("e1marked").innerHTML="A";
        document.getElementById("e1obmark").innerHTML="-1";
        document.getElementById("e1marked").style.color="red";
        document.getElementById("e1obmark").style.color="red";
        e1score=-1;
    }else if(e1==2){
        document.getElementById("e1marked").innerHTML="B";
        document.getElementById("e1obmark").innerHTML="-1";
        document.getElementById("e1marked").style.color="red";
        document.getElementById("e1obmark").style.color="red";
        e1score=-1;
    }else if(e1==3){
        document.getElementById("e1marked").innerHTML="C";
        document.getElementById("e1obmark").innerHTML="+4";
        document.getElementById("e1marked").style.color="green";
        document.getElementById("e1obmark").style.color="green";
        e1score=4;
    }else if(e1==4){
        document.getElementById("e1marked").innerHTML="D";
        document.getElementById("e1obmark").innerHTML="-1";
        document.getElementById("e1marked").style.color="red";
        document.getElementById("e1obmark").style.color="red";
        e1score=-1;
    }
}

//ENGLISH QUESTION 2
var e2=0;
function e2a(){
    if(document.getElementById("e2a").style.backgroundColor=="honeydew"){
        e2=0;
        document.getElementById("e2a").style.backgroundColor="white";
        document.getElementById("gotoeq2button").style.backgroundColor="white";
    }else{
        e2=1;
    document.getElementById("e2a").style.backgroundColor="honeydew";
    document.getElementById("e2b").style.backgroundColor="white";
    document.getElementById("e2c").style.backgroundColor="white";
    document.getElementById("e2d").style.backgroundColor="white";
    } 
}
function e2b(){
    if(document.getElementById("e2b").style.backgroundColor=="honeydew"){
        e2=0;
        document.getElementById("e2b").style.backgroundColor="white";
        document.getElementById("gotoeq2button").style.backgroundColor="white";
    }else{
        e2=2;
    document.getElementById("e2a").style.backgroundColor="white";
    document.getElementById("e2b").style.backgroundColor="honeydew";
    document.getElementById("e2c").style.backgroundColor="white";
    document.getElementById("e2d").style.backgroundColor="white";
    } 
}
function e2c(){
    if(document.getElementById("e2c").style.backgroundColor=="honeydew"){
        e2=0;
        document.getElementById("e2c").style.backgroundColor="white";
        document.getElementById("gotoeq2button").style.backgroundColor="white";
    }else{
        e2=3;
    document.getElementById("e2a").style.backgroundColor="white";
    document.getElementById("e2b").style.backgroundColor="white";
    document.getElementById("e2c").style.backgroundColor="honeydew";
    document.getElementById("e2d").style.backgroundColor="white";
    }
}
function e2d(){
    if(document.getElementById("e2d").style.backgroundColor=="honeydew"){
        e2=0;
        document.getElementById("e2d").style.backgroundColor="white";
        document.getElementById("gotoeq2button").style.backgroundColor="white";
    }else{
        e2=4;
    document.getElementById("e2a").style.backgroundColor="white";
    document.getElementById("e2b").style.backgroundColor="white";
    document.getElementById("e2c").style.backgroundColor="white";
    document.getElementById("e2d").style.backgroundColor="honeydew";
    }
}
function submite2(){
    if(e2==1 || e2==2 || e2==3 || e2==4){
        document.getElementById("gotoeq2button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoeq2button").style.backgroundColor="white";
    }

    if(e2==0){
        document.getElementById("e2marked").innerHTML="-";
        document.getElementById("e2obmark").innerHTML="0";
        document.getElementById("e2marked").style.color="peru";
        document.getElementById("e2obmark").style.color="peru";
        e2score=0;
    }else if(e2==1){
        document.getElementById("e2marked").innerHTML="A";
        document.getElementById("e2obmark").innerHTML="+4";
        document.getElementById("e2marked").style.color="green";
        document.getElementById("e22obmark").style.color="green";
        e2score=4;
    }else if(e2==2){
        document.getElementById("e2marked").innerHTML="B";
        document.getElementById("e2obmark").innerHTML="-1";
        document.getElementById("e2marked").style.color="red";
        document.getElementById("e2obmark").style.color="red";
        e2score=-1;
    }else if(e2==3){
        document.getElementById("e2marked").innerHTML="C";
        document.getElementById("e2obmark").innerHTML="-1";
        document.getElementById("e2marked").style.color="red";
        document.getElementById("e2obmark").style.color="red";
        e2score=-1;
    }else if(e2==4){
        document.getElementById("e2marked").innerHTML="D";
        document.getElementById("e2obmark").innerHTML="-1";
        document.getElementById("e2marked").style.color="red";
        document.getElementById("e2obmark").style.color="red";
        e2score=-1;
    }
}

//ENGLISH QUESTION 3
var e3=0;
function e3a(){
    if(document.getElementById("e3a").style.backgroundColor=="honeydew"){
        e3=0;
        document.getElementById("e3a").style.backgroundColor="white";
        document.getElementById("gotoeq3button").style.backgroundColor="white";
    }else{
        e3=1;
    document.getElementById("e3a").style.backgroundColor="honeydew";
    document.getElementById("e3b").style.backgroundColor="white";
    document.getElementById("e3c").style.backgroundColor="white";
    document.getElementById("e3d").style.backgroundColor="white";
    } 
}
function e3b(){
    if(document.getElementById("e3b").style.backgroundColor=="honeydew"){
        e3=0;
        document.getElementById("e3b").style.backgroundColor="white";
        document.getElementById("gotoeq3button").style.backgroundColor="white";
    }else{
        e3=2;
    document.getElementById("e3a").style.backgroundColor="white";
    document.getElementById("e3b").style.backgroundColor="honeydew";
    document.getElementById("e3c").style.backgroundColor="white";
    document.getElementById("e3d").style.backgroundColor="white";
    } 
}
function e3c(){
    if(document.getElementById("e3c").style.backgroundColor=="honeydew"){
        e3=0;
        document.getElementById("e3c").style.backgroundColor="white";
        document.getElementById("gotoeq3button").style.backgroundColor="white";
    }else{
        e3=3;
    document.getElementById("e3a").style.backgroundColor="white";
    document.getElementById("e3b").style.backgroundColor="white";
    document.getElementById("e3c").style.backgroundColor="honeydew";
    document.getElementById("e3d").style.backgroundColor="white";
    }
}
function e3d(){
    if(document.getElementById("e3d").style.backgroundColor=="honeydew"){
        e3=0;
        document.getElementById("e3d").style.backgroundColor="white";
        document.getElementById("gotoeq3button").style.backgroundColor="white";
    }else{
        e3=4;
    document.getElementById("e3a").style.backgroundColor="white";
    document.getElementById("e3b").style.backgroundColor="white";
    document.getElementById("e3c").style.backgroundColor="white";
    document.getElementById("e3d").style.backgroundColor="honeydew";
    }
}
function submite3(){
    if(e3==1 || e3==2 || e3==3 || e3==4){
        document.getElementById("gotoeq3button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoeq3button").style.backgroundColor="white";
    }

    if(e3==0){
        document.getElementById("e3marked").innerHTML="-";
        document.getElementById("e3obmark").innerHTML="0";
        document.getElementById("e3marked").style.color="peru";
        document.getElementById("e3obmark").style.color="peru";
        e3score=0;
    }else if(e3==1){
        document.getElementById("e3marked").innerHTML="A";
        document.getElementById("e3obmark").innerHTML="-1";
        document.getElementById("e3marked").style.color="red";
        document.getElementById("e3obmark").style.color="red";
        e3score=-1;
    }else if(e3==2){
        document.getElementById("e3marked").innerHTML="B";
        document.getElementById("e3obmark").innerHTML="-1";
        document.getElementById("e3marked").style.color="red";
        document.getElementById("e3obmark").style.color="red";
        e3score=-1;
    }else if(e3==3){
        document.getElementById("e3marked").innerHTML="C";
        document.getElementById("e3obmark").innerHTML="+4";
        document.getElementById("e3marked").style.color="green";
        document.getElementById("e3obmark").style.color="green";
        e3score=4;
    }else if(e3==4){
        document.getElementById("e3marked").innerHTML="D";
        document.getElementById("e3obmark").innerHTML="-1";
        document.getElementById("e3marked").style.color="red";
        document.getElementById("e3obmark").style.color="red";
        e3score=-1;
    }
}

//ENGLISH QUESTION 4
var e4=0;
function e4a(){
    if(document.getElementById("e4a").style.backgroundColor=="honeydew"){
        e4=0;
        document.getElementById("e4a").style.backgroundColor="white";
        document.getElementById("gotoeq4button").style.backgroundColor="white";
    }else{
        e4=1;
    document.getElementById("e4a").style.backgroundColor="honeydew";
    document.getElementById("e4b").style.backgroundColor="white";
    document.getElementById("e4c").style.backgroundColor="white";
    document.getElementById("e4d").style.backgroundColor="white";
    } 
}
function e4b(){
    if(document.getElementById("e4b").style.backgroundColor=="honeydew"){
        e4=0;
        document.getElementById("e4b").style.backgroundColor="white";
        document.getElementById("gotoeq4button").style.backgroundColor="white";
    }else{
        e4=2;
    document.getElementById("e4a").style.backgroundColor="white";
    document.getElementById("e4b").style.backgroundColor="honeydew";
    document.getElementById("e4c").style.backgroundColor="white";
    document.getElementById("e4d").style.backgroundColor="white";
    } 
}
function e4c(){
    if(document.getElementById("e4c").style.backgroundColor=="honeydew"){
        e4=0;
        document.getElementById("e4c").style.backgroundColor="white";
        document.getElementById("gotoeq4button").style.backgroundColor="white";
    }else{
        e4=3;
    document.getElementById("e4a").style.backgroundColor="white";
    document.getElementById("e4b").style.backgroundColor="white";
    document.getElementById("e4c").style.backgroundColor="honeydew";
    document.getElementById("e4d").style.backgroundColor="white";
    }
}
function e4d(){
    if(document.getElementById("e4d").style.backgroundColor=="honeydew"){
        e4=0;
        document.getElementById("e4d").style.backgroundColor="white";
        document.getElementById("gotoeq4button").style.backgroundColor="white";
    }else{
        e4=4;
    document.getElementById("e4a").style.backgroundColor="white";
    document.getElementById("e4b").style.backgroundColor="white";
    document.getElementById("e4c").style.backgroundColor="white";
    document.getElementById("e4d").style.backgroundColor="honeydew";
    }
}
function submite4(){
    if(e4==1 || e4==2 || e4==3 || e4==4){
        document.getElementById("gotoeq4button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoeq4button").style.backgroundColor="white";
    }

    if(e4==0){
        document.getElementById("e4marked").innerHTML="-";
        document.getElementById("e4obmark").innerHTML="0";
        document.getElementById("e4marked").style.color="peru";
        document.getElementById("e4obmark").style.color="peru";
        e4score=0;
    }else if(e4==1){
        document.getElementById("e4marked").innerHTML="A";
        document.getElementById("e4obmark").innerHTML="-1";
        document.getElementById("e4marked").style.color="red";
        document.getElementById("e4obmark").style.color="red";
        e4score=-1;
    }else if(e4==2){
        document.getElementById("e4marked").innerHTML="B";
        document.getElementById("e4obmark").innerHTML="-1";
        document.getElementById("e4marked").style.color="red";
        document.getElementById("e4obmark").style.color="red";
        e4score=-1;
    }else if(e4==3){
        document.getElementById("e4marked").innerHTML="C";
        document.getElementById("e4obmark").innerHTML="+4";
        document.getElementById("e4marked").style.color="green";
        document.getElementById("e4obmark").style.color="green";
        e4score=4;
    }else if(e4==4){
        document.getElementById("e4marked").innerHTML="D";
        document.getElementById("e4obmark").innerHTML="-1";
        document.getElementById("e4marked").style.color="red";
        document.getElementById("e4obmark").style.color="red";
        e4score=-1;
    }
}

//ENGLISH QUESTION 5
var e5=0;
function e5a(){
    if(document.getElementById("e5a").style.backgroundColor=="honeydew"){
        e5=0;
        document.getElementById("e5a").style.backgroundColor="white";
        document.getElementById("gotoeq5button").style.backgroundColor="white";
    }else{
        e5=1;
    document.getElementById("e5a").style.backgroundColor="honeydew";
    document.getElementById("e5b").style.backgroundColor="white";
    document.getElementById("e5c").style.backgroundColor="white";
    document.getElementById("e5d").style.backgroundColor="white";
    } 
}
function e5b(){
    if(document.getElementById("e5b").style.backgroundColor=="honeydew"){
        e5=0;
        document.getElementById("e5b").style.backgroundColor="white";
        document.getElementById("gotoeq5button").style.backgroundColor="white";
    }else{
        e5=2;
    document.getElementById("e5a").style.backgroundColor="white";
    document.getElementById("e5b").style.backgroundColor="honeydew";
    document.getElementById("e5c").style.backgroundColor="white";
    document.getElementById("e5d").style.backgroundColor="white";
    } 
}
function e5c(){
    if(document.getElementById("e5c").style.backgroundColor=="honeydew"){
        e5=0;
        document.getElementById("e5c").style.backgroundColor="white";
        document.getElementById("gotoeq5button").style.backgroundColor="white";
    }else{
        e5=3;
    document.getElementById("e5a").style.backgroundColor="white";
    document.getElementById("e5b").style.backgroundColor="white";
    document.getElementById("e5c").style.backgroundColor="honeydew";
    document.getElementById("e5d").style.backgroundColor="white";
    }
}
function e5d(){
    if(document.getElementById("e5d").style.backgroundColor=="honeydew"){
        e5=0;
        document.getElementById("e5d").style.backgroundColor="white";
        document.getElementById("gotoeq5button").style.backgroundColor="white";
    }else{
        e5=4;
    document.getElementById("e5a").style.backgroundColor="white";
    document.getElementById("e5b").style.backgroundColor="white";
    document.getElementById("e5c").style.backgroundColor="white";
    document.getElementById("e5d").style.backgroundColor="honeydew";
    }
}
function submite5(){
    if(e5==1 || e5==2 || e5==3 || e5==4){
        document.getElementById("gotoeq5button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotoeq5button").style.backgroundColor="white";
    }

    if(e5==0){
        document.getElementById("e5marked").innerHTML="-";
        document.getElementById("e5obmark").innerHTML="0";
        document.getElementById("e5marked").style.color="peru";
        document.getElementById("e5obmark").style.color="peru";
        e5score=0;
    }else if(e5==1){
        document.getElementById("e5marked").innerHTML="A";
        document.getElementById("e5obmark").innerHTML="-1";
        document.getElementById("e5marked").style.color="red";
        document.getElementById("e5obmark").style.color="red";
        e5score=-1;
    }else if(e5==2){
        document.getElementById("e5marked").innerHTML="B";
        document.getElementById("e5obmark").innerHTML="-1";
        document.getElementById("e5marked").style.color="red";
        document.getElementById("e5obmark").style.color="red";
        e5score=-1;
    }else if(e5==3){
        document.getElementById("e5marked").innerHTML="C";
        document.getElementById("e5obmark").innerHTML="+4";
        document.getElementById("e5marked").style.color="green";
        document.getElementById("e5obmark").style.color="green";
        e5score=4;
    }else if(e5==4){
        document.getElementById("e5marked").innerHTML="D";
        document.getElementById("e5obmark").innerHTML="-1";
        document.getElementById("e5marked").style.color="red";
        document.getElementById("e5obmark").style.color="red";
        e5score=-1;
    }
}

//CORE SUBJECT QUESTION 1
var coresubjectscore=0;
var c1score=0;
var c2score=0;
var c3score=0;
var c4score=0;
var c5score=0;
var c6score=0;
var c7score=0;
var c8score=0;
var c9score=0;
var c10score=0;
var c1=0;
function c1a(){
    if(document.getElementById("c1a").style.backgroundColor=="honeydew"){
        c1=0;
        document.getElementById("c1a").style.backgroundColor="white";
        document.getElementById("gotocq1button").style.backgroundColor="white";
    }else{
        c1=1;
    document.getElementById("c1a").style.backgroundColor="honeydew";
    document.getElementById("c1b").style.backgroundColor="white";
    document.getElementById("c1c").style.backgroundColor="white";
    document.getElementById("c1d").style.backgroundColor="white";
    } 
}
function c1b(){
    if(document.getElementById("c1b").style.backgroundColor=="honeydew"){
        c1=0;
        document.getElementById("c1b").style.backgroundColor="white";
        document.getElementById("gotocq1button").style.backgroundColor="white";
    }else{
        c1=2;
    document.getElementById("c1a").style.backgroundColor="white";
    document.getElementById("c1b").style.backgroundColor="honeydew";
    document.getElementById("c1c").style.backgroundColor="white";
    document.getElementById("c1d").style.backgroundColor="white";
    } 
}
function c1c(){
    if(document.getElementById("c1c").style.backgroundColor=="honeydew"){
        c1=0;
        document.getElementById("c1c").style.backgroundColor="white";
        document.getElementById("gotocq1button").style.backgroundColor="white";
    }else{
        c1=3;
    document.getElementById("c1a").style.backgroundColor="white";
    document.getElementById("c1b").style.backgroundColor="white";
    document.getElementById("c1c").style.backgroundColor="honeydew";
    document.getElementById("c1d").style.backgroundColor="white";
    }
}
function c1d(){
    if(document.getElementById("c1d").style.backgroundColor=="honeydew"){
        c1=0;
        document.getElementById("c1d").style.backgroundColor="white";
        document.getElementById("gotocq1button").style.backgroundColor="white";
    }else{
        c1=4;
    document.getElementById("c1a").style.backgroundColor="white";
    document.getElementById("c1b").style.backgroundColor="white";
    document.getElementById("c1c").style.backgroundColor="white";
    document.getElementById("c1d").style.backgroundColor="honeydew";
    }
}
function submitc1(){
    if(c1==1 || c1==2 || c1==3 || c1==4){
        document.getElementById("gotocq1button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq1button").style.backgroundColor="white";
    }

    if(c1==0){
        document.getElementById("c1marked").innerHTML="-";
        document.getElementById("c1obmark").innerHTML="0";
        document.getElementById("c1marked").style.color="peru";
        document.getElementById("c1obmark").style.color="peru";
        c1score=0;
    }else if(c1==1){
        document.getElementById("c1marked").innerHTML="A";
        document.getElementById("c1obmark").innerHTML="-1";
        document.getElementById("c1marked").style.color="red";
        document.getElementById("c1obmark").style.color="red";
        c1score=-1;
    }else if(c1==2){
        document.getElementById("c1marked").innerHTML="B";
        document.getElementById("c1obmark").innerHTML="-1";
        document.getElementById("c1marked").style.color="red";
        document.getElementById("c1obmark").style.color="red";
        c1score=-1;
    }else if(c1==3){
        document.getElementById("c1marked").innerHTML="C";
        document.getElementById("c1obmark").innerHTML="-1";
        document.getElementById("c1marked").style.color="red";
        document.getElementById("c1obmark").style.color="red";
        c1score=-1;
    }else if(c1==4){
        document.getElementById("c1marked").innerHTML="D";
        document.getElementById("c1obmark").innerHTML="+4";
        document.getElementById("c1marked").style.color="green";
        document.getElementById("c1obmark").style.color="green";
        c1score=4;
    }
}

//CORE SUBJECT QUESTION 2
var c2=0;
function c2a(){
    if(document.getElementById("c2a").style.backgroundColor=="honeydew"){
        c2=0;
        document.getElementById("c2a").style.backgroundColor="white";
        document.getElementById("gotocq2button").style.backgroundColor="white";
    }else{
        c2=1;
    document.getElementById("c2a").style.backgroundColor="honeydew";
    document.getElementById("c2b").style.backgroundColor="white";
    document.getElementById("c2c").style.backgroundColor="white";
    document.getElementById("c2d").style.backgroundColor="white";
    } 
}
function c2b(){
    if(document.getElementById("c2b").style.backgroundColor=="honeydew"){
        c2=0;
        document.getElementById("c2b").style.backgroundColor="white";
        document.getElementById("gotocq2button").style.backgroundColor="white";
    }else{
        c2=2;
    document.getElementById("c2a").style.backgroundColor="white";
    document.getElementById("c2b").style.backgroundColor="honeydew";
    document.getElementById("c2c").style.backgroundColor="white";
    document.getElementById("c2d").style.backgroundColor="white";
    } 
}
function c2c(){
    if(document.getElementById("c2c").style.backgroundColor=="honeydew"){
        c2=0;
        document.getElementById("c2c").style.backgroundColor="white";
        document.getElementById("gotocq2button").style.backgroundColor="white";
    }else{
        c2=3;
    document.getElementById("c2a").style.backgroundColor="white";
    document.getElementById("c2b").style.backgroundColor="white";
    document.getElementById("c2c").style.backgroundColor="honeydew";
    document.getElementById("c2d").style.backgroundColor="white";
    }
}
function c2d(){
    if(document.getElementById("c2d").style.backgroundColor=="honeydew"){
        c2=0;
        document.getElementById("c2d").style.backgroundColor="white";
        document.getElementById("gotocq2button").style.backgroundColor="white";
    }else{
        c2=4;
    document.getElementById("c2a").style.backgroundColor="white";
    document.getElementById("c2b").style.backgroundColor="white";
    document.getElementById("c2c").style.backgroundColor="white";
    document.getElementById("c2d").style.backgroundColor="honeydew";
    }
}
function submitc2(){
    if(c2==1 || c2==2 || c2==3 || c2==4){
        document.getElementById("gotocq2button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq2button").style.backgroundColor="white";
    }

    if(c2==0){
        document.getElementById("c2marked").innerHTML="-";
        document.getElementById("c2obmark").innerHTML="0";
        document.getElementById("c2marked").style.color="peru";
        document.getElementById("c2obmark").style.color="peru";
        c2score=0;
    }else if(c2==1){
        document.getElementById("c2marked").innerHTML="A";
        document.getElementById("c2obmark").innerHTML="-1";
        document.getElementById("c2marked").style.color="red";
        document.getElementById("c2obmark").style.color="red";
        c2score=-1;
    }else if(c2==2){
        document.getElementById("c2marked").innerHTML="B";
        document.getElementById("c2obmark").innerHTML="+4";
        document.getElementById("c2marked").style.color="green";
        document.getElementById("c2obmark").style.color="green";
        c2score=4;
    }else if(c2==3){
        document.getElementById("c2marked").innerHTML="C";
        document.getElementById("c2obmark").innerHTML="-1";
        document.getElementById("c2marked").style.color="red";
        document.getElementById("c2obmark").style.color="red";
        c2score=-1;
    }else if(c2==4){
        document.getElementById("c2marked").innerHTML="D";
        document.getElementById("c2obmark").innerHTML="-1";
        document.getElementById("c2marked").style.color="red";
        document.getElementById("c2obmark").style.color="red";
        c2score=-1;
    }
}

//CORE SUBJECT QUESTION 3
var c3=0;
function c3a(){
    if(document.getElementById("c3a").style.backgroundColor=="honeydew"){
        c3=0;
        document.getElementById("c3a").style.backgroundColor="white";
        document.getElementById("gotocq3button").style.backgroundColor="white";
    }else{
        c3=1;
    document.getElementById("c3a").style.backgroundColor="honeydew";
    document.getElementById("c3b").style.backgroundColor="white";
    document.getElementById("c3c").style.backgroundColor="white";
    document.getElementById("c3d").style.backgroundColor="white";
    } 
}
function c3b(){
    if(document.getElementById("c3b").style.backgroundColor=="honeydew"){
        c3=0;
        document.getElementById("c3b").style.backgroundColor="white";
        document.getElementById("gotocq3button").style.backgroundColor="white";
    }else{
        c3=2;
    document.getElementById("c3a").style.backgroundColor="white";
    document.getElementById("c3b").style.backgroundColor="honeydew";
    document.getElementById("c3c").style.backgroundColor="white";
    document.getElementById("c3d").style.backgroundColor="white";
    } 
}
function c3c(){
    if(document.getElementById("c3c").style.backgroundColor=="honeydew"){
        c3=0;
        document.getElementById("c3c").style.backgroundColor="white";
        document.getElementById("gotocq3button").style.backgroundColor="white";
    }else{
        c3=3;
    document.getElementById("c3a").style.backgroundColor="white";
    document.getElementById("c3b").style.backgroundColor="white";
    document.getElementById("c3c").style.backgroundColor="honeydew";
    document.getElementById("c3d").style.backgroundColor="white";
    }
}
function c3d(){
    if(document.getElementById("c3d").style.backgroundColor=="honeydew"){
        c3=0;
        document.getElementById("c3d").style.backgroundColor="white";
        document.getElementById("gotocq3button").style.backgroundColor="white";
    }else{
        c3=4;
    document.getElementById("c3a").style.backgroundColor="white";
    document.getElementById("c3b").style.backgroundColor="white";
    document.getElementById("c3c").style.backgroundColor="white";
    document.getElementById("c3d").style.backgroundColor="honeydew";
    }
}
function submitc3(){
    if(c3==1 || c3==2 || c3==3 || c3==4){
        document.getElementById("gotocq3button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq3button").style.backgroundColor="white";
    }

    if(c3==0){
        document.getElementById("c3marked").innerHTML="-";
        document.getElementById("c3obmark").innerHTML="0";
        document.getElementById("c3marked").style.color="peru";
        document.getElementById("c3obmark").style.color="peru";
        c3score=0;
    }else if(c3==1){
        document.getElementById("c3marked").innerHTML="A";
        document.getElementById("c3obmark").innerHTML="-1";
        document.getElementById("c3marked").style.color="red";
        document.getElementById("c3obmark").style.color="red";
        c3score=-1;
    }else if(c3==2){
        document.getElementById("c3marked").innerHTML="B";
        document.getElementById("c3obmark").innerHTML="-1";
        document.getElementById("c3marked").style.color="red";
        document.getElementById("c3obmark").style.color="red";
        c3score=-1;
    }else if(c3==3){
        document.getElementById("c3marked").innerHTML="C";
        document.getElementById("c3obmark").innerHTML="+4";
        document.getElementById("c3marked").style.color="green";
        document.getElementById("c3obmark").style.color="green";
        c3score=4;
    }else if(c3==4){
        document.getElementById("c3marked").innerHTML="D";
        document.getElementById("c3obmark").innerHTML="-1";
        document.getElementById("c3marked").style.color="red";
        document.getElementById("c3obmark").style.color="red";
        c3score=-1;
    }
}

//CORE SUBJECT QUESTION 4
var c4=0;
function c4a(){
    if(document.getElementById("c4a").style.backgroundColor=="honeydew"){
        c4=0;
        document.getElementById("c4a").style.backgroundColor="white";
        document.getElementById("gotocq4button").style.backgroundColor="white";
    }else{
        c4=1;
    document.getElementById("c4a").style.backgroundColor="honeydew";
    document.getElementById("c4b").style.backgroundColor="white";
    document.getElementById("c4c").style.backgroundColor="white";
    document.getElementById("c4d").style.backgroundColor="white";
    } 
}
function c4b(){
    if(document.getElementById("c4b").style.backgroundColor=="honeydew"){
        c4=0;
        document.getElementById("c4b").style.backgroundColor="white";
        document.getElementById("gotocq4button").style.backgroundColor="white";
    }else{
        c4=2;
    document.getElementById("c4a").style.backgroundColor="white";
    document.getElementById("c4b").style.backgroundColor="honeydew";
    document.getElementById("c4c").style.backgroundColor="white";
    document.getElementById("c4d").style.backgroundColor="white";
    } 
}
function c4c(){
    if(document.getElementById("c4c").style.backgroundColor=="honeydew"){
        c4=0;
        document.getElementById("c4c").style.backgroundColor="white";
        document.getElementById("gotocq4button").style.backgroundColor="white";
    }else{
        c4=3;
    document.getElementById("c4a").style.backgroundColor="white";
    document.getElementById("c4b").style.backgroundColor="white";
    document.getElementById("c4c").style.backgroundColor="honeydew";
    document.getElementById("c4d").style.backgroundColor="white";
    }
}
function c4d(){
    if(document.getElementById("c4d").style.backgroundColor=="honeydew"){
        c4=0;
        document.getElementById("c4d").style.backgroundColor="white";
        document.getElementById("gotocq4button").style.backgroundColor="white";
    }else{
        c4=4;
    document.getElementById("c4a").style.backgroundColor="white";
    document.getElementById("c4b").style.backgroundColor="white";
    document.getElementById("c4c").style.backgroundColor="white";
    document.getElementById("c4d").style.backgroundColor="honeydew";
    }
}
function submitc4(){
    if(c4==1 || c4==2 || c4==3 || c4==4){
        document.getElementById("gotocq4button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq4button").style.backgroundColor="white";
    }

    if(c4==0){
        document.getElementById("c4marked").innerHTML="-";
        document.getElementById("c4obmark").innerHTML="0";
        document.getElementById("c4marked").style.color="peru";
        document.getElementById("c4obmark").style.color="peru";
        c4score=0;
    }else if(c4==1){
        document.getElementById("c4marked").innerHTML="A";
        document.getElementById("c4obmark").innerHTML="-1";
        document.getElementById("c4marked").style.color="red";
        document.getElementById("c4obmark").style.color="red";
        c4score=-1;
    }else if(c4==2){
        document.getElementById("c4marked").innerHTML="B";
        document.getElementById("c4obmark").innerHTML="-1";
        document.getElementById("c4marked").style.color="red";
        document.getElementById("c4obmark").style.color="red";
        c4score=-1;
    }else if(c4==3){
        document.getElementById("c4marked").innerHTML="C";
        document.getElementById("c4obmark").innerHTML="-1";
        document.getElementById("c4marked").style.color="red";
        document.getElementById("c4obmark").style.color="red";
        c4score=-1;
    }else if(c4==4){
        document.getElementById("c4marked").innerHTML="D";
        document.getElementById("c4obmark").innerHTML="+4";
        document.getElementById("c4marked").style.color="green";
        document.getElementById("c4obmark").style.color="green";
        c4score=4;
    }
}

//CORE SUBJECT QUESTION 5
var c5=0;
function c5a(){
    if(document.getElementById("c5a").style.backgroundColor=="honeydew"){
        c5=0;
        document.getElementById("c5a").style.backgroundColor="white";
        document.getElementById("gotocq5button").style.backgroundColor="white";
    }else{
        c5=1;
    document.getElementById("c5a").style.backgroundColor="honeydew";
    document.getElementById("c5b").style.backgroundColor="white";
    document.getElementById("c5c").style.backgroundColor="white";
    document.getElementById("c5d").style.backgroundColor="white";
    } 
}
function c5b(){
    if(document.getElementById("c5b").style.backgroundColor=="honeydew"){
        c5=0;
        document.getElementById("c5b").style.backgroundColor="white";
        document.getElementById("gotocq5button").style.backgroundColor="white";
    }else{
        c5=2;
    document.getElementById("c5a").style.backgroundColor="white";
    document.getElementById("c5b").style.backgroundColor="honeydew";
    document.getElementById("c5c").style.backgroundColor="white";
    document.getElementById("c5d").style.backgroundColor="white";
    } 
}
function c5c(){
    if(document.getElementById("c5c").style.backgroundColor=="honeydew"){
        c5=0;
        document.getElementById("c5c").style.backgroundColor="white";
        document.getElementById("gotocq5button").style.backgroundColor="white";
    }else{
        c5=3;
    document.getElementById("c5a").style.backgroundColor="white";
    document.getElementById("c5b").style.backgroundColor="white";
    document.getElementById("c5c").style.backgroundColor="honeydew";
    document.getElementById("c5d").style.backgroundColor="white";
    }
}
function c5d(){
    if(document.getElementById("c5d").style.backgroundColor=="honeydew"){
        c5=0;
        document.getElementById("c5d").style.backgroundColor="white";
        document.getElementById("gotocq5button").style.backgroundColor="white";
    }else{
        c5=4;
    document.getElementById("c5a").style.backgroundColor="white";
    document.getElementById("c5b").style.backgroundColor="white";
    document.getElementById("c5c").style.backgroundColor="white";
    document.getElementById("c5d").style.backgroundColor="honeydew";
    }
}
function submitc5(){
    if(c5==1 || c5==2 || c5==3 || c5==4){
        document.getElementById("gotocq5button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq5button").style.backgroundColor="white";
    }

    if(c5==0){
        document.getElementById("c5marked").innerHTML="-";
        document.getElementById("c5obmark").innerHTML="0";
        document.getElementById("c5marked").style.color="peru";
        document.getElementById("c5obmark").style.color="peru";
        c5score=0;
    }else if(c5==1){
        document.getElementById("c5marked").innerHTML="A";
        document.getElementById("c5obmark").innerHTML="-1";
        document.getElementById("c5marked").style.color="red";
        document.getElementById("c5obmark").style.color="red";
        c5score=-1;
    }else if(c5==2){
        document.getElementById("c5marked").innerHTML="B";
        document.getElementById("c5obmark").innerHTML="-1";
        document.getElementById("c5marked").style.color="red";
        document.getElementById("c5obmark").style.color="red";
        c5score=-1;
    }else if(c5==3){
        document.getElementById("c5marked").innerHTML="C";
        document.getElementById("c5obmark").innerHTML="+4";
        document.getElementById("c5marked").style.color="green";
        document.getElementById("c5obmark").style.color="green";
        c5score=4;
    }else if(c5==4){
        document.getElementById("c5marked").innerHTML="D";
        document.getElementById("c5obmark").innerHTML="-1";
        document.getElementById("c5marked").style.color="red";
        document.getElementById("c5obmark").style.color="red";
        c5score=-1;
    }
}

//CORE SUBJECT QUESTION 6
var c6=0;
function c6a(){
    if(document.getElementById("c6a").style.backgroundColor=="honeydew"){
        c6=0;
        document.getElementById("c6a").style.backgroundColor="white";
        document.getElementById("gotocq6button").style.backgroundColor="white";
    }else{
        c6=1;
    document.getElementById("c6a").style.backgroundColor="honeydew";
    document.getElementById("c6b").style.backgroundColor="white";
    document.getElementById("c6c").style.backgroundColor="white";
    document.getElementById("c6d").style.backgroundColor="white";
    } 
}
function c6b(){
    if(document.getElementById("c6b").style.backgroundColor=="honeydew"){
        c6=0;
        document.getElementById("c6b").style.backgroundColor="white";
        document.getElementById("gotocq6button").style.backgroundColor="white";
    }else{
        c6=2;
    document.getElementById("c6a").style.backgroundColor="white";
    document.getElementById("c6b").style.backgroundColor="honeydew";
    document.getElementById("c6c").style.backgroundColor="white";
    document.getElementById("c6d").style.backgroundColor="white";
    } 
}
function c6c(){
    if(document.getElementById("c6c").style.backgroundColor=="honeydew"){
        c6=0;
        document.getElementById("c6c").style.backgroundColor="white";
        document.getElementById("gotocq6button").style.backgroundColor="white";
    }else{
        c6=3;
    document.getElementById("c6a").style.backgroundColor="white";
    document.getElementById("c6b").style.backgroundColor="white";
    document.getElementById("c6c").style.backgroundColor="honeydew";
    document.getElementById("c6d").style.backgroundColor="white";
    }
}
function c6d(){
    if(document.getElementById("c6d").style.backgroundColor=="honeydew"){
        c6=0;
        document.getElementById("c6d").style.backgroundColor="white";
        document.getElementById("gotocq6button").style.backgroundColor="white";
    }else{
        c6=4;
    document.getElementById("c6a").style.backgroundColor="white";
    document.getElementById("c6b").style.backgroundColor="white";
    document.getElementById("c6c").style.backgroundColor="white";
    document.getElementById("c6d").style.backgroundColor="honeydew";
    }
}
function submitc6(){
    if(c6==1 || c6==2 || c6==3 || c6==4){
        document.getElementById("gotocq6button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq6button").style.backgroundColor="white";
    }

    if(c6==0){
        document.getElementById("c6marked").innerHTML="-";
        document.getElementById("c6obmark").innerHTML="0";
        document.getElementById("c6marked").style.color="peru";
        document.getElementById("c6obmark").style.color="peru";
        c6score=0;
    }else if(c6==1){
        document.getElementById("c6marked").innerHTML="A";
        document.getElementById("c6obmark").innerHTML="+4";
        document.getElementById("c6marked").style.color="green";
        document.getElementById("c6obmark").style.color="green";
        c6score=4;
    }else if(c6==2){
        document.getElementById("c6marked").innerHTML="B";
        document.getElementById("c6obmark").innerHTML="-1";
        document.getElementById("c6marked").style.color="red";
        document.getElementById("c6obmark").style.color="red";
        c6score=-1;
    }else if(c6==3){
        document.getElementById("c6marked").innerHTML="C";
        document.getElementById("c6obmark").innerHTML="-1";
        document.getElementById("c6marked").style.color="red";
        document.getElementById("c6obmark").style.color="red";
        c6score=-1;
    }else if(c6==4){
        document.getElementById("c6marked").innerHTML="D";
        document.getElementById("c6obmark").innerHTML="-1";
        document.getElementById("c6marked").style.color="red";
        document.getElementById("c6obmark").style.color="red";
        c6score=-1;
    }
}

//CORE SUBJECT QUESTION 7
var c7=0;
function c7a(){
    if(document.getElementById("c7a").style.backgroundColor=="honeydew"){
        c7=0;
        document.getElementById("c7a").style.backgroundColor="white";
        document.getElementById("gotocq7button").style.backgroundColor="white";
    }else{
        c7=1;
    document.getElementById("c7a").style.backgroundColor="honeydew";
    document.getElementById("c7b").style.backgroundColor="white";
    document.getElementById("c7c").style.backgroundColor="white";
    document.getElementById("c7d").style.backgroundColor="white";
    } 
}
function c7b(){
    if(document.getElementById("c7b").style.backgroundColor=="honeydew"){
        c7=0;
        document.getElementById("c7b").style.backgroundColor="white";
        document.getElementById("gotocq7button").style.backgroundColor="white";
    }else{
        c7=2;
    document.getElementById("c7a").style.backgroundColor="white";
    document.getElementById("c7b").style.backgroundColor="honeydew";
    document.getElementById("c7c").style.backgroundColor="white";
    document.getElementById("c7d").style.backgroundColor="white";
    } 
}
function c7c(){
    if(document.getElementById("c7c").style.backgroundColor=="honeydew"){
        c7=0;
        document.getElementById("c7c").style.backgroundColor="white";
        document.getElementById("gotocq7button").style.backgroundColor="white";
    }else{
        c7=3;
    document.getElementById("c7a").style.backgroundColor="white";
    document.getElementById("c7b").style.backgroundColor="white";
    document.getElementById("c7c").style.backgroundColor="honeydew";
    document.getElementById("c7d").style.backgroundColor="white";
    }
}
function c7d(){
    if(document.getElementById("c7d").style.backgroundColor=="honeydew"){
        c7=0;
        document.getElementById("c7d").style.backgroundColor="white";
        document.getElementById("gotocq7button").style.backgroundColor="white";
    }else{
        c7=4;
    document.getElementById("c7a").style.backgroundColor="white";
    document.getElementById("c7b").style.backgroundColor="white";
    document.getElementById("c7c").style.backgroundColor="white";
    document.getElementById("c7d").style.backgroundColor="honeydew";
    }
}
function submitc7(){
    if(c7==1 || c7==2 || c7==3 || c7==4){
        document.getElementById("gotocq7button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq7button").style.backgroundColor="white";
    }

    if(c7==0){
        document.getElementById("c7marked").innerHTML="-";
        document.getElementById("c7obmark").innerHTML="0";
        document.getElementById("c7marked").style.color="peru";
        document.getElementById("c7obmark").style.color="peru";
        c7score=0;
    }else if(c7==1){
        document.getElementById("c7marked").innerHTML="A";
        document.getElementById("c7obmark").innerHTML="-1";
        document.getElementById("c7marked").style.color="red";
        document.getElementById("c7obmark").style.color="red";
        c7score=-1;
    }else if(c7==2){
        document.getElementById("c7marked").innerHTML="B";
        document.getElementById("c7obmark").innerHTML="-1";
        document.getElementById("c7marked").style.color="red";
        document.getElementById("c7obmark").style.color="red";
        c7score=-1;
    }else if(c7==3){
        document.getElementById("c7marked").innerHTML="C";
        document.getElementById("c7obmark").innerHTML="-1";
        document.getElementById("c7marked").style.color="red";
        document.getElementById("c7obmark").style.color="red";
        c7score=-1;
    }else if(c7==4){
        document.getElementById("c7marked").innerHTML="D";
        document.getElementById("c7obmark").innerHTML="+4";
        document.getElementById("c7marked").style.color="green";
        document.getElementById("c7obmark").style.color="green";
        c7score=4;
    }
}

//CORE SUBJECT QUESTION 8
var c8=0;
function c8a(){
    if(document.getElementById("c8a").style.backgroundColor=="honeydew"){
        c8=0;
        document.getElementById("c8a").style.backgroundColor="white";
        document.getElementById("gotocq8button").style.backgroundColor="white";
    }else{
        c8=1;
    document.getElementById("c8a").style.backgroundColor="honeydew";
    document.getElementById("c8b").style.backgroundColor="white";
    document.getElementById("c8c").style.backgroundColor="white";
    document.getElementById("c8d").style.backgroundColor="white";
    } 
}
function c8b(){
    if(document.getElementById("c8b").style.backgroundColor=="honeydew"){
        c8=0;
        document.getElementById("c8b").style.backgroundColor="white";
        document.getElementById("gotocq8button").style.backgroundColor="white";
    }else{
        c8=2;
    document.getElementById("c8a").style.backgroundColor="white";
    document.getElementById("c8b").style.backgroundColor="honeydew";
    document.getElementById("c8c").style.backgroundColor="white";
    document.getElementById("c8d").style.backgroundColor="white";
    } 
}
function c8c(){
    if(document.getElementById("c8c").style.backgroundColor=="honeydew"){
        c8=0;
        document.getElementById("c8c").style.backgroundColor="white";
        document.getElementById("gotocq8button").style.backgroundColor="white";
    }else{
        c8=3;
    document.getElementById("c8a").style.backgroundColor="white";
    document.getElementById("c8b").style.backgroundColor="white";
    document.getElementById("c8c").style.backgroundColor="honeydew";
    document.getElementById("c8d").style.backgroundColor="white";
    }
}
function c8d(){
    if(document.getElementById("c8d").style.backgroundColor=="honeydew"){
        c8=0;
        document.getElementById("c8d").style.backgroundColor="white";
        document.getElementById("gotocq8button").style.backgroundColor="white";
    }else{
        c8=4;
    document.getElementById("c8a").style.backgroundColor="white";
    document.getElementById("c8b").style.backgroundColor="white";
    document.getElementById("c8c").style.backgroundColor="white";
    document.getElementById("c8d").style.backgroundColor="honeydew";
    }
}
function submitc8(){
    if(c8==1 || c8==2 || c8==3 || c8==4){
        document.getElementById("gotocq8button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq8button").style.backgroundColor="white";
    }

    if(c8==0){
        document.getElementById("c8marked").innerHTML="-";
        document.getElementById("c8obmark").innerHTML="0";
        document.getElementById("c8marked").style.color="peru";
        document.getElementById("c8obmark").style.color="peru";
        c8score=0;
    }else if(c8==1){
        document.getElementById("c8marked").innerHTML="A";
        document.getElementById("c8obmark").innerHTML="+4";
        document.getElementById("c8marked").style.color="green";
        document.getElementById("c8obmark").style.color="green";
        c8score=4;
    }else if(c8==2){
        document.getElementById("c8marked").innerHTML="B";
        document.getElementById("c8obmark").innerHTML="-1";
        document.getElementById("c8marked").style.color="red";
        document.getElementById("c8obmark").style.color="red";
        c8score=-1;
    }else if(c8==3){
        document.getElementById("c8marked").innerHTML="C";
        document.getElementById("c8obmark").innerHTML="-1";
        document.getElementById("c8marked").style.color="red";
        document.getElementById("c8obmark").style.color="red";
        c8score=-1;
    }else if(c8==4){
        document.getElementById("c8marked").innerHTML="D";
        document.getElementById("c8obmark").innerHTML="-1";
        document.getElementById("c8marked").style.color="red";
        document.getElementById("c8obmark").style.color="red";
        c8score=-1;
    }
}

//CORE SUBJECT QUESTION 9
var c9=0;
function c9a(){
    if(document.getElementById("c9a").style.backgroundColor=="honeydew"){
        c9=0;
        document.getElementById("c9a").style.backgroundColor="white";
        document.getElementById("gotocq9button").style.backgroundColor="white";
    }else{
        c9=1;
    document.getElementById("c9a").style.backgroundColor="honeydew";
    document.getElementById("c9b").style.backgroundColor="white";
    document.getElementById("c9c").style.backgroundColor="white";
    document.getElementById("c9d").style.backgroundColor="white";
    } 
}
function c9b(){
    if(document.getElementById("c9b").style.backgroundColor=="honeydew"){
        c9=0;
        document.getElementById("c9b").style.backgroundColor="white";
        document.getElementById("gotocq9button").style.backgroundColor="white";
    }else{
        c9=2;
    document.getElementById("c9a").style.backgroundColor="white";
    document.getElementById("c9b").style.backgroundColor="honeydew";
    document.getElementById("c9c").style.backgroundColor="white";
    document.getElementById("c9d").style.backgroundColor="white";
    } 
}
function c9c(){
    if(document.getElementById("c9c").style.backgroundColor=="honeydew"){
        c9=0;
        document.getElementById("c9c").style.backgroundColor="white";
        document.getElementById("gotocq9button").style.backgroundColor="white";
    }else{
        c9=3;
    document.getElementById("c9a").style.backgroundColor="white";
    document.getElementById("c9b").style.backgroundColor="white";
    document.getElementById("c9c").style.backgroundColor="honeydew";
    document.getElementById("c9d").style.backgroundColor="white";
    }
}
function c9d(){
    if(document.getElementById("c9d").style.backgroundColor=="honeydew"){
        c9=0;
        document.getElementById("c9d").style.backgroundColor="white";
        document.getElementById("gotocq9button").style.backgroundColor="white";
    }else{
        c9=4;
    document.getElementById("c9a").style.backgroundColor="white";
    document.getElementById("c9b").style.backgroundColor="white";
    document.getElementById("c9c").style.backgroundColor="white";
    document.getElementById("c9d").style.backgroundColor="honeydew";
    }
}
function submitc9(){
    if(c9==1 || c9==2 || c9==3 || c9==4){
        document.getElementById("gotocq9button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq9button").style.backgroundColor="white";
    }

    if(c9==0){
        document.getElementById("c9marked").innerHTML="-";
        document.getElementById("c9obmark").innerHTML="0";
        document.getElementById("c9marked").style.color="peru";
        document.getElementById("c9obmark").style.color="peru";
        c9score=0;
    }else if(c9==1){
        document.getElementById("c9marked").innerHTML="A";
        document.getElementById("c9obmark").innerHTML="+4";
        document.getElementById("c9marked").style.color="green";
        document.getElementById("c9obmark").style.color="green";
        c9score=4;
    }else if(c9==2){
        document.getElementById("c9marked").innerHTML="B";
        document.getElementById("c9obmark").innerHTML="-1";
        document.getElementById("c9marked").style.color="red";
        document.getElementById("c9obmark").style.color="red";
        c9score=-1;
    }else if(c9==3){
        document.getElementById("c9marked").innerHTML="C";
        document.getElementById("c9obmark").innerHTML="-1";
        document.getElementById("c9marked").style.color="red";
        document.getElementById("c9obmark").style.color="red";
        c9score=-1;
    }else if(c9==4){
        document.getElementById("c9marked").innerHTML="D";
        document.getElementById("c9obmark").innerHTML="-1";
        document.getElementById("c9marked").style.color="red";
        document.getElementById("c9obmark").style.color="red";
        c9score=-1;
    }
}

//CORE SUBJECT QUESTION 10
var c10=0;
function c10a(){
    if(document.getElementById("c10a").style.backgroundColor=="honeydew"){
        c10=0;
        document.getElementById("c10a").style.backgroundColor="white";
        document.getElementById("gotocq10button").style.backgroundColor="white";
    }else{
        c10=1;
    document.getElementById("c10a").style.backgroundColor="honeydew";
    document.getElementById("c10b").style.backgroundColor="white";
    document.getElementById("c10c").style.backgroundColor="white";
    document.getElementById("c10d").style.backgroundColor="white";
    } 
}
function c10b(){
    if(document.getElementById("c10b").style.backgroundColor=="honeydew"){
        c10=0;
        document.getElementById("c10b").style.backgroundColor="white";
        document.getElementById("gotocq10button").style.backgroundColor="white";
    }else{
        c10=2;
    document.getElementById("c10a").style.backgroundColor="white";
    document.getElementById("c10b").style.backgroundColor="honeydew";
    document.getElementById("c10c").style.backgroundColor="white";
    document.getElementById("c10d").style.backgroundColor="white";
    } 
}
function c10c(){
    if(document.getElementById("c10c").style.backgroundColor=="honeydew"){
        c10=0;
        document.getElementById("c10c").style.backgroundColor="white";
        document.getElementById("gotocq10button").style.backgroundColor="white";
    }else{
        c10=3;
    document.getElementById("c10a").style.backgroundColor="white";
    document.getElementById("c10b").style.backgroundColor="white";
    document.getElementById("c10c").style.backgroundColor="honeydew";
    document.getElementById("c10d").style.backgroundColor="white";
    }
}
function c10d(){
    if(document.getElementById("c10d").style.backgroundColor=="honeydew"){
        c10=0;
        document.getElementById("c10d").style.backgroundColor="white";
        document.getElementById("gotocq10button").style.backgroundColor="white";
    }else{
        c10=4;
    document.getElementById("c10a").style.backgroundColor="white";
    document.getElementById("c10b").style.backgroundColor="white";
    document.getElementById("c10c").style.backgroundColor="white";
    document.getElementById("c10d").style.backgroundColor="honeydew";
    }
}
function submitc10(){
    if(c10==1 || c10==2 || c10==3 || c10==4){
        document.getElementById("gotocq10button").style.backgroundColor="aquamarine";
    }else{
        document.getElementById("gotocq10button").style.backgroundColor="white";
    }

    if(c10==0){
        document.getElementById("c10marked").innerHTML="-";
        document.getElementById("c10obmark").innerHTML="0";
        document.getElementById("c10marked").style.color="peru";
        document.getElementById("c10obmark").style.color="peru";
        c10score=0;
    }else if(c10==1){
        document.getElementById("c10marked").innerHTML="A";
        document.getElementById("c10obmark").innerHTML="-1";
        document.getElementById("c10marked").style.color="red";
        document.getElementById("c10obmark").style.color="red";
        c10score=-1;
    }else if(c10==2){
        document.getElementById("c10marked").innerHTML="B";
        document.getElementById("c10obmark").innerHTML="-1";
        document.getElementById("c10marked").style.color="red";
        document.getElementById("c10obmark").style.color="red";
        c10score=-1;
    }else if(c10==3){
        document.getElementById("c10marked").innerHTML="C";
        document.getElementById("c10obmark").innerHTML="+4";
        document.getElementById("c10marked").style.color="green";
        document.getElementById("c10obmark").style.color="green";
        c10score=4;
    }else if(c10==4){
        document.getElementById("c10marked").innerHTML="D";
        document.getElementById("c10obmark").innerHTML="-1";
        document.getElementById("c10marked").style.color="red";
        document.getElementById("c10obmark").style.color="red";
        c10score=-1;
    }
}

// DISPLAY PART JAVASCRIPT
function startexam(){
    document.getElementById("loginform").style.display="none";
    document.getElementById("contactdetails").style.display="none";
    document.getElementById("instructionspart").style.display="initial";
    document.getElementById("mainpage").style.display="initial";
    document.getElementById("end").style.display="none";
    document.getElementById("mainpage").style.position="fixed";
    document.getElementById("mainpage").style.top="0";
}
function instructionspart(){
    document.getElementById("loginform").style.display="none";
    document.getElementById("contactdetails").style.display="none";
    document.getElementById("apptitudepart").style.display="none";
    document.getElementById("coresubjectpart").style.display="none";
    document.getElementById("englishpart").style.display="none";
    document.getElementById("reasoningpart").style.display="none";
    document.getElementById("instructionspart").style.display="initial"
    document.getElementById("mainpage").style.display="initial";
    document.getElementById("end").style.display="none";
    document.getElementById("mainpage").style.position="fixed";
    document.getElementById("mainpage").style.top="0";    
}
function reasoningpart(){
    document.getElementById("loginform").style.display="none";
    document.getElementById("contactdetails").style.display="none";
    document.getElementById("instructionspart").style.display="none"
    document.getElementById("apptitudepart").style.display="none";
    document.getElementById("coresubjectpart").style.display="none";
    document.getElementById("englishpart").style.display="none";
    document.getElementById("mainpage").style.display="initial";
    document.getElementById("reasoningpart").style.display="initial";
    document.getElementById("end").style.display="none";
    document.getElementById("mainpage").style.position="fixed";
    document.getElementById("mainpage").style.top="0";  
}
function apptitudepart(){
    document.getElementById("loginform").style.display="none";
    document.getElementById("contactdetails").style.display="none";
    document.getElementById("instructionspart").style.display="none"
    document.getElementById("coresubjectpart").style.display="none";
    document.getElementById("englishpart").style.display="none";
    document.getElementById("reasoningpart").style.display="none";
    document.getElementById("mainpage").style.display="initial";
    document.getElementById("apptitudepart").style.display="initial";
    document.getElementById("end").style.display="none";
    document.getElementById("mainpage").style.position="fixed";
    document.getElementById("mainpage").style.top="0";  
}
function englishpart(){
    document.getElementById("loginform").style.display="none";
    document.getElementById("contactdetails").style.display="none";
    document.getElementById("instructionspart").style.display="none"
    document.getElementById("reasoningpart").style.display="none";
    document.getElementById("apptitudepart").style.display="none";
    document.getElementById("coresubjectpart").style.display="none";
    document.getElementById("mainpage").style.display="initial";
    document.getElementById("englishpart").style.display="initial";
    document.getElementById("end").style.display="none";
    document.getElementById("mainpage").style.position="fixed";
    document.getElementById("mainpage").style.top="0";  
}
function coresubjectpart(){
    document.getElementById("mainpage").style.display="initial";
    document.getElementById("coresubjectpart").style.display="initial";
    document.getElementById("loginform").style.display="none";
    document.getElementById("contactdetails").style.display="none";
    document.getElementById("instructionspart").style.display="none"
    document.getElementById("reasoningpart").style.display="none";
    document.getElementById("apptitudepart").style.display="none";
    document.getElementById("englishpart").style.display="none";
    document.getElementById("end").style.display="none";
    document.getElementById("mainpage").style.position="fixed";
    document.getElementById("mainpage").style.top="0";
    
}
function endpart(){
    let endexam=confirm("Do You Really want to end the Exam? Your exam will end and you will not be able to make changes.");
    if(endexam){
        document.getElementById("loginform").style.display="none";
        document.getElementById("contactdetails").style.display="none";
        document.getElementById("instructionspart").style.display="none"
        document.getElementById("reasoningpart").style.display="none";
        document.getElementById("apptitudepart").style.display="none";
        document.getElementById("coresubjectpart").style.display="none";
        document.getElementById("mainpage").style.display="none";
        document.getElementById("englishpart").style.display="none";
        document.getElementById("end").style.display="initial";
        document.getElementById("endpart").style.display="initial";
        
        //TOTAL MARKS CALCULATION
        reasoningscore=r1score+r2score+r3score+r4score+r5score;
        apptitudescore=a1score+a2score+a3score+a4score+a5score;
        englishscore=e1score+e2score+e3score+e4score+e5score;
        coresubjectscore=c1score+c2score+c3score+c4score+c5score+c6score+c7score+c8score+c9score+c10score;
        totalscore=reasoningscore+apptitudescore+englishscore+coresubjectscore;
        //Display Marks in Table
        document.getElementById("robmark").innerHTML=reasoningscore;
        document.getElementById("aobmark").innerHTML=apptitudescore;
        document.getElementById("eobmark").innerHTML=englishscore;
        document.getElementById("cobmark").innerHTML=coresubjectscore;
        document.getElementById("totalscore").innerHTML=totalscore;
    }
}
function score(){
        document.getElementById("loginform").style.display="none";
        document.getElementById("contactdetails").style.display="none";
        document.getElementById("instructionspart").style.display="none"
        document.getElementById("reasoningpart").style.display="none";
        document.getElementById("apptitudepart").style.display="none";
        document.getElementById("coresubjectpart").style.display="none";
        document.getElementById("mainpage").style.display="none";
        document.getElementById("englishpart").style.display="none";
        document.getElementById("end").style.display="none";
        document.getElementById("endpart").style.display="none";
        document.getElementById("scoretable").style.display="initial";
}
function goback(){
        document.getElementById("loginform").style.display="none";
        document.getElementById("contactdetails").style.display="none";
        document.getElementById("instructionspart").style.display="none"
        document.getElementById("reasoningpart").style.display="none";
        document.getElementById("apptitudepart").style.display="none";
        document.getElementById("coresubjectpart").style.display="none";
        document.getElementById("mainpage").style.display="none";
        document.getElementById("englishpart").style.display="none";
        document.getElementById("end").style.display="initial";
        document.getElementById("endpart").style.display="initial";
        document.getElementById("scoretable").style.display="none";
}
function solutions(){
        document.getElementById("loginform").style.display="none";
        document.getElementById("contactdetails").style.display="none";
        document.getElementById("instructionspart").style.display="none"
        document.getElementById("reasoningpart").style.display="none";
        document.getElementById("apptitudepart").style.display="none";
        document.getElementById("coresubjectpart").style.display="none";
        document.getElementById("mainpage").style.display="none";
        document.getElementById("englishpart").style.display="none";
        document.getElementById("end").style.display="none";
        document.getElementById("endpart").style.display="none";
        document.getElementById("scoretable").style.display="none";
        document.getElementById("anspdf").style.display="initial";
}
function solgoback(){
        document.getElementById("loginform").style.display="none";
        document.getElementById("contactdetails").style.display="none";
        document.getElementById("instructionspart").style.display="none"
        document.getElementById("reasoningpart").style.display="none";
        document.getElementById("apptitudepart").style.display="none";
        document.getElementById("coresubjectpart").style.display="none";
        document.getElementById("mainpage").style.display="none";
        document.getElementById("englishpart").style.display="none";
        document.getElementById("end").style.display="initial";
        document.getElementById("endpart").style.display="initial";
        document.getElementById("scoretable").style.display="none";
        document.getElementById("anspdf").style.display="none";
}

//LOG OUT BUTTON
function logout(){
    window.location.reload();
   // document.getElementById("loggedout").style.display="initial";
       // document.getElementById("end").style.display="none";
       // document.getElementById("endpart").style.display="none";
       // document.getElementById("scoretable").style.display="none";
       // document.getElementById("anspdf").style.display="none";
}

function enterscoreintable(){
    //Reasoning score
    if(r1==0){
        document.getElementById("r1marked").innerHTML="-";
        document.getElementById("r1obmark").innerHTML="0";
        document.getElementById("r1marked").style.color="peru";
        document.getElementById("r1obmark").style.color="peru";
        r1score=0;
    }
    if(r2==0){
        document.getElementById("r2marked").innerHTML="-";
        document.getElementById("r2obmark").innerHTML="0";
        document.getElementById("r2marked").style.color="peru";
        document.getElementById("r2obmark").style.color="peru";
        r2score=0;
    }
    if(r3==0){
        document.getElementById("r3marked").innerHTML="-";
        document.getElementById("r3obmark").innerHTML="0";
        document.getElementById("r3marked").style.color="peru";
        document.getElementById("r3obmark").style.color="peru";
        r3score=0;
    }
    if(r4==0){
        document.getElementById("r4marked").innerHTML="-";
        document.getElementById("r4obmark").innerHTML="0";
        document.getElementById("r4marked").style.color="peru";
        document.getElementById("r4obmark").style.color="peru";
        r4score=0;
    }
    if(r5==0){
        document.getElementById("r5marked").innerHTML="-";
        document.getElementById("r5obmark").innerHTML="0";
        document.getElementById("r5marked").style.color="peru";
        document.getElementById("r5obmark").style.color="peru";
        r5score=0;
    }
    
    //Apptitude score
    if(a1==0){
        document.getElementById("a1marked").innerHTML="-";
        document.getElementById("a1obmark").innerHTML="0";
        document.getElementById("a1marked").style.color="peru";
        document.getElementById("a1obmark").style.color="peru";
        a1score=0;
    }
    if(a2==0){
        document.getElementById("a2marked").innerHTML="-";
        document.getElementById("a2obmark").innerHTML="0";
        document.getElementById("a2marked").style.color="peru";
        document.getElementById("a2obmark").style.color="peru";
        a2score=0;
    }
    if(a3==0){
        document.getElementById("a3marked").innerHTML="-";
        document.getElementById("a3obmark").innerHTML="0";
        document.getElementById("a3marked").style.color="peru";
        document.getElementById("a3obmark").style.color="peru";
        a3score=0;
    }
    if(a4==0){
        document.getElementById("a4marked").innerHTML="-";
        document.getElementById("a4obmark").innerHTML="0";
        document.getElementById("a4marked").style.color="peru";
        document.getElementById("a4obmark").style.color="peru";
        a4score=0;
    }
    if(a5==0){
        document.getElementById("a5marked").innerHTML="-";
        document.getElementById("a5obmark").innerHTML="0";
        document.getElementById("a5marked").style.color="peru";
        document.getElementById("a5obmark").style.color="peru";
        a5score=0;
    }

    //English Score
    if(e1==0){
        document.getElementById("e1marked").innerHTML="-";
        document.getElementById("e1obmark").innerHTML="0";
        document.getElementById("e1marked").style.color="peru";
        document.getElementById("e1obmark").style.color="peru";
        e1score=0;
    }
    if(e2==0){
        document.getElementById("e2marked").innerHTML="-";
        document.getElementById("e2obmark").innerHTML="0";
        document.getElementById("e2marked").style.color="peru";
        document.getElementById("e2obmark").style.color="peru";
        e2score=0;
    }
    if(e3==0){
        document.getElementById("e3marked").innerHTML="-";
        document.getElementById("e3obmark").innerHTML="0";
        document.getElementById("e3marked").style.color="peru";
        document.getElementById("e3obmark").style.color="peru";
        e3score=0;
    }
    if(e4==0){
        document.getElementById("e4marked").innerHTML="-";
        document.getElementById("e4obmark").innerHTML="0";
        document.getElementById("e4marked").style.color="peru";
        document.getElementById("e4obmark").style.color="peru";
        e4score=0;
    }
    if(e5==0){
        document.getElementById("e5marked").innerHTML="-";
        document.getElementById("e5obmark").innerHTML="0";
        document.getElementById("e5marked").style.color="peru";
        document.getElementById("e5obmark").style.color="peru";
        e5score=0;
    }

    //Core Subject Score
    if(c1==0){
        document.getElementById("c1marked").innerHTML="-";
        document.getElementById("c1obmark").innerHTML="0";
        document.getElementById("c1marked").style.color="peru";
        document.getElementById("c1obmark").style.color="peru";
        c1score=0;
    }
    if(c2==0){
        document.getElementById("c2marked").innerHTML="-";
        document.getElementById("c2obmark").innerHTML="0";
        document.getElementById("c2marked").style.color="peru";
        document.getElementById("c2obmark").style.color="peru";
        c2score=0;
    }
    if(c3==0){
        document.getElementById("c3marked").innerHTML="-";
        document.getElementById("c3obmark").innerHTML="0";
        document.getElementById("c3marked").style.color="peru";
        document.getElementById("c3obmark").style.color="peru";
        c3score=0;
    }
    if(c4==0){
        document.getElementById("c4marked").innerHTML="-";
        document.getElementById("c4obmark").innerHTML="0";
        document.getElementById("c4marked").style.color="peru";
        document.getElementById("c4obmark").style.color="peru";
        c4score=0;
    }
    if(c5==0){
        document.getElementById("c5marked").innerHTML="-";
        document.getElementById("c5obmark").innerHTML="0";
        document.getElementById("c5marked").style.color="peru";
        document.getElementById("c5obmark").style.color="peru";
        c5score=0;
    }
    if(c6==0){
        document.getElementById("c6marked").innerHTML="-";
        document.getElementById("c6obmark").innerHTML="0";
        document.getElementById("c6marked").style.color="peru";
        document.getElementById("c6obmark").style.color="peru";
        c6score=0;
    }
    if(c7==0){
        document.getElementById("c7marked").innerHTML="-";
        document.getElementById("c7obmark").innerHTML="0";
        document.getElementById("c7marked").style.color="peru";
        document.getElementById("c7obmark").style.color="peru";
        c7score=0;
    }
    if(c8==0){
        document.getElementById("c8marked").innerHTML="-";
        document.getElementById("c8obmark").innerHTML="0";
        document.getElementById("c8marked").style.color="peru";
        document.getElementById("c8obmark").style.color="peru";
        c8score=0;
    }
    if(c9==0){
        document.getElementById("c9marked").innerHTML="-";
        document.getElementById("c9obmark").innerHTML="0";
        document.getElementById("c9marked").style.color="peru";
        document.getElementById("c9obmark").style.color="peru";
        c9score=0;
    }
    if(c10==0){
        document.getElementById("c10marked").innerHTML="-";
        document.getElementById("c10obmark").innerHTML="0";
        document.getElementById("c10marked").style.color="peru";
        document.getElementById("c10obmark").style.color="peru";
        c10score=0;
    }
}



















nameofstudentarray=[];
function Submit(){
    var Sname1=document.getElementById("name1").value;
    var Sname2=document.getElementById("name2").value;
    var Sname3=document.getElementById("name3").value;
    var Sname4=document.getElementById("name4").value;
    nameofstudentarray.push(Sname1);
    nameofstudentarray.push(Sname2);
    nameofstudentarray.push(Sname3);
    nameofstudentarray.push(Sname4);
    console.log(nameofstudentarray);
    document.getElementById("displayName").innerHTML=nameofstudentarray;
    document.getElementById("SubmitButton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){
    nameofstudentarray.sort();
    console.log(nameofstudentarray);
    document.getElementById("displayName").innerHTML=nameofstudentarray;
}

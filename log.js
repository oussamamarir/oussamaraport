document.getElementById("btn").addEventListener("click",verification);
function verification(){
    let username =document.forms["loggin"]["c1"].value;
    let email =document.forms["loggin"]["c2"].value;
    let password =document.forms["loggin"]["c3"].value;
    let passwordconf =document.forms["loggin"]["c4"].value;
    let emailpat = /@\w.\w/ ;
    let passwordpat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*])/;
    if (username.length<3 || username.length>25 )
    {alert("the user name not valid");}
    else if(!emailpat.test(email)){
        alert("enter a valid email adress");}
    else if(password.length<8 || !passwordpat.test(password)){
        alert("enter a valid password ");}
    else if(password!=passwordconf){
        alert("the two passwords need to match"); }
    else{
        window.open("page22.html",'_self'); }
        
       
    
}
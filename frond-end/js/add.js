document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    
    let ID=document.getElementById("ID").value;
    let name=document.getElementById("name").value;
    let salary=document.getElementById("salary").value;
    let designation=document.getElementById("designation").value;
    let experience=document.getElementById("experience").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    console.log(ID,name,salary,designation,experience,phone,email,profile);

    await fetch("http://localhost:3000/api/addemployee",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ID,name,salary,designation,experience,phone,email,profile})

    }).then((res)=>{
        if(res.status==201){
            alert("Success")
            window.location.href="../index.html"
        }
        else if(res.status==400){
            alert("ID Already Exist")
        }
        else{
            alert("Unable to save data")
        }
    }).catch((error)=>{
        console.log(error);
        
    })

    


})




function validatePhone(phone){
    // console.log(phone);
    let regEx=/^[6-9]\d{9}/
    console.log(regEx.test(phone));
    
    if ((regEx.test(phone))){
        document.getElementById("phn").textContent=""
    }
    else{
        document.getElementById("phn").textContent="Phone Number Is Invalid"
        document.getElementById("phn").style.color="red"
        document.getElementById("phn").style.fontSize=12+"px"
        document.getElementById("phn").style.fontWeight="bold"




    }
    document.getElementById("phone").addEventListener("keyup", function() {
        if (document.getElementById("phone").value== "") {
            document.getElementById("phn").textContent = "";
        }
    });



}

function emailValidation(email){
    let regEx=/^[A-Z,a-z][a-z,0-9,.]+@[a-z]+([\.][a-z]{3})/
    if ((regEx.test(email))){
        document.getElementById("em").textContent=""
    }
    else{
        document.getElementById("em").textContent="Invalid"
        document.getElementById("em").style.color="red"
        document.getElementById("em").style.fontSize=12+"px"
        document.getElementById("em").style.fontWeight="bold"




    }
    document.getElementById("email").addEventListener("keyup", function() {
        if (document.getElementById("email").value== "") {
            document.getElementById("em").textContent = "";
        }
    });


}


// image  code
let profile;

async function getProfile() {
    console.log(document.getElementById("profile").files[0]);
    profile=await convertBase64(document.getElementById("profile").files[0]);
    document.getElementById("emp-img").src=profile

    
    
}

function convertBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })

}





   


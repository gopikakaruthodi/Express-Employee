let employee;
async function getData() {
    const res=await fetch("http://localhost:3000/api/getemployee");
    console.log(res); 
    employee=await res.json()
    console.log(employee);
    str=``
    employee.map((emp)=>{        
        str+=` <a href="./pages/employee.html?id=${emp._id}">
                    <div class="card">
                        <div class="emp-img">
                            <img src=${emp.profile} alt="">
                        </div>
                        <div class="details">
                            <h4>${emp.name}</h4>
                            <p>${emp.designation}</p>
                        </div>

                    </div>
                 </a>`
        

    })
    document.getElementById("emp-card").innerHTML=str
    

    
}
getData()


// search

document.getElementById("search").addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    console.log(employee);
    let fData=employee.filter((emp)=>emp.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
    console.log(fData);
    

    str=``

    fData.map((emp)=>{
        str+=`      <a href="./pages/employee.html?id=${emp._id}">
                    <div class="card">
                        <div class="emp-img">
                            <img src="./images/emp_pic.jpg" alt="">
                        </div>
                        <div class="details">
                            <h4>${emp.name}</h4>
                            <p>${emp.designation}</p>
                        </div>

                    </div>
                 </a>`

    })
    document.getElementById("emp-card").innerHTML=str  

    
})




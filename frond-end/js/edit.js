const url =window.location.href
console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
console.log(urlParams);
const id=urlParams.get("id")
console.log(id);

async function getData() {
    const res=await fetch(`http://localhost:3000/api/editemployee/${id}`);
    console.log(res); 
    const emp=await res.json()
    console.log(emp);
    document.getElementById("forms").innerHTML=`<table>
                <tr>
                    <td> EmpID:</td>
                    <td class="input" ><input type="text" name="ID" id="ID"  value="${emp.ID}" placeholder="EMP001" disabled=true ></td>
                </tr>
                <tr>
                    <td> Name:</td>
                    <td class="input" ><input type="text" name="name" id="name" value="${emp.name}" placeholder="Dona"></td>
                </tr>
                <tr>
                    <td>Salary:</td>
                    <td class="input" ><input type="number" name="salary" id="salary" value="${emp.salary}"></td>
                </tr> 
                <tr>
                    <td>Experience:</td>
                    <td class="input" ><input type="number" name="experience" id="experience" value="${emp.experience}"></td>
                </tr>
                <tr>
                    <td>Designation:</td>
                    <td class="input" ><input type="text" name="designation" id="designation" value="${emp.designation}"></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td class="input" ><input type="text" name="phone" id="phone" value="${emp.phone}"></td>
                </tr>
                
                <tr>
                    <td>Email:</td>
                    <td class="input" ><input type="email" name="email" id="email" value="${emp.email}"></td>
                </tr>
                <tr>
                    <td><input type="submit" value="add" class="button"></td>
                </tr>

            </table>`

    
}
getData()


document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    let ID=document.getElementById("ID").value;
    let name=document.getElementById("name").value;
    let salary=document.getElementById("salary").value;
    let designation=document.getElementById("designation").value;
    let experience=document.getElementById("experience").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    console.log(ID,name,salary,designation,experience,phone,email);

    const res=await fetch(`http://localhost:3000/api/updateemployee/${id}`,{
        method:"put",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ID,name,salary,designation,experience,phone,email})

    })

    if(res.status==201){
        console.log(res);
        
        const data=await res.json()
        console.log(data);
        alert(data.msg)
        getData()
        window.location.href="../index.html"
    }
    else{
        alert("Something went wrong,please try again")
    }

})
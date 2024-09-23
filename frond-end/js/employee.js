const url =window.location.href
console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
console.log(urlParams);
const id=urlParams.get("id")
console.log(id);



async function getData() {
    const res=await fetch(`http://localhost:3000/api/getemploy/${id}`);
    console.log(res); 
    const emp=await res.json()
    console.log(emp._id);
    

    document.getElementById("forms").innerHTML=`<div class="card">
                <div class="emp-cards" id="card">
                    <img src="../images/emp_pic.jpg" alt="">
                </div>
                <div class="emp-content">
                    <table>
                        <tr>
                            <td> EmpID:</td>
                            <td class="input" ><input type="text" name="ID" id="ID" value="${emp.ID}" disabled="true"></td>
                        </tr>
                        <tr>
                            <td> Name:</td>
                            <td class="input" ><input type="text" name="name" id="name" value="${emp.name}" disabled="true"></td>
                        </tr>
                        <tr>
                            <td>Salary:</td>
                            <td class="input" ><input type="text" name="salary" id="salary" value="${emp.salary}" disabled="true"></td>
                        </tr> 
                        <tr>
                            <td>Experience:</td>
                            <td class="input" ><input type="number" name="experience" id="experience" value="${emp.experience}" disabled="true"></td>
                        </tr>
                        <tr>
                            <td>Designation:</td>
                            <td class="input" ><input type="text" name="designation" id="designation" value="${emp.designation}" disabled="true"></td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td class="input" ><input type="number" name="phone" id="phone" value="${emp.phone}" disabled="true"></td>
                        </tr>
                        
                        <tr>
                            <td>Email:</td>
                            <td class="input" ><input type="email" name="email" id="email" value="${emp.email}" disabled="true"></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td>
                                <a href="./edit.html?id=${emp._id}">
                                    <button type="button" class="edit-btn">Edit</button>
                                </a>
                                <button type="button" class="delete-btn" onclick="deleteEmployee('${emp._id}')">Delete</button>
                        </td>
                    </tr>
    
                    </table>
                    
    
                </div>
            </div>`
    

    
}
getData();


async function deleteEmployee(id) {
    console.log(id); 
    if(confirm("Do You Want To Delete The Employee?")){
        const res=await fetch(`http://localhost:3000/api/deleteemployee/${id}`,{
            method:"DELETE"
        })

        if(res.status==200){
            let data=await res.json()
            alert(data.msg)
            getData()
            window.location.href="../index.html"
    
        }
        else{
            alert("Failed To Delete");
        }
    }  

    
}

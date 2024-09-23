import empSchema from "./employee.model.js"



export async function addEmployee(req,res){
    try {
        console.log(req.body);
        const{ID,name,salary,designation,experience,phone,email}=req.body
        console.log(ID,name,salary,designation,experience,phone,email);
        // Fields empty
        if(!(ID&&name&&salary&&designation&&experience&&phone&&email)){
            return res.status(404).send({msg:"Fields Are Empty"})
        }
        // id already exist
        let checkID=await empSchema.findOne({ID})
        if(!checkID){
            await empSchema.create({ID,name,salary,designation,experience,phone,email}).then((data)=>{
                res.status(201).send({msg:data})
                
            }).catch((error)=>{
                res.status(201).send({msg:error})
            })

        }
        else{
            res.status(400).send({msg:"ID Already Exist"}) 
        }




    
    } catch (error) {
        console.log(error);
        
        
    }
}
export async function getEmployee(req,res){
    try {
        console.log("hello world");
        const employee=await empSchema.find()
        console.log(employee);
        res.status(200).send(employee)
        

    } catch (error) {
        console.log(error);
        
        
    }
}
export async function getEmploy(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        const employee=await empSchema.findOne({_id})
        console.log(employee);
        res.status(200).send(employee)
        

    } catch (error) {
        console.log(error);
        
        
    }
}

export async function editEmployee(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        const employee=await empSchema.findOne({_id})
        console.log(employee);
        res.status(200).send(employee)
        

    } catch (error) {
        console.log(error);
        
        
    }
}


export async function updateEmployee(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        console.log(req.body);
        const{ID,name,salary,designation,experience,phone,email}=req.body
        console.log(ID,name,salary,designation,experience,phone,email);
        // Fields empty
        if(!(ID&&name&&salary&&designation&&experience&&phone&&email)){
            return res.status(404).send({msg:"Fields Are Empty"})
        }
        // id already exist

        await empSchema.updateOne({_id},{$set:{ID,name,salary,designation,experience,phone,email}}).then(()=>{
            res.status(201).send({msg:"update successfully"})
            
        }).catch((error)=>{
            res.status(201).send({msg:error})
        })
    
    } catch (error) {
        console.log(error);
        
        
    }
}

export async function deleteEmployee(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        console.log(_id);
        await empSchema.deleteOne({_id}).then(()=>{
            res.status(200).send({msg:"Deleted"})  
        }).catch((error)=>{
            res.status(404).send({msg:error})  
        })
       

    } catch (error) {
        console.log(error);
        
        
    }
}


exports.getEmployee = async(req,res)=>{
    res.send(`get all employees`);
};

exports.getEmployeeById = async(req,res)=>{
    res.send(`Get emp by id : ${req.params.id}`);
}

exports.getEmployeeByTax = async(req,res)=>{
    const sal = req.params.sal
    const tax = sal*10/100 ;
    res.send(`Your tax : ${tax}`);
}

exports.getEmployeeByAge = async(req,res)=>{
    const age = req.params.age
    const retire = 60 - age 
    res.send(`retire before : ${retire}`);
}

exports.postEmployeeById = async(req,res)=>{
    res.send(`id : ${req.body.id}, name :${req.body.name} , age :${req.body.age}, salary :${req.body.salary}`);
}



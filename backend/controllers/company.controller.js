import {Company} from "../models/company.model.js";

export const registerCompany = async(req,res) =>{
    try{
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"company name is required",
                success:false
            });
        }
        let company = await Company.findOne({name:companyName});
        // if(company)
    }
    catch (error) {
        console.log(error);
    }
}
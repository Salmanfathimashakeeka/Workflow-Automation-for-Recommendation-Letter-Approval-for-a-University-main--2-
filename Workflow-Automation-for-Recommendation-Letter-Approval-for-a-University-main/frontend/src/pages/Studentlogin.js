import React, { useState} from "react";
 
 const Studentlogin = () => {

    const [staffId, setStaffId] = useState(""); 
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Staff Login Details:", { staffId, password });
      
    };
  

   return (
     <div>
       
     </div>
   )
 }
 
 export default StaffLogin;
 
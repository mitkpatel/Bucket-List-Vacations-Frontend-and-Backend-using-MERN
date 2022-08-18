import React,{useState} from 'react'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: "",
        
    });

    
    const [fError, setfError] = useState("");
    const [lError, setlError] = useState("");
    const [eError, seteError] = useState("");
    const [pError, setpError] = useState("");


    const onCreateAccount = (evt)=>{

        setfError("");
        setlError("");
        seteError("");
        setpError("");

        
        let numOfErrors = 0;
console.log(numOfErrors);

        if(formData.firstName === "")
        {
            setfError("First Name is required");
            numOfErrors += 1;
        }
        if(formData.lastName === "")
        {
            setlError("Last Name is required");
            numOfErrors += 1;
            
        }
        if(formData.email === "")
        {
            seteError("email is required");
            numOfErrors += 1;
            
        }
        
        if(formData.password === "")
        {
            setpError("Password is required");
            numOfErrors += 1;
            
        }

        console.log(numOfErrors);
        evt.preventDefault();

        if(numOfErrors ==0){
        fetch("https://shopmart-web.herokuapp.com/user/createAUser",{
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(json=>{
    
              alert(json.message);
              setFormData({
                firstName : "",
                lastName : "",
                email: "",
                password: "",
                
            })
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    }
    }



    return (
            <div className="loginbox signUp"> 
    <h1 className="login">Sign Up</h1>
    <form className="form" action="/" onSubmit={onCreateAccount}>
    <p>First Name</p>
    <input type="text" name="name" placeholder="Enter your Name" value={formData.firstName}  onChange={(evt)=>{
                            setFormData({...formData, firstName : evt.target.value});
                        }}  />
    <div className="error">{fError}</div>


    <p>Last Name</p>
    <input type="text" name="name" placeholder="Enter your Name"   value={formData.lastName}  onChange={(evt)=>{
                            setFormData({...formData, lastName : evt.target.value});
                        }}/>
    <div className="error">{lError}</div>

    <p>Email</p>
    <input type="email" name="email" placeholder="Enter your email" value={formData.email}  onChange={(evt)=>{
                            setFormData({...formData, email : evt.target.value});
                        }}/>

    <div className="error">{eError}</div>


    <p>Password</p>
    <input type="Password" name="password" placeholder="Enter your Password" value={formData.password}  onChange={(evt)=>{
                            setFormData({...formData, password : evt.target.value});
                        }}/>

    <div className="error">{pError}</div>


    <input type="submit" name="submit" value="Sign Up"/><br/>

    <a href="/user/login"><b> Already Have an account?</b></a>		
        </form>
    </div>


 )
}

export default RegistrationForm

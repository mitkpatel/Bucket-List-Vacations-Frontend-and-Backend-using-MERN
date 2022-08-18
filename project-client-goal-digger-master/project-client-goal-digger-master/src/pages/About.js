
import { useState, useEffect } from "react";
import axios from 'axios';



const About = () => {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        sendGetRequest();
    }, []);

    const sendGetRequest = async () => {
        try{

            const response = await axios.get('http://localhost:8000/api/about')

            setAbout(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="pt-24">
            <div className="float-right w-1/2 mt-6">
                <img src="https://ruemerc.co.ke/wp-content/uploads/2021/09/About-Us.png" className="w-full" />
            </div>
           
                <div>
                    {about.map((p) => (<AboutUs aboutUs={p} key={p._id} />
                    ))}
                </div>
            
            

            
            
        </div>
        
    );
    
};

const AboutUs = ({ aboutUs }) => {
    return(
        

        <div className="w-1/3 p-3 mb-10 ml-4 bg-indigo-600 rounded-lg drop-shadow-2xl">
                 <h3 className="mb-6 text-white">{aboutUs.heading}</h3>
                 <p className="text-xl text-white"> {aboutUs.detail}</p>
        </div>
    
    );
};

export default About;
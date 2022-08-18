
import { useState, useEffect } from "react";
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';

 
const Popular = () => {
    const [popular, setPopular] = useState([]);

    




    useEffect(() => {
        sendGetRequest();
    }, []);

    const sendGetRequest = async () => {
        try{
            const response = await axios.get('http://localhost:8000/api/popular')
            setPopular(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="pb-4 pt-28 bg-gradient-to-r from-sky-500 to-indigo-500">
            {popular.map((p) => (<PopularBucket popBucket={p} key={p._id} />
            ))}
        </div>
    );
    
};

const PopularBucket = ({ popBucket }) => {
    
    return(
        <div>
                
                <form className="w-1/2 p-4 mb-4 text-black transition duration-300 ease-in-out delay-150 bg-white rounded-md shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-red-200 ml-80 h-fit hover:shadow-black hover:shadow-lg "  onSubmit={(e) => this.onSubmit(e)}>
                
                {/* <button className="float-right text-black bg-white border-none" >
                    <CancelIcon/>
                    </button> */}

                    
                    <div className="float-right w-1/4 mr-26">
                        <img src={popBucket.photo} alt="image"/>
                    </div>
                    
                    <div className="w-3/4">
                    <h3>{popBucket.title}</h3>
                    <p> Location: {popBucket.location}</p>
                    <p> Category: {popBucket.category}</p>
                    <p> Budget: {popBucket.budget}</p>
                    </div>
                    
                    
                    
                    
                </form>

              
                 
        </div>
    
    );
};
export default Popular;

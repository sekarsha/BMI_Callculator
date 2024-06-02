import  { useState } from 'react'

const Bmi = () => {

   const[height,setheight]=useState("");
   const[weight,setweight]=useState("");
   const[bmi,setbmi]=useState("null");
   const[status,setstatus]=useState("");

   const callculat=()=>{

    if(height && weight){

        const heightinmeter=height/100;
        const bmivalu=weight/(heightinmeter*heightinmeter);
        setbmi(bmivalu.toFixed(2));
        if(bmivalu<18.5){
            setstatus("Under weight");
        }

        else if(bmivalu>=18.5 && bmivalu < 24.9){
            setstatus("Normal weight" );
            
        }

        
        else if(bmivalu>=25 && bmivalu < 29.9){
            setstatus("Over Weight சரியான சத்துள்ள உணவை அளவுடன் உட்கொள்ள வேண்டும்");
        }

        else{
            setstatus("Obese  மருத்துவரை அணுகவும் ");
        }
    
    }





    else{
        setbmi(null);
        setstatus("")
    }

   }



  return (
    <div className=' d-flex justify-content-center align-content-center align-items-center vh-100 sha p-3'>  

        <div className=' p-2 border sha1 rounded rounded-3'>

          <div className=' row'>
              <h1 className=' text-center fw-bold font-monospace text-black'>BMI  calculator</h1>
             <div className='col align-items-center align-content-center'>
         

            <div className=' align-items-center gap-2 m-3'>
                <label htmlFor=""   className=' form-labe fw-bold text-black' >Height(cm) </label>
                <input  value={height} onChange={(e)=>setheight(e.target.value)}     type="number" className=' form-control mt-2' />
            </div>
            <div className='  align-items-center gap-2 m-3'>
                <label htmlFor="" className=' form-label fw-bold text-black' >Weight(kg)</label>
                <input  onChange={(e)=>setweight(e.target.value)}     value={weight}    type="number" className=' form-control' />
            </div>
            
            <div className=' m-3'>
                <button onClick={callculat} className='btn btn-primary' >Sumbite</button>
            </div>

            {bmi !==null && (<div>
                <p className=' fw-bold '>Your BMI IS :{bmi}</p>
                <p className=' fw-bold '> {status} </p>
            </div>
             )} 


             <div><p style={{fontSize:"10px"}} className=' text-center'  >Designed by @<a href="https://github.com/sekarsha">Sekar</a></p></div>

            

             </div>
            

          </div>


            
        </div>
        
       

    </div>
  )
}

export default Bmi
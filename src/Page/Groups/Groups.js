import React, { Fragment ,useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import TextLoop from "react-text-loop";
import imgGroup from "./Groups.png"
import EmailForm from '../../Components/EmailForm/EmailForm';

function Groups(props) {
    const [options, setOptions] = useState(["Collaborate", "Communicate"]);
  const [interval, setInterval] = useState(0);

  useEffect(() => {
    const optionsTimeout = setTimeout(() => {
      setOptions([
        "Collaborate", "Communicate",
      "Discuss",
      "Learn",
      "Groups",
      "Comming Soon.."
        
      ]);
      console.log("change options");
    }, 1000);

    return () => {
      clearTimeout(optionsTimeout);
    };
  }, []);

  useEffect(() => {
    const intervalStartTimeout = setTimeout(() => {
      console.log("start");
      setInterval(1000);
    }, 1000);
    return () => {
      clearTimeout(intervalStartTimeout);
    };
  }, []);

  useEffect(() => {
    const intervalStopTimeout = setTimeout(() => {
      setInterval(0);
      console.log("stop");
    }, 6000);

    return () => {
      clearTimeout(intervalStopTimeout);
    };
  }, []);

    return (
        <Fragment>
            {/* <div style={{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center"}}>
            <img src={imgGroup} height="50%" width="50%"></img>
            <h1 className="mt-1 max-w-2xl text-sm text-gray-500">More Features Comming Soon.</h1>
            </div> */}

            <div class="py-16">
  <div class="container m-auto px-6">

   <div class="lg:flex justify-between items-center">
       
       <div class="lg:w-6/12 lg:p-0 p-7">
          <h1 class="text-4xl font-bold leading-tight mb-5 capitalize"> <TextLoop interval={interval} children={options}/> </h1>
          <p class="text-xl">Study Discuss and Learn together with your friends in your classes. We are currently building this feature. Let us know if you have any suggestions</p>
        </div>
        <div class="lg:w-5/12 order-2">
          <img src={imgGroup}
           alt="" class="rounded"/>
        </div>
        
    </div>
    {/* <EmailForm/> */}
   

  </div>
</div>
            
        </Fragment>
    )
}

Groups.propTypes = {

}

export default Groups


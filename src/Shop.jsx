import React, { useState } from 'react'
import Header from './Header'
import { langData } from './data/langData';

const Shop = () => {
  if(localStorage.getItem("lang") === null){
    localStorage.setItem("lang","en");
  }

  const [myLangData,setMyLangData] = useState(localStorage.getItem("lang") === "en" ? langData.en : langData.az);

  const DilFunc = () => {
    if(localStorage.getItem("lang") === "en"){
      localStorage.setItem("lang","az");
    }else{
      localStorage.setItem("lang","en");
    }

    window.location.reload(true);
  }
  
  return (
    <div>
      <Header myLangData={myLangData} DilFunc = {DilFunc} />
    </div>
  )
}

export default Shop
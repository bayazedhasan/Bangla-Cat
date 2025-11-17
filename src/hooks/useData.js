import React, { useEffect, useState } from 'react';

const useData = () => {
    const [storiesData,setStoriesData] = useState([])
    useEffect(()=>{
        fetch("/storiesData.json")
        .then(res=>res.json())
        .then(data=>setStoriesData(data))
    },[])
    const [slides,setSlides] = useState([])
    useEffect(()=>{
        fetch("/slideData.json")
        .then(res=>res.json())
        .then(data=>setSlides(data))
    },[])
   
    
    return {storiesData,slides}
};

export default useData;
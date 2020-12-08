import React, {useState, useEffect} from 'react'

const FunctionalComp = () => {
    const [name, setName] = useState("Theodore");
    useEffect(
        ()=> console.log("index: app: functionalapp: useEffect: useEffect has loaded and fired.")
    );

    const handleButton = (evt) =>{
        setName("Teddy");
    }
    
    console.log("index: app: FunctionalComp: component has rendered.")
    return(
        <div>
            {console.log('index: app: functionalapp: FunctionalApp has loaded.')}
            <p>{name}</p>
            <button onClick={handleButton}>change name</button>
        </div>
    )
}

export default FunctionalComp;
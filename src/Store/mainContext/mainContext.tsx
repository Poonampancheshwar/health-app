import { createContext, useState } from "react";


const mainContext:any = createContext({
    healthData: []
});

const intialState = [
    {
        id: 0,
        HR : 120,
        SBP: 132,
        DBP:123,
        sugar:123,
        cal:123,
        hemoglobin:123,
        spo2: 123,
        name: 'arc'
    },
 ]




export const MainContextWrapper:React.FC<any> = (props) => {
    const [healthData, setHealthData] = useState(intialState);
    return(
        <mainContext.Provider value={
            {
                healthData: healthData
            }
        }>
           {props.children} 
        </mainContext.Provider>
    )
};

export default mainContext;

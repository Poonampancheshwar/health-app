import { useContext } from "react";
import mainContext from "../../Store/mainContext/mainContext";

const ShoHealthData = () => {
    const healthContext:any = useContext(mainContext);
    console.log('healthContext', healthContext)
    return (
        <div>
            Poonam show your data 
        </div>
    )
};
export default ShoHealthData;
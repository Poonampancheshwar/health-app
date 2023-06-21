import { useContext } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import HealthTable from "../../common/healthTable/healthTable";

const ShoHealthData = () => {
  const healthContext: any = useContext(mainContext);
  // const tHead: any = [];
  const { healthData } = healthContext;

  const tHead = [
    "id",
    "name",
    "DBP",
    "HR",
    "SBP",
    "cal",
    "hemoglobin",
    "spo2",
    "sugar",
  ];
  console.log("healthData", healthData);
  // const dynmicKey = tHead.map(th => th);

  // user[0]['id']
  return (
    <div>
      <HealthTable tHead={tHead} healthData={healthData} />
    </div>
  );
};
export default ShoHealthData;

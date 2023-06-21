import React from "react";



interface Props {
    healthData: any[];
  tHead: string[];
}

const HealthTable: React.FC<Props> = ({ tHead, healthData }) => {
  const tHeadContent = tHead.map((thValue: string) => {
    return (
      <th
      key={thValue}
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {thValue}
      </th>
    );
  });

  const tBodyContent = healthData.map((trValue:any) => {
    const id = 'id';

    const heartRateProjection = trValue.HR >= 120 ? 'high' : 'low';
    return ( <tr key={trValue.id}>
        <td className="px-6 py-4 whitespace-nowrap">{trValue[id]}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.DBP}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.HR}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.SBP}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.cal}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.hemoglobin}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.spo2}</td>
        <td className="px-6 py-4 whitespace-nowrap">{trValue.sugar}</td>
      </tr>)
  })

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
            {tHeadContent}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {tBodyContent}
      </tbody>
    </table>
  );
};

export default HealthTable;

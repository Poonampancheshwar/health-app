import React from 'react';
import logo from '../logo/kyKz5.png';


const MenuBar: React.FC<{
  buttonArr:any
}> = ({
  buttonArr
}) =>{
  const buttonContent = buttonArr.map((bt:any) => {
    return( <button
      key={bt.id}
      className="text-white" onClick = {bt.btFun}>
      {bt.label}
</button>)
  })

 return (
    <div className="bg-blue-500 flex justify-between items-center py-2 px-4">
      <div className="flex space-x-4 items-center">
        <img src={logo} alt="Logo" className="h-6" />
         {buttonContent}
         </div>
      <div>
        <button className="text-white">Log In</button>
      </div>
    </div>
  );
  }

export default MenuBar;

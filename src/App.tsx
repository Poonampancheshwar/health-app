import React, { useState } from 'react';
import './App.css';
import MenuBar from './MenuBar/MenuBar';
import AddHealthData from './componets/AddHealthData/AddHealthData';
import ShoHealthData from './componets/ShoHealthData/ShoHealthData';
import AnHealthData from './componets/AnHealthData/AnHealthData';
import {MainContextWrapper} from './Store/mainContext/mainContext';


function App() {
  const [loadComponents, setLoadComponents] = useState(<ShoHealthData/>)
  
  const buttonArr = [
      { id:1, label:'Add-health', btFun : () => {setLoadComponents(<AddHealthData/>)}
      },
      { id:2, label:'Show-health', btFun : () => {setLoadComponents(<ShoHealthData/>)} 
      },
      { id:3, label:'Analitics-health',btFun : () => {setLoadComponents(<AnHealthData/>)}
      },
    ];
   
  return (
    <MainContextWrapper>
    <div>
      <MenuBar buttonArr={buttonArr}/>
      {loadComponents}
    </div>
    </MainContextWrapper>
  );
}

export default App;

import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Background from './components/background/background';
import Dot from './components/dot/dot';
import Input from './components/input/input';

function App() {
  const [state, setState]=useState("");
  const [dotArray, setDotArray] = useState([]);

  const showDots = useCallback(() => {
    let initalVal = state;
    let resultArray = [];
    const emptyDotArray = [" "," "," "," "," "," "," "," "," "];

    // turn state into 2-dimension array
    initalVal = initalVal.split(/\r?\n|\r|\n/g).filter(n => n);
    initalVal.forEach((val, index) => initalVal[index] = val.split(""));
    // generate the dot color into an array 
    for(let i = 0; i < 9; i++){
      resultArray[i] = 'gr';
      for(let j=0; j < initalVal.length; j++){
        if(parseInt(initalVal[j][i]) === 0){
          resultArray[i] = 'yw';
        }
        if(j === initalVal.length -1 && parseInt(initalVal[j][i]) === 0){
          resultArray[i] = 'rd'
        }
      }
    }

    if (initalVal.length === 0){
      setDotArray(emptyDotArray)
    }else {
      setDotArray(resultArray)
    }
    

  },[state]);

  useEffect(() => {
    showDots();
  }, [showDots]);
  
  const callback = (result) => {
    setState(result)
  }


  return (
    <div className="App" data-testid="App">
      <Background>
        {dotArray? dotArray.map((val, index) => (
          <Dot key={index + 1} colorCode={val} dotId={index + 1}></Dot>
        )) : null 
        }
      </Background>
      <div>
        <Input callback={callback}/>
      </div>      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Calc.css';

function Calc() {
    const [expr,setExpr] = useState('')
    const [answer,setAnswer] = useState('')


    const userInput = (e)=>{
        if(e.target.value === 'ac'){
            setExpr('');
        }
        else if(e.target.value === 'clr'){
            setExpr(prev => prev.slice(0,-1))
        }
        else if(e.target.value === 'ans'){
            setExpr(answer)
        }
        else{
            setExpr(prev => prev += e.target.value);
        }

    }

    const userEval = ()=>{
        if(expr != ''){
            try{
                const result = eval(expr);
                const resultString = String(result);
                setAnswer(resultString);
                setExpr(resultString);
            }
            catch(error){
                setExpr("ERROR");
                setTimeout(()=>{setExpr("")},1000);
            }
        }else{
            setExpr('')
        }
    }
  return (
    <div className='container'>
        <div className='mainCont'>
            <div className='calcContainer'>
                    <div className='eachInp'>
                        <input className="display" type="text" readOnly={true} value={expr || '0'}/>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  Value={'ac'} onClick={(evnt)=>userInput(evnt)}><strong>AC</strong></button>
                        <button type='button' className="eachButton"  Value={'clr'} onClick={(evnt)=>userInput(evnt)}>DEL</button>
                        <button type='button' className="eachButton"  Value={'**'} onClick={(evnt)=>userInput(evnt)}>^</button>
                        <button type='button' className="eachButton"  Value={'%'} onClick={(evnt)=>userInput(evnt)}>%</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  Value={'7'} onClick={(evnt)=>userInput(evnt)}>7</button>
                        <button type='button' className="eachButton"  Value={'8'} onClick={(evnt)=>userInput(evnt)}>8</button>
                        <button type='button' className="eachButton"  Value={'9'} onClick={(evnt)=>userInput(evnt)}>9</button>
                        <button type='button' className="eachButton"  Value={'/'} onClick={(evnt)=>userInput(evnt)}>&#247;</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  Value={'4'} onClick={(evnt)=>userInput(evnt)}>4</button>
                        <button type='button' className="eachButton"  Value={'5'} onClick={(evnt)=>userInput(evnt)}>5</button>
                        <button type='button' className="eachButton"  Value={'6'} onClick={(evnt)=>userInput(evnt)}>6</button>
                        <button type='button' className="eachButton"  Value={'*'} onClick={(evnt)=>userInput(evnt)}>&#xd7;</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  Value={'1'} onClick={(evnt)=>userInput(evnt)}>1</button>
                        <button type='button' className="eachButton"  Value={'2'} onClick={(evnt)=>userInput(evnt)}>2</button>
                        <button type='button' className="eachButton"  Value={'3'} onClick={(evnt)=>userInput(evnt)}>3</button>
                        <button type='button' className="eachButton"  Value={'-'} onClick={(evnt)=>userInput(evnt)}>-</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  Value={'0'} onClick={(evnt)=>userInput(evnt)}>0</button>
                        <button type='button' className="eachButton"  Value={'.'} onClick={(evnt)=>userInput(evnt)}>.</button>
                        <button type='button' className="eachButton"  Value={answer} onClick={(evnt)=>userInput(evnt)}>ANS</button>
                        <button type='button' className="eachButton"  Value={'+'} onClick={(evnt)=>userInput(evnt)}>+</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton eachEq"  color="success" Value={'='} onClick={()=>userEval()}><strong>=</strong></button>
                    </div>
            </div>
        </div>
        
       
    </div>
  )
    
  
}

export default Calc
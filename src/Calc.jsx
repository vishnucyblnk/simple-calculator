import React, { useState } from 'react';
import './Calc.css';

function Calc() {
    const [expr,setExpr] = useState('')
    const [display, setDisplay] = useState('0');
    const [answer,setAnswer] = useState('')


    const userInput = (value)=>{
        if(value === 'ac'){
            setExpr('');
            setDisplay('0')
        }
        else if(value === 'clr'){
            setExpr(expr.slice(0,-1))
            setDisplay('0')
        }
        else if(value === 'ans'){
            setExpr(answer)
            setDisplay(answer)
        }
        else{
            setExpr(expr+value)
            setDisplay(expr+value)
        }

    }

    const userEval = ()=>{
        if(expr != ''){
            try{
                setExpr(eval(expr).toString());
                setAnswer(eval(expr).toString());
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
                        {expr? expr : 0}
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('ac')}><strong>AC</strong></button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('clr')}>DEL</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('**')}>^</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('%')}>%</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('7')}>7</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('8')}>8</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('9')}>9</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('/')}>&#247;</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('4')}>4</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('5')}>5</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('6')}>6</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('*')}>&#xd7;</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('1')}>1</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('2')}>2</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('3')}>3</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('-')}>-</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('0')}>0</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('.')}>.</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput(answer)}>ANS</button>
                        <button type='button' className="eachButton"  onClick= {()=>userInput('+')}>+</button>
                    </div>
                    <div className='eachRow'>
                        <button type='button' className="eachButton eachEq" onClick={()=>userEval()}><strong>=</strong></button>
                    </div>
            </div>
        </div>
        
       
    </div>
  )
    
  
}

export default Calc
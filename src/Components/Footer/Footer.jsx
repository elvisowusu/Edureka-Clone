import AfterNav from "./AfterNav";
import BeforeNav from "./BeforeNav";
import Navbar from "./Navbar";
import { useEffect, useReducer} from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case 'CLOSE':
            return {...state,clickClose:!state.clickClose}
        case 'SCREENRESIZE':
            return {...state,screenWidth:window.innerWidth}
        default:
            return state
    }
}

function Footer() {

   const [state, dispatch]=useReducer(reducer,{clickClose:true,screenWidth:window.innerWidth})
   useEffect(() => {
    const handleresize=()=>{
        dispatch({type:'SCREENRESIZE'});
    }
    window.addEventListener('resize',handleresize);
    return () => {
        window.removeEventListener('resize',handleresize)
    };
   }, [])
   const handleClickClose=()=>{
    dispatch({type:'CLOSE'})
   }

    return (
        <div className="text-[14px]">
            {state.clickClose && <BeforeNav clickClose={state.clickClose} handleClickClose={handleClickClose} />}
            <Navbar clickClose={state.clickClose} handleClickClose={handleClickClose} />
            <AfterNav screenWidth={state.screenWidth}/> 
        </div>
    );
}

export default Footer;

import AfterNav from "./AfterNav";
import BeforeNav from "./BeforeNav";
import GrabOffer from "./GrabOffer";
import Navbar from "./Navbar";
import { useEffect, useReducer} from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case 'CLOSE':
            return {...state,clickClose:!state.clickClose}
        case 'SCREENRESIZE':
            return {...state,screenWidth:window.innerWidth}
        case 'GRABOFFER':
            return {...state,grabOffer:!state.grapOffer}
        default:
            return state
    }
}

function Footer() {

   const [state, dispatch]=useReducer(reducer,{clickClose:true,screenWidth:window.innerWidth,grabOffer:false})
   useEffect(() => {
    const handleresize=()=>{
        dispatch({type:'SCREENRESIZE'});
    }
    window.addEventListener('resize',handleresize);
    return () => {
        window.removeEventListener('resize',handleresize)
    };
   }, [state.screenWidth])
   const handleClickClose=()=>{
    dispatch({type:'CLOSE'})
    console.log(state.clickClose)
   }
   const handleGrabOffer=()=>{
    dispatch({type:'GRABOFFER'})
   }

    return (
        <div className="text-[14px]">
            {state.grabOffer && <GrabOffer grabOffer={state.grabOffer} handleGrabOffer={handleGrabOffer}/>}
            {state.clickClose && <BeforeNav clickClose={state.clickClose} handleClickClose={handleClickClose} handleGrabOffer={handleGrabOffer}/>}
            <Navbar clickClose={state.clickClose} handleClickClose={handleClickClose} />
            <AfterNav screenWidth={state.screenWidth} handleresize={useEffect}/> 
        </div>
    );
}

export default Footer;

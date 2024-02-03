
import React,{ useEffect, useReducer} from "react";
import NewBeforeNav from "./newBeforeNav";
import NewNavbar from "./newNavbar";
import NewAfterNav from "./newAfterNav";

export const UserFooterContext = React.createContext()


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


function NewFooter() {

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
   }
   const content ={
    closeFunction:handleClickClose,
    closeState:state.clickClose,
    screenFunction:useEffect,
    screenState:state.screenWidth,
   }
    return (
        <div className="text-[14px]">
            <UserFooterContext.Provider value={content}>
              {state.clickClose && <NewBeforeNav/>}
              <NewNavbar/>
              <NewAfterNav/>
            </UserFooterContext.Provider>
        </div>
    );
}

export default NewFooter;

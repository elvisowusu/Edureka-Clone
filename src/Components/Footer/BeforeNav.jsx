import { MdClose } from "react-icons/md";
import { useState } from "react";

function BeforeNav(prop) {
    const [clickClose, setclickClose] = useState(prop.value)

    const Timer =[{dayTime:"00",name:"D "},
                  {dayTime:"00",name:"H "},
                  {dayTime:"00",name:"M "},
                  {dayTime:"00",name:"S "},
                 ]
    return (
        <>
        { clickClose?
            null
        :
        <div className="relative flex flex-col justify-center items-center ">
            <button onClick={()=>{setclickClose(!clickClose)}} className="absolute right-0 top-0"><MdClose /></button>
            <section>Makar Sankranti Offer</section>
            <section>- Flat 10% Off + 20% Cashback + Self Paced</section>
            <section>Course Free</section>
            <section><span>|</span> OFFER ENDING IN : </section>
            <section>
                {Timer.map((items,key)=>{
                    return(
                        <span key={key}>{items.dayTime} {items.name} </span>
                    )
                })}
                <button className="underline">GRAB NOW</button>
            </section> 
        </div>
        }
        </>
    );
}

export default BeforeNav;
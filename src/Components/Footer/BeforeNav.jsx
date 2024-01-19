import { MdClose } from "react-icons/md";

function BeforeNav({clickClose,handleClickClose}) {

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
            <button onClick={handleClickClose} className="absolute right-0 top-0"><MdClose /></button>
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




function BeforeNav() {
    const Timer =[{dayTime:"00",name:"D "},
                  {dayTime:"00",name:"H "},
                  {dayTime:"00",name:"M "},
                  {dayTime:"00",name:"S "},
                 ]
    return (
        <div className="relative flex flex-col justify-center items-center ">
            <button className="absolute right-0 top-0">close</button>
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
            </section>
            
        </div>
    );
}

export default BeforeNav;
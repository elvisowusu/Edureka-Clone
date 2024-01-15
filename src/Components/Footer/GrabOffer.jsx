import { AiOutlineClose } from "react-icons/ai";

function GrabOffer() {
    const Timer =[{dayTime:"00",name:"D "},
                  {dayTime:"00",name:"H "},
                  {dayTime:"00",name:"M "},
                  {dayTime:"00",name:"S "},
                 ]

    return (
        <div>
            <section className="relative p-[1.1rem]">
                <button className="absolute right-2 top-2 "><AiOutlineClose /> </button>
                <section className="border border-dashed p-[1rem]">
                    <p>
                        Maker Sankranti Offer - Flat 10% Off + 20% Cashback + Self Paced Course Free
                    </p>
                    <p>
                        Offer ending in
                    </p>
                    <section className="text-center">
                    {Timer.map((items,key)=>{
                    return(
                        <span key={key}>{items.dayTime} {items.name} </span>
                    )
                    })}
                    </section>
                </section>
            </section>
            <section className="flex flex-col justify-center">
                <section className="flex items-center">
                    <img className="h-[3rem]" src="https://previews.123rf.com/images/rukanoga/rukanoga1202/rukanoga120201859/12171053-green-plastic-package-with-a-big-word-50-isolated-on-white-background-3d-rendered.jpg" alt="giftbag" />
                    <h2>Avail Offer</h2>
                </section>
                <input type="email" name="availEmail" placeholder="e.g. sara@gmail.com*" required id="availEmail" /><br />
                <input type="number" required placeholder="Mobile Number*" name="availNumber" id="availrNumber" /><br />
                <button>AVAIL OFFER NOW</button>
            </section>
        </div>
    );
}

export default GrabOffer;
import { AiOutlineClose } from "react-icons/ai";

function GrabOffer({handleGrabOffer}) {
    const Timer =[{dayTime:"00",name:"D : "},
                  {dayTime:"00",name:"H : "},
                  {dayTime:"00",name:"M : "},
                  {dayTime:"00",name:"S "},
                 ]

    return (
        <div className="absolute w-full z-10">
            <section className="relative p-[1.1rem] bg-OfferHeading rounded-l-md pb-[2.5rem] mb-[1.6rem]">
                <button className="absolute right-2 top-2" onClick={handleGrabOffer}><AiOutlineClose /> </button>
                <section className="border border-dashed rounded-sm p-[1rem] text-white text-[1.25rem] bg-slate-50 bg-opacity-15 ">
                    <p className="topic font-semibold">
                        Month End Offer - Upto 30% Off
                    </p>
                    <p className="my-[0.4rem] text-[0.95rem]">
                        Offer ending in
                    </p>
                    <section className="text-center bg-OfferTimer rounded-md py-[0.3rem]">
                    {Timer.map((items,key)=>{
                    return(
                        <span className="font -" key={key}>{items.dayTime} {items.name} </span>
                    )
                    })}
                    </section>
                </section>
            </section>
            <section className="flex flex-col justify-center px-[2rem]">
                <section className="flex items-center gap-2 mb-4">
                    <img className="h-[3.7rem]" src="https://previews.123rf.com/images/rukanoga/rukanoga1202/rukanoga120201859/12171053-green-plastic-package-with-a-big-word-50-isolated-on-white-background-3d-rendered.jpg" alt="giftbag" />
                    <h2 className="text-[1.3rem] font-medium mt-3">Avail Offer</h2>
                </section>
                <input className="w-[100%] h-[45px] px-[12px] py-[6px] border border-[#c3c3c3] outline-none focus:border-blue-400 rounded-[0.3rem] focus:bg-blue-50" type="email" name="availEmail" placeholder="e.g. sara@gmail.com*" required id="availEmail" /><br />
                <input className="w-[100%] h-[45px] px-[12px] py-[6px] border border-[#c3c3c3] outline-none focus:border-blue-400 rounded-[0.3rem] focus:bg-blue-50" type="number" required placeholder="Mobile Number*" name="availNumber" id="availrNumber" /><br />
                <button className="bg-offerBtn w-[100%] h-[45px] font-bold rounded-[0.3rem] text-white" >AVAIL OFFER NOW</button>
            </section>
        </div>
    );
}

export default GrabOffer;
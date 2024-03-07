import { MdClose } from "react-icons/md";
import React,{ useState, useContext } from "react";
import NewGrabOffer from "./NewGrabOffer";
import { UserFooterContext } from "./newFooter";

export const UserGrabOfferContext=React.createContext()


function NewBeforeNav() {
  const [grabOffer, setGrabOffer] = useState(false);
  // Timer array with placeholders for day, hour, minute, and second
  const Timer = [
    { dayTime: "00", name: "D " },
    { dayTime: "00", name: "H " },
    { dayTime: "00", name: "M " },
    { dayTime: "00", name: "S " },
  ];
  
  const close = useContext(UserFooterContext);
  const handleGrabOffer = () => {
    setGrabOffer(!grabOffer);
    close.scroll;
  };

  const grabContent={
    grabFunction:handleGrabOffer,
    grabState:grabOffer
  }


  return (
    <>
    {grabOffer && 
    <UserGrabOfferContext.Provider value={grabContent}>
      <NewGrabOffer/>
    </UserGrabOfferContext.Provider>
    }

      {close.closeState && (
        <div className="relative flex flex-col justify-center items-center text-center bg-BeforeNavBg text-white text-[0.9rem] py-[0.6rem]">
          <button onClick={close.closeFunction} className="absolute right-3 top-3">
            <MdClose className="h-[1rem] w-[1rem]"/>
          </button>
          <section className="flex flex-col items-center">
            <span>Makar Sankranti Offer</span>
            <span>- Flat 10% Off + 20% Cashback + Self Paced</span>
            <span>Course Free</span>
          </section>
          <section className="relative w-full"><span className="absolute left-[1rem]">|</span> OFFER ENDING IN : </section>
          <section className="flex items-center gap-[1.2rem]">
            {Timer.map((items, key) => (
              <p key={key}><span className="bg-[#ec9704] px-[5px] py-[2px]">{items.dayTime}</span> <span>{items.name}</span> </p>
            ))}
            <button className="underline font-semibold underline-offset-4" onClick={handleGrabOffer}>GRAB NOW</button>
          </section>
        </div>
      )}
    </>
  );
}

export default NewBeforeNav;
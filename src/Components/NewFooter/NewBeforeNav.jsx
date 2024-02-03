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

  const handleGrabOffer = () => {
    setGrabOffer(!grabOffer);
  };

  const grabContent={
    grabFunction:handleGrabOffer,
    grabState:grabOffer
  }

  const close = useContext(UserFooterContext);

  return (
    <>
    {grabOffer && 
    <UserGrabOfferContext.Provider value={grabContent}>
      <NewGrabOffer/>
    </UserGrabOfferContext.Provider>
    }

      {close.closeState && (
        <div className="relative flex flex-col justify-center items-center">
          <button onClick={close.closeFunction} className="absolute right-3 top-1">
            <MdClose className="h-[1rem] w-[1rem]"/>
          </button>
          <section>Makar Sankranti Offer</section>
          <section>- Flat 10% Off + 20% Cashback + Self Paced</section>

          <section>Course Free</section>
          <section><span>|</span> OFFER ENDING IN : </section>
          <section>
            {Timer.map((items, key) => (
              <span key={key}>{items.dayTime} {items.name} </span>
            ))}
            <button className="underline" onClick={handleGrabOffer}>GRAB NOW</button>
          </section>
        </div>
      )}
    </>
  );
}

export default NewBeforeNav;
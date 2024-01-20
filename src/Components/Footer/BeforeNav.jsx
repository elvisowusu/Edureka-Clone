import { MdClose } from "react-icons/md";

function BeforeNav({ clickClose, handleClickClose }) {

  // Timer array with placeholders for day, hour, minute, and second
  const Timer = [
    { dayTime: "00", name: "D " },
    { dayTime: "00", name: "H " },
    { dayTime: "00", name: "M " },
    { dayTime: "00", name: "S " },
  ];

  return (
    <>
      {/* If cli
      ckClose is true, do not render the component */}
      {clickClose ? (
        <div className="relative flex flex-col justify-center items-center ">
          {/* Close button to handle click and close the component */}
          <button onClick={handleClickClose} className="absolute right-0 top-0">
            <MdClose />
          </button>

          {/* Section for Makar Sankranti Offer */}
          <section>Makar Sankranti Offer</section>

          {/* Section for discount and details */}
          <section>- Flat 10% Off + 20% Cashback + Self Paced</section>

          {/* Section for Course Free */}
          <section>Course Free</section>

          {/* Section for separator */}
          <section><span>|</span> OFFER ENDING IN : </section>

          {/* Section for displaying the timer */}
          <section>
            {Timer.map((items, key) => (
              <span key={key}>{items.dayTime} {items.name} </span>
            ))}
            <button className="underline">GRAB NOW</button>
          </section>
        </div>
      ):null}
    </>
  );
}

export default BeforeNav;

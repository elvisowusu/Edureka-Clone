import { RxLinkedinLogo } from "react-icons/rx";

function Reviews() {
    return (
        <div className="px-[0.6rem]">
            <h1 className='my-[1.5rem] text-[#404040] font-semibold'>Recent Additions</h1>
            <div className="flex flex-col px-[30px] py-[25px] mb-[15px] h-[250px] border">
                <section>
                    <img src="" alt="" />
                    <section>
                        <p><span>Name</span> <RxLinkedinLogo /></p>
                        <p>Profession</p>
                    </section>
                </section>
                <section>
                    <p>Course</p>
                    <p>Rating</p>
                </section> 
                <p>
                    content
                </p>
            </div>
        </div>
    );
}

export default Reviews;

function EdurekaEdge() {
    const Content=[{icon:'',h2:'Real Time Doubt Resolution',p:'with Live Instructors'},
                   {icon:'',h2:'Unlimited Access',p:'to Online Learning Repository'},
                   {icon:'',h2:'Learning Assistants',p:'to Guide When You Are Stuck'},
                   {icon:'',h2:'Track Your',p:'Career Growth'}
        ]
    return (
        <div className="mx-[0.6rem]">
            <p className="mt-[15px] font-semibold">The Edureka Edge</p>
            {Content.map((content,index)=>{
                return <div key={index} className="mt-[15px]">
                        <div >
                            <section className="h-[85px]">
                                <img src="" alt="" />
                            </section>
                            <section>
                                <h2>{content.h2}</h2>
                                <p>{content.p}</p>
                            </section>
                        </div>
                    </div>
            })}
        </div>
    );
}

export default EdurekaEdge;
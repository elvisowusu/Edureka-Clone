

function TrendingCoursesSlider() {
    const content =[{courseName:'DevOps Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#4fcdce,#975ae0)]",img:"",number:"",stars:""},
                    {courseName:'AWS Certification Training Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'ChatGPT Complete Course: Beginings to Advance',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Microsoft Power BI Certification Training Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'PMP Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#e59f39,#d475c5)]",img:"",number:"",stars:""},
                    {courseName:'Cyber Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#73db9d,#fcb279)]",img:"",number:"",stars:""},
                    {courseName:'Selenium Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#80d0c7,#166a9b)]",img:"",number:"",stars:""},
                    {courseName:'Python Programming Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#f9a652,#00c5b0)]",img:"",number:"",stars:""},
                    {courseName:'Salesforce Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#fddb92,#09adef)]",img:"",number:"",stars:""},
                    {courseName:'Microservices Certification Training Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Azure Data Engineer Certification Training Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Java Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#ff6364,#ff88bc)]",img:"",number:"",stars:""},
                    {courseName:'Certified Ethical Hacking Course-CEH v12',bgGradient:"bg-[linear-gradient(240deg,#d677c0,#41bbbd)]",img:"",number:"",stars:""},
                    {courseName:'Data Science with Python Certification Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Microsoft Azure Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#ff6364,#ff88bc)]",img:"",number:"",stars:""},
                    {courseName:'Ceritied Scrum Master Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#ffe583,#ff63cc)]",img:"",number:"",stars:""},
                    {courseName:'Microsoft SQL Service Certification',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Digital Marketing Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Microsoft Azure DevOps Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#6568ff,#d879ec)]",img:"",number:"",stars:""},
                    {courseName:'Blockchain Developer Certification Course',bgGradient:"bg-[linear-gradient(240deg,#bdd377,#09adef)]",img:"",number:"",stars:""},
                    {courseName:'Kubernetes Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#46dbea,#507fd9)]",img:"",number:"",stars:""},
                    {courseName:'Docker Certification Training Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'MySQL DBA Certification Training',bgGradient:"bg-pink",img:"",number:"",stars:""},]
    return (
        <section>
            {content.map((items,key)=>{
                return <section key={key} className="flex ">
                <div className={`${items.bgGradient} h-[100px] w-[93px] min-w-[93px]`}>

                </div>
                <div>
                    <h1>{items.courseName}</h1>
                    <p>Stars <span>4.5</span><span>(65250)</span></p>
                </div>
            </section>
            })}
        </section>
    );
}

export default TrendingCoursesSlider;
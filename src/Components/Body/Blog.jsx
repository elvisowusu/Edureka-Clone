

function Blog() {
    const latestBlogPost = [{img:'',date:'February 24th',Post:'120+ Top DevOps interview Questions And Answers in 2024'},
                            {img:'',date:'February 25th',Post:'Java Interview Questions and Answers'},
                            {img:'',date:'March 1st',Post:'Setting Up A Multi Node Cluster In Hadoop 2.X'},
                            {img:'',date:'February 25th',Post:'Top 110+ AWS Interview Questions and Answers for 2024'},
                            {img:'',date:'February 28th',Post:'Python Interview Questions and Answers'},
                            {img:'',date:'March 1st',Post:'10 Reasons Why Big Data Analytics is the Best Career Move'},
                            {img:'',date:'January 28th',Post:'What is AWS Certification: Top Benefits, Various Certifications List, and More'},
                            {img:'',date:'February 28th',Post:'Top Angular Interview Questions You Must Prepare in 2024'},
                            {img:'',date:'March 2nd',Post:'Top Tableau Interview Questions And Answers for 2024'},
                            {img:'',date:'February 29th',Post:'Top 100+ React Interview Questions You Must Prepare in 2024'},
                            {img:'',date:'March 3rd',Post:'Top Hive Commands with Examples in HQL'},
                            {img:'',date:'February 29th',Post:'Top 50 Hadoop Interview Questions You Must Prepare in 2024'},
                            {img:'',date:'January 25th',Post:'Top 70+ Salesforce Interview Questions and Answers for Freshers & Experienced'},
                            {img:'',date:'February 7th',Post:'DevOps Tutorial:A Comprehensive Guide for Beginners'},
                            {img:'',date:'March 23rd',Post:'Object Oriented Programming - Java OOPs Concepts With Examples'},
                            {img:'',date:'February 18th',Post:'Angular Tutorial:Getting Started With Angular 8'},
                            {img:'',date:'December 18th',Post:'5 Reasons to Learn Hadoop'},
                            {img:'',date:'February 29th',Post:'String in Java-String Functions In Java With Examples'},
                            {img:'',date:'March 18th',Post:'Top 115 SQL Interview Questions You Must Prepare In 2024'},
                            {img:'',date:'June 15th',Post:'Creating an Outline Quiz Application Using JSP Servlet'},
                            {img:'',date:'January 29th',Post:'Informatica Interview Questions Part 2 For 2024: Scenario-Based Interview Questions'},
                            {img:'',date:'February 29th',Post:'Top Informatica Interview Questions You Must Prepare In 2024'},
                            {img:'',date:'February',Post:'Android Widgets:Custom Spinner in Android'},
                            {img:'',date:'February 29th',Post:'Top 50 Microsoft Azure Interview Questions You Must Prepare In 2024'}
                        ]
    return (
        <div className="">
            <h1 className="px-[0.6rem] my-[15px] font-semibold text-[#404040]">Latest Blog Posts</h1>
            <section className="grid grid-flow-col overflow-scroll ">
            {
                latestBlogPost.map((content,index)=>{
                    return <div key={index} className="px-[15px] w-[186px] h-[240px]">
                        <img src={content.img} alt="" className="h-[85px] mb-[20px]" />
                        <p className="italic text-[10px] font-normal mb-[10px] text-[#9b9b9b]">{content.date}</p>
                        <p className="text-[12px] text-black font-normal">{content.Post}</p>
                    </div>
                })
            } 
            </section>
            <p className="h-[20px]"></p>
            <section className="px-[0.6rem] pt-[20px] pb-[15px] text-[14px]">
                <h1 className="mb-[9px] font-semibold text-black">BLOG POSTS</h1>
                <p className="mb-[15px] text-[#4a4a4a]">Check out our blog for free insights and updates on your field</p>
                <button className="w-[122px] h-[35px] text-[12px] text-[#12589a] font-semibold border border-[#0c5397]">SHOW ME</button>
            </section>
        </div>
    );
}

export default Blog;
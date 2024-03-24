import { RxLinkedinLogo } from "react-icons/rx";

function Reviews() {
    
const content =[
    {img:'',Name:'Vivek Yadav',Profession:'Customer Project Manager',Course:'AI and Machine Learning Masters Course',Rating:'',Passage:'The Postgraduate Diploma in AIby Edureka in collaboration with NIT Warangal offered a superb learning experience for working professionals with convenient weekend live classes. The program provided a balanced mix of theoretical knowledge and hands-on experience in model development for ML, deep learning, and NLP. Overall, it exceeded expectations and equipped me with valuable AI skills for the professional arena. Higly recommended for those looking to enhance their expertise an AI.'},
    {img:'',Name:'Ganesh Bapurao...',Profession:'Specialist Software Engineer',Course:'',Rating:'',Passage:"I am writing to share my positive experience upon completing the AngularJS course with Edureka. The entire learning journey was both enriching and rewarding. The modules were well-organized, and the curriculum provided a comprehensive understanding of AngularJS concepts. The hands-on exercises and real-world examples helped solidify my understanding and provided practical insights into application development using AngularJS. The instructors were knowledgeable, approachable, and demonstrated a keen passion for the subject matter. Their guidance and support throughout the course were instrumental in making the learning experience enjoyable. The platform's user interface was intuitive, making it easy to navigate through the modules, access course materials."},
    {img:'',Name:'Lins Varghese',Profession:'Lead Administrator',Course:'DevOps Certification Training Course',Rating:'',Passage:'I have completed the DevOps Certification Training from Edureka, and it has been a transformative experience in understanding the principles and practices that drive deplayment. This course is a game-changerfor anyone looking to bridge the gap between development and operations teams. The Training covered a wide array of topics, starting from the fundamental concepts of DevOps to advanced automation techniques. The instructors were knowledgeable and provided clear explanations, making complex concepts accessible even for those new to the field. The hands-on labs and real-world case studies were particularly valuable, allowing me to apply theoritical knowledge in practical scenarios.'},
    {img:'',Name:'Satybrata Mishra',Profession:'Senior Software Engineer',Course:'Python Programming Certification Training',Rating:'',Passage:'I recently completed the Python Programming Certification Training from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of Python programming. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the language. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my programming skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn Python programming.'},
    {img:'',Name:'Bhakat Raj Joshi',Profession:'Senior Associate',Course:'Microsoft Power BI Certification Course',Rating:'',Passage:'The course I enrolled in was titled Power Bi Masterclass, which spanned over 8 weeks and was led by experienced instructors. The course content was exceptional, covering all aspects of Power BI comprehensively. The material was up-to-date and included real-world examples. Our instructor was extremely knowledgeable and made complex topics easy to understand. Their teaching style was evgaging, and I felt motivated to learn throughout the course. The practical exercises and projects were invaluable. They provided hands-on experience, allowing me to apply the concepts I learned during the course.'},
    {img:'',Name:'Sandeep Kumar',Profession:'Senior Software Engineer',Course:'AWS Architect Certification Training',Rating:'',Passage:'I recently completed the AWS Architect Certification Training from Edureka, and I must say it was an excellent learning experience. The course content was comprehensive and covered all the essential topics required to become an AWS Architect. The hands-on labs and real-world projects were particularly helpful in understanding the practical aspects of AWS. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to become an AWS Architect.'},
    {img:'',Name:'Rajesh Kumar',Profession:'Senior Software Engineer',Course:'Big Data Hadoop Certification Training Course',Rating:'',Passage:'I recently completed the Big Data Hadoop Certification Training Course from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of Big Data and Hadoop. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the subject. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn Big Data and Hadoop.'},
    {img:'',Name:'Abhishek Roy',Profeesion:'',Course:'Tableau Certification Training Course',Rating:'',Passage:'I recently completed the Tableau Certification Training Course from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of Tableau. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the subject. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn Tableau.'},
    {img:'',Name:'Saurabh Sarkar',Profession:'SPS Associate',Course:'Microsoft Power BI Certification Course',Rating:'',Passage:'I recently completed the Microsoft Power BI Certification Course from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of Power BI. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the subject. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn Power BI.'},
    {img:'',Name:'Mohammad Sadaq',Profession:'Associate Basis Consultant',Course:'AWS SysOps Certification Training',Rating:'',Passage:'I recently completed the AWS SysOps Certification Training from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of AWS SysOps. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the subject. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn AWS SysOps.'}
];
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
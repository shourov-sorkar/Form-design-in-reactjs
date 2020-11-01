import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Header from "./layout/Header"
import { NavLink } from "react-router-dom";
import web from "./img/hero.jpg";

const Home = () => {
    return (
        <>
             <Header />
            <Container fluid classNam="canvas">

           
                
            
                <Row>
               
                    <Col md={{ span: 6, offset: 3 }} className="first-phase">
                    
                        <h1>Amar iSchool: Internship Program</h1>
                        <p>Amar iSchool is an initiative that started its journey to deliver quality education and effective learning. It is an educational platform that provides quality education through live video sharing by high profiled mentors. Since 2019, Amar iSchool is connecting hundreds of young learners from more than 50 universities with different courses.</p>
                        <p>Are you passionate about finding the best talent of yours? Do you enjoy working in a team towards challenging goals in the fast-moving online education industry? Have you ever imagined working on a growing educational platform where you can develop your skills as well as empower others?  This role may be a perfect role for you! Here’s your chance to think beyond the ordinary.</p>
                        <p>Yes, Amar iSchool is calling for a six-month-long part-time internship program where you will get the scope to work with the Social Media Team, Content Development Team and Project Team.
                        The name and photo associated with your Google account will be recorded when you upload files and submit this form. Not <span>rshourov156@gmail.com?</span> <NavLink to="/">Switch account</NavLink> </p>
                    </Col>
                    <Col md={{ span: 6, offset: 3 }} className="first-phase">
                        <Image src={web} fluid />
                    </Col>
                    <Col md={{ span: 6, offset: 3 }} className="second-phase">
                        <h6>Amar iSchool Internship Program Details and Requirements</h6>
                        <p className="p-15">Amar iSchool is looking for interns for their different teams.</p>
                        Being an Intern, one can work for:
                        <ul>
                            <li>Social Media Team</li>
                            <li>Content Development Team.</li>
                            <li>Project Team.</li>
                        </ul>
                        <p>Program Duration: 06 Months <br />
                        Location: Work from Home/Remote. (with flexible working hours)</p>
                        <p>Educational Requirements: Undergraduate students from any discipline (1st, 2nd, and 3rd Year University students are highly encouraged to apply).</p>
                        <br />
                        <p>Eligibilities</p>
                        <ul>
                            <li>Have to be a University Student.</li>
                            <li>Microsoft Office proficiency.</li>
                            <li>Excellent interpersonal skills.</li>
                            <li>Detail-oriented and a team player.</li>
                            <li>Desire to learn new things and a mindset to accept new challenges.</li>
                            <li>Effective written and verbal communication skills in Bengali and English.</li>
                            <li>Candidates having basic knowledge on Adobe Illustrator and Photoshop will get preference.</li>
                        </ul>
                        <br/>
                        <p>Benefits: </p>
                        <ul>
                            <li>Letter of recommendation and certificate after successful completion.</li>
                            <li>Official Recognition and awards based on performances.</li>
                            <li>Team training sessions to develop new skills. </li>
                            <li>Hands-on exposure and actual tasks support in developing educational platforms that will enhance interpersonal and business communications skills.</li>
                            <li>Involvement with different events and project teams to develop collaboration and innovation skills.</li>
                            <li>Effective written and verbal communication skills in Bengali and English.</li>
                            <li>Full-time positions may be offered based on performance.</li>
                        </ul>
                        <br/>
                        <p>Application Deadline: 15 June 2020. </p>
                        <br/>
                        <p>Detailed Job Description and Responsibilities</p>
                        <p>Social Media Team Intern</p>
                        Duties of the Social Media Intern:
                        <ul>
                            <li>Handling Amar iSchool's Social Media Channels (Facebook, Twitter, Instagram, LinkedIn, etc.)</li>
                            <li>Support the social media team in preparing social media content. </li>
                            <li>Assist in preparing the monthly social media plan. </li>
                        </ul>
                        Required Skills for Social Media Intern:
                        <ul>                       
                            <li>Having sound knowledge of the platforms as mentioned earlier.</li>
                            <li>Basic Knowledge of social media marketing trends. </li>
                            <li>Excellent communication skills in English and Bangla.</li>
                            <li>Candidates having basic knowledge of Adobe Illustrator and Photoshop will get preference.</li>
                        </ul>
                        <p>Content Development Team Intern</p>
                        Duties of the Content Development Team Intern:
                        <ul>                       
                            <li>Writing, editing, and proofreading content.</li>
                            <li>Assisting the Content Development Team consisting of writers, graphic designers, videographers, etc. </li>
                            <li>Formulate a cross-platform content strategy.</li>
                            <li>Track web analytics to ascertain content engagement levels.</li>
                            <li>Support to manage content across all platforms, including email and social media.</li>
                        </ul>
                        <p>Required skills for the Content Development Team Intern:</p>
                        <ul>                       
                            <li>Excellent writing skills in English and Bangla, as well as the ability to communicate and collaborate effectively.</li>
                            <li>The ability to follow directions and work in a self-motivated and proactive manner.</li>
                            <li>Efficiency in MS Office Applications (Word, Excel, PowerPoint) and Google Applications (Google Docs, Google Slides, Google Drive).</li>
                            <li>The ability to consistently meet deadlines. .</li>
                        </ul>
                        <p>Project Team Intern</p>
                        Duties of the Project Team Intern:
                        <ul>                       
                            <li>Leading and assisting different projects (Operations Team, Campus Ambassador Program, Course Development).</li>
                            <li>Support the team in arranging and managing events of Amar iSchool.</li>
                        </ul>
                        Required Skills for the Project Team Intern:
                        <ul>                       
                            <li>Team-oriented and responsive.</li>
                            <li>Good interpersonal communication and management skills.</li>
                            <li>Proficiency in both English and Bangla.</li>
                            <li>Efficiency in MS Office Applications (Word, Excel, PowerPoint.</li>
                            <li>Efficiency in using Google Applications (Gmail, Google Calendar, Google Drive).</li>
                        </ul>
                    </Col>
                    <Col md={{ span: 6, offset: 3 }}>
                    <NavLink to="/second" className="btn">Next</NavLink>
                    </Col>
                    
                </Row>
            </Container>
        </>
    );
};

export default Home;

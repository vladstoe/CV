import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './PersonalProjectsPage.css';

const projects = [
    {
        id: 1,
        title: 'React Native app',
        bulletPoints: [
            "Developed an application using React Native (JavaScript) for the frontend and Firebase for the backend, enabling the creation of a versatile web and Android application. This app's primary focus lies in offering a user-friendly simulated betting experience",
            "Employed Firebase's powerful capabilities, including email/password authentication and Firestore database integration, to craft a robust foundation for the app. This facilitated the management of essential user data, underpinning the core logic of the application",
            "Firestore served as the repository for critical data, encompassing users' usernames, their available funds, and their response status regarding the question. It also stored aggregated information, including the total funds amassed for each answer option and the identifiers of users who selected each choice. Additionally, Firestore housed the question itself along with its two available options. To circumvent the need for Firebase's paid Functions feature, a clever 'reset' field was employed, ensuring seamless functionality without incurring additional costs"        ],
        iframeUrl: 'https://qandmoney.netlify.app/',

    },
    {
        id: 2,
        title: 'Android Studio app',
        bulletPoints: [
            'First project created for a client, dedicated to the creation of a dynamic application where users connect based on their chosen talents and skills. The app also seamlessly integrated a user-friendly chat platform, enabling meaningful interactions among its users',
            'Technologies used consist of Android Studio (Java) for frontend and Firebase for backend',
            "Implemented a suite of Firebase functionalities, including email/password authentication, Firestore for data management driving the app's logic, and Storage for preserving user profile pictures",
            "Firestore served as the foundational repository for critical data elements, including user profiles encompassing usernames and their desired learning and teaching skills. Additionally, it managed chat-related information, housing details about chat room participants, message transcripts, and comprehensive message attributes such as timestamps, sender IDs, and message content",
            "Android apk link: https://www.upload-apk.com/mE6ZxGx7AO0Ah0G"



        ],
        iframeUrl: '',

    },

];

const PersonalProjectsPage = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleCard = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    const isExpanded = (id) => {
        return expandedId === id;
    };

    return (
        <div className="projects-page">
            <nav className="navigation">
            <Link to="/personal" className="nav-link" activeClassName="active">
                    Personal Projects
                </Link>
                <Link to="/projects" className="nav-link" activeClassName="active" end>
                    University Projects
                </Link>
                <Link to="/education" className="nav-link" activeClassName="active">
                    Education
                </Link>


            </nav>
            <div className="content">
                {projects.map((project) => (
                    <div className={`project-card ${isExpanded(project.id) ? 'expanded' : ''}`} key={project.id} onClick={() => toggleCard(project.id)}>
                        <div className="project-header">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <ul>
                            {project.bulletPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        <div className="expand-icon-container">
                            {isExpanded(project.id) ? (
                                <FaAngleUp className="expand-icon" onClick={() => toggleCard(project.id)} />
                            ) : (
                                <FaAngleDown className="expand-icon" onClick={() => toggleCard(project.id)} />
                            )}
                        </div>
                        {isExpanded(project.id) && (
                            <div className="expanded-content">
                                <h3 className="demo-label">Demo</h3>
                                <div className="iframe-container">
                                    <iframe title={project.title} src={project.iframeUrl} />
                                </div>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalProjectsPage;
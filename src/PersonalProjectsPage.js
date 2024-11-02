import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'ArtVista App',
        subtitle: 'October 2023 - Present',
        bulletPoints: [
            'Co-founder of Artvista, a startup app designed for art enthusiasts, offering innovative features for art exploration',
            'Scan artworks to instantly access detailed information, including artist biographies, artistic styles, and museum locations',
            'Interactive guide answering questions about techniques, historical context, and significance of the artwork',
            'Includes a comprehensive map of all museums in the Netherlands with details on famous artists and notable artworks',
            'Front-end developed using React Native (TypeScript) with custom modules for optimized mobile performance',
            'Firebase was used to manage user data, such as previously scanned and favorited artworks',
            'Back-end handled by our custom API to deal with image processing powered by Python, utilizing PyTorch, OpenCV, Hugging Face, YOLO, and TensorFlow; using CNNs and Transformers for generating and analyzing image vectors',
            'Deployed using Docker with Docker Compose and Kubernetes for scalable container management',
            'Database architecture built using PostgreSQL with pgvector for handling image vectors',
            'Integrated OpenAI and Langchain for our Art Guide',
            'Available on:&nbsp;<a href="https://apps.apple.com/nl/app/artvista-art-companion/id6503986684?l=en-GB" target="_blank" rel="noopener noreferrer">iOS</a>&nbsp;and&nbsp;<a href="https://play.google.com/store/apps/details?id=com.artvista&hl=en" target="_blank" rel="noopener noreferrer">Android</a>'
        ],
        iframeUrl: '',
    },
    {
        id: 2,
        title: 'ArtVista Website',
        subtitle: 'May 2024 - August 2024',
        bulletPoints: [
            'Developed the official website for Artvista to promote the app and facilitate business inquiries',
            'Front-end built using React, Vite, and TypeScript for a modern, fast, and optimized user experience',
            'Back-end integrated with the same API as the app',
            'Tailored API endpoints to specifically handle artwork detection and processing for the provided playground on the website',
            'Seamless integration with PostgreSQL and the same image processing algorithms for a unified backend across the website and mobile app',
            '<a href="https://artvista.app" target="_blank" rel="noopener noreferrer">Website</a>'
        ],
        iframeUrl: '',
    },

    {
        id: 3,
        title: 'Trade Talent App',
        subtitle: 'August 2023',
        bulletPoints: [
            'First project created for a client, dedicated to the creation of a dynamic application where users connect based on their chosen talents and skills. The app also seamlessly integrated a user-friendly chat platform, enabling meaningful interactions among its users',
            'The app was developed in Java for Android with functionalities developed with the help of Firebase',
            "Implemented a suite of Firebase functionalities, including email/password authentication, Firestore for data management driving the app's logic, and Storage for preserving the user's profile picture",
            "Firestore served as the foundational repository for critical data elements, including user profiles encompassing usernames and their desired learning and teaching skills. Additionally, it managed chat-related information, housing details about chat room participants, message transcripts, and comprehensive message attributes such as timestamps, sender IDs, and message content",
            '<a href="https://www.upload-apk.com/mE6ZxGx7AO0Ah0G" target="_blank" rel="noopener noreferrer">Download APK</a>'
        ],
        iframeUrl: 'https://www.youtube.com/embed/uXgTkaQn004',

    },
    {
        id: 4,
        title: 'Portfolio Website',
        subtitle: 'July 2023 - Present',
        bulletPoints: [
            "Created this dynamic website using React (JavaScript), focusing on delivering a comprehensive overview of my personal information and accomplishments, with a primary emphasis on the frontend experience and design, without implementing any backend functionalities"
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
                <NavLink to="/personal" className="nav-link" activeClassName="active">
                    Personal Projects
                </NavLink>
                <NavLink to="/projects" className="nav-link" activeClassName="active">
                    University Projects
                </NavLink>
                <NavLink to="/education" className="nav-link" activeClassName="active">
                    Education
                </NavLink>
            </nav>
            <div className="content">
                {projects.map((project) => (
                    <div className={`project-card ${isExpanded(project.id) ? 'expanded' : ''}`} key={project.id} onClick={() => toggleCard(project.id, project.iframeUrl)}>
                        <div className="project-header">
                            <h2>{project.title}</h2>
                            {project.subtitle && <h3 className="project-subtitle">{project.subtitle}</h3>}
                            <p>{project.description}</p>
                        </div>
                        <ul>
                            {project.bulletPoints.map((point, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                            ))}
                        </ul>
                        {project.iframeUrl && (
                            <div className="expand-icon-container">
                                {isExpanded(project.id) ? (
                                    <FaAngleUp className="expand-icon" onClick={(e) => { e.stopPropagation(); toggleCard(project.id, project.iframeUrl); }} />
                                ) : (
                                    <FaAngleDown className="expand-icon" onClick={(e) => { e.stopPropagation(); toggleCard(project.id, project.iframeUrl); }} />
                                )}
                            </div>
                        )}
                        {isExpanded(project.id) && project.iframeUrl && (
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

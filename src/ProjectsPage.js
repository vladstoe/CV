import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './ProjectsPage.css';

const projects = [
    {
        id: 1,
        title: 'Security Software Development - TU/e',
        bulletPoints: [
            'Implementing a fully-fledged spoofing tool for ARP and DNS using Scapy, based on Ettercap’s implementation of the two attacks (ARP and DNS spoofing), which uses MITM attack, during which the attacker positions themselves between the communication of two parties, either listening to the communication or interfering with the packets sent or received by both sides',
            ' Implementing virtual machine setups for testing and development purposes',
        ],
        iframeUrl: 'https://www.youtube.com/embed/fWtkqE66ns4',

    },
    {
        id: 2,
        title: 'App development - TU/e',
        bulletPoints: [
            'Developed Quizy, an entertainment Android app that allows users to create questions and take quizzes on any topic',
            'Created the user interface (UI) design for Quizy app using Android Studio\'s built-in layout editor',
            'Worked with the development team to ensure a consistent and user-friendly design across all screens and features',
            'Designed an online leaderboard to compare players\' scores with others',
            'Developed the Quizy app using Java and XML programming languages in Android Studio'
        ],
        iframeUrl: 'https://www.example.com/project2',

    },
    // Add more projects with bullet points
    {
        id: 3,
        title: 'Web technologies - TU/e',
        bulletPoints: [
            ' Developed a Python-based web tool to simplify eye-tracking data analysis and enhance data visualization',
            ' Solved data analysis challenges by enabling users to upload and analyze their own large datasets',
            'Created interactive visualizations to improve data analysis and interpretation',
            'Collaborated with team members to design and implement the tool and presented findings in a comprehensive report',
        ],
        iframeUrl: 'https://www.example.com/project2',

    },
    // ...
];

const ProjectsPage = () => {
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
                <Link to="/projects" className="nav-link" activeClassName="active" end>
                    Projects
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

export default ProjectsPage;
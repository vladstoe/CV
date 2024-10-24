import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './ProjectsPage.css';

const projects = [
    {
        id: 1,
        title: 'Cyclopedium - TU/e',
        subtitle: 'April 2023 - July 2023',
        bulletPoints: [
            'Developed Cyclopedium, an online web-application for creating dynamic and interactive documentation for software projects',
            'Implemented real-time code modification and rendering using Docker containers to enhance developer productivity',
            'Levereged Cypress functionalities in order to reload the Docker environment to properly update the UI with the code modified within the code snippets',
            'Integrated a custom Sphinx directive for code embedding and real-time viewing of results in the documentation',
            'All of the scripts involved were written and developed in Python'
        ],
        iframeUrl: 'https://www.youtube.com/embed/_Zffa5jrryA',
    },
    {
        id: 2,
        title: 'Security Software Development - TU/e',
        subtitle: 'April 2021 - June 2021',
        bulletPoints: [
            'Implementing a fully-fledged spoofing tool for ARP and DNS using Scapy, based on Ettercap’s implementation of the two attacks (ARP and DNS spoofing), which uses MITM attack, during which the attacker positions themselves between the communication of two parties, either listening to the communication or interfering with the packets sent or received by both sides',
            ' Implementing virtual machine setups for testing and development purposes',
        ],
        iframeUrl: 'https://www.youtube.com/embed/fWtkqE66ns4',

    },
    {
        id: 3,
        title: 'App development - TU/e',
        subtitle: 'January 2020 - April 2020',
        bulletPoints: [
            'Developed Quizy, an entertainment Android app that allows users to create questions and take quizzes on any topic',
            'Created the user interface (UI) design for Quizy app using Android Studio\'s built-in layout editor',
            'Worked with the development team to ensure a consistent and user-friendly design across all screens and features',
            'Designed an online leaderboard to compare players\' scores with others',
            'Developed the Quizy app using Java and XML programming languages in Android Studio'
        ],
        iframeUrl: '',

    },
    // Add more projects with bullet points
    {
        id: 4,
        title: 'Web technologies - TU/e',
        subtitle: 'April 2020 - June 2020',
        bulletPoints: [
            ' Developed a Python-based web tool to simplify eye-tracking data analysis and enhance data visualization',
            ' Solved data analysis challenges by enabling users to upload and analyze their own large datasets',
            'Created interactive visualizations to improve data analysis and interpretation',
            'Collaborated with team members to design and implement the tool and presented findings in a comprehensive report',
        ],
        iframeUrl: '',

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
                                <li key={index}>{point}</li>
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

export default ProjectsPage;
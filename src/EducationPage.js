import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './EducationPage.css';

const education = [
    {
        id: 1,
        university: 'Eindhoven University of Technology',
        degree: 'Computer Science and Engineering Bachelor\'s Degree',
        period: '2019 - 2023',
        bulletPoints: [],
    },
    {
        id: 2,
        university: '"George Cosbuc" Bilingual National College',
        degree: 'Financial Education',
        period: 'April 2018 - May 2018',
        bulletPoints: [
            'Discussions about the non-banking financial market.',
            'Interactive learning about money management and budgeting.',
        ],
    },
    {
        id: 3,
        university: '"George Cosbuc" Bilingual National College',
        degree: 'Personal Development Workshop',
        period: 'December 2017 - February 2018',
        bulletPoints: [
            'Analyzing the strengths and weaknesses of each participant.',
            'Discussing Conflict Management.',
            'Participating in different activities that had a team-building role.',
        ],
    },
    {
        id: 4,
        university: '"George Cosbuc" Bilingual National College',
        degree: 'Romania Diploma de Bacalaureat',
        period: 'September 2015 - July 2019',
        bulletPoints: [],
        examSubjects: [
            'Romanian Language and Literature.',
            'Mathematics.',
            'Computer Science.',
        ],
    },
];

const EducationPage = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleCard = (id, hasDetails) => {
        if (hasDetails) {
            setExpandedId(prevId => prevId === id ? null : id);
        }
    };

    const hasDetails = (item) => item.bulletPoints.length > 0 || (item.examSubjects && item.examSubjects.length > 0);

    return (
        <div className="education-page">
            <nav className="navigation">
                <NavLink to="/projects" className="nav-link" activeClassName="active">
                    University Projects
                </NavLink>
                <NavLink to="/personal" className="nav-link" activeClassName="active">
                    Personal Projects
                </NavLink>
                <NavLink to="/education" className="nav-link" activeClassName="active">
                    Education
                </NavLink>
            </nav>
            <div className="content">
                {education.map((item) => (
                    <div className="education-card" key={item.id}>
                        <div className="education-header" onClick={() => toggleCard(item.id, hasDetails(item))}>
                            <h2>{item.degree}</h2>
                            <p>{item.university}</p>
                            <p>{item.period}</p>
                            {hasDetails(item) && (
                                expandedId === item.id ? (
                                    <FaAngleUp className="expand-icon" />
                                ) : (
                                    <FaAngleDown className="expand-icon" />
                                )
                            )}
                        </div>
                        {expandedId === item.id && hasDetails(item) && (
                            <div className="education-description">
                                {item.bulletPoints.length > 0 && (
                                    <ul>
                                        {item.bulletPoints.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                {item.examSubjects && item.examSubjects.length > 0 && (
                                    <>
                                        <p>Exam Subjects:</p>
                                        <ul>
                                            {item.examSubjects.map((subject, index) => (
                                                <li key={index}>{subject}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationPage;

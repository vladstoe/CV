import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './EducationPage.css';

const education = [
    {
        id: 1,
        university: 'Eindhoven University of Technology',
        degree: 'Computer Science and Engineering Degree',
        period: '09/2019-present',
        bulletPoints: [],
    },
    {
        id: 2,
        university: '"George Cosbuc" Bilingual National College',
        degree: 'Financial Education',
        period: '04/2018-05/2018',
        bulletPoints: [
            'Discussions about the non-banking financial market.',
            'Interactive learning about money management and budgeting.',
        ],
    },
    {
        id: 3,
        university: '"George Cosbuc" Bilingual National College',
        degree: 'Personal Development Workshop',
        period: '12/2017-02/2018',
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
        period: '09/2015-07/2019',
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

    const toggleCard = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    return (
        <div className="education-page">
            <nav className="navigation">
                <Link to="/projects" className="nav-link" activeClassName="active">
                    Projects
                </Link>
                <Link to="/education" className="nav-link" activeClassName="active">
                    Education
                </Link>
            </nav>
            <div className="content">
                {education.map((item) => (
                    <div className="education-card" key={item.id}>
                        <div className="education-header" onClick={() => toggleCard(item.id)}>
                            <h2>{item.degree}</h2>
                            <p>{item.university}</p>
                            <p>{item.period}</p>
                            {expandedId === item.id ? (
                                <FaAngleUp className="expand-icon" />
                            ) : (
                                <FaAngleDown className="expand-icon" />
                            )}
                        </div>
                        {expandedId === item.id && (
                            <div className="education-description">
                                {item.bulletPoints.length > 0 && (
                                    <ul>
                                        {item.bulletPoints.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                {item.id === 4 && item.examSubjects.length > 0 && (
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

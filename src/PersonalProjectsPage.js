import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
            'Available on:&nbsp;<a href="https://apps.apple.com/nl/app/artvista-art-companion/id6503986684?l=en-GB" target="_blank" rel="noopener noreferrer">iOS</a>&nbsp;and&nbsp;<a href="https://play.google.com/store/apps/details?id=com.artvista&hl=en" target="_blank" rel="noopener noreferrer">Android</a>',
            '<span class="no-bullet tech-stack-heading">⚙️ <strong>Tech Stack</strong></span>',
            '<strong>Frontend:</strong> React Native (TypeScript) with custom modules for optimized mobile performance',
            '<strong>Backend:</strong> Custom API powered by Python, using PyTorch, OpenCV, Hugging Face, YOLO, and TensorFlow (CNNs & Transformers)',
            '<strong>Database:</strong> PostgreSQL with pgvector for handling image vectors',
            '<strong>Deployment:</strong> Docker with Docker Compose & Kubernetes for scalable container management',
            '<strong>AI Integration:</strong> OpenAI & Langchain for the interactive Art Guide',
            '<strong>User Management:</strong> Firebase for user data like scanned and favorited artworks',
        ],
        images: [
            'WhatsApp Image 2024-09-03 at 23.37.54_c819dfe7.jpg',
            'WhatsApp Image 2024-09-03 at 23.37.54_c367b2c2.jpg',
            'WhatsApp Image 2024-09-03 at 23.37.54_12a2feca.jpg',
            'WhatsApp Image 2024-09-05 at 11.18.25_88115cf9.jpg',
            'WhatsApp Image 2024-09-05 at 11.18.25_a6917787.jpg',

        ],
        iframeUrl: '',
    },
    {
        id: 6,
        title: 'Tradezell',
        subtitle: 'April 2025 (Freelance)',
        bulletPoints: [
            'Led the end-to-end development of Tradezell as a freelance software developer, collaborating closely with the client to define, design, and deliver a feature-rich mobile trading platform',
            'Tradezell enables users to trade items using a Tinder-style swiping interface, with real-time matching, chatting, and image management',
            'Integrated Firebase for authentication, Firestore for data handling, and Storage for managing user-uploaded images and profiles',
            'Developed swipeable image cards with internal tap navigation, item deletion tracking, and filters for item visibility based on status',
            'Implemented 1:1 voice calling functionality using Agora SDK',
            'Used Firebase Cloud Messaging (FCM) for push notifications with deep linking support, directing users to chats or matched items',
            'Handled in-app purchases via RevenueCat, allowing users to buy upload slots ("availableImages") to manage inventory',
            'Available on:&nbsp;<a href="https://apps.apple.com/app/tradezell-buy-sell-trade/id6744620839" target="_blank" rel="noopener noreferrer">iOS</a>&nbsp;and&nbsp;<a href="https://play.google.com/store/apps/details?id=com.tradezell" target="_blank" rel="noopener noreferrer">Android</a>',
            '<span class="no-bullet tech-stack-heading">⚙️ <strong>Tech Stack</strong></span>',
            '<strong>Frontend:</strong> React Native (TypeScript)',
            '<strong>Backend:</strong> Firebase (Firestore, Auth, FCM, Storage, Functions), custom Node.js Cloud Functions',
            '<strong>Voice:</strong> Agora SDK with Firestore for signaling',
            '<strong>Monetization:</strong> RevenueCat for subscriptions and in-app payments across platforms'
        ],
        images: [
            'WhatsApp Image 2025-04-21 at 14.22.44_c698f50a.jpg',
            'WhatsApp Image 2025-04-14 at 14.48.48_b9e36dab.jpg',
            'WhatsApp Image 2025-04-21 at 14.22.44_9a9ef197.jpg',
            'WhatsApp Image 2025-04-21 at 14.22.44_94f0fa8c.jpg',
            'WhatsApp Image 2025-04-14 at 14.48.49_20daa9ca.jpg',
        ],
        iframeUrl: '',
    },

    {
        id: 2,
        title: 'ArtVista Website',
        subtitle: 'May 2024 - August 2024',
        bulletPoints: [
            'Developed the official and unofficial website for Artvista to promote the app and facilitate business inquiries',
            'Frontend built using Vue.js for the official version and React, Vite, and TypeScript for the unofficial version for a modern, fast, and optimized user experience',
            'Backend integrated with the same API as the app',
            'Tailored API endpoints to specifically handle artwork detection and processing for the provided playground on the website',
            'Seamless integration with PostgreSQL and the same image processing algorithms for a unified backend across the website and mobile app',
            '<a href="https://artvista.app" target="_blank" rel="noopener noreferrer">Official website</a>',
            '<a href="https://artvistaunofficial.netlify.app" target="_blank" rel="noopener noreferrer">Unofficial website</a>'
        ],
        iframeUrl: '',
    },
    {
        id: 3,
        title: 'ArtVista Portal',
        subtitle: 'November 2024 - Present',
        bulletPoints: [
            'Developing a comprehensive portal for ArtVista, designed to allow artists and museums to upload, manage, and organize their artworks and inventory efficiently',
            'The portal extends ArtVista\'s core functionality by enabling museums and artists to make their artworks scannable through the ArtVista app, enhancing accessibility and engagement',
            'Built using Next.js for the frontend',
            'Backend integrated with the same API as the app',
            'Implements authentication and secure data management to facilitate safe user access for artists and institutions',
            '<a href="https://portal.artvista.app" target="_blank" rel="noopener noreferrer">Check it out here</a>',
        ],
        iframeUrl: '',
    },

    {
        id: 4,
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
        id: 5,
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [currentProjectImages, setCurrentProjectImages] = useState([]);

    const toggleCard = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    const isExpanded = (id) => {
        return expandedId === id;
    };

    const openImageModal = (images, index) => {
        setCurrentProjectImages(images);
        setSelectedImageIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable background scroll
    };

    const closeImageModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === currentProjectImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? currentProjectImages.length - 1 : prevIndex - 1
        );
    };


    return (
        <div className="projects-page">
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
                {projects.map((project) => (
                    <div className={`project-card ${isExpanded(project.id) ? 'expanded' : ''}`} key={project.id} onClick={() => toggleCard(project.id, project.iframeUrl)}>
                        <div className="project-header">
                            <h2>{project.title}</h2>
                            {project.subtitle && <h3 className="project-subtitle">{project.subtitle}</h3>}
                            <p>{project.description}</p>
                        </div>
                        <ul>
                            {project.bulletPoints.map((point, index) => (
                                point.includes('no-bullet') ? (
                                    <div key={index} dangerouslySetInnerHTML={{ __html: point }} />
                                ) : (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                                )
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
                        {project.images && project.images.length > 0 && (
                            <div className="project-images-container">
                                <button
                                    className="scroll-button left"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        document
                                            .getElementById(`scroll-container-${project.id}`)
                                            .scrollBy({ left: -300, behavior: 'smooth' });
                                    }}
                                >
                                    &#8249;
                                </button>
                                <div className="project-images-scroll" id={`scroll-container-${project.id}`}>
                                    {project.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openImageModal(project.images, index);
                                            }}
                                        />
                                    ))}
                                </div>
                                <button
                                    className="scroll-button right"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        document
                                            .getElementById(`scroll-container-${project.id}`)
                                            .scrollBy({ left: 300, behavior: 'smooth' });
                                    }}
                                >
                                    &#8250;
                                </button>
                            </div>
                        )}
                        {isModalOpen && (
                            <div className="image-modal">
                                <button className="close-modal" onClick={closeImageModal}>
                                    <FaTimes />
                                </button>
                                <button className="modal-nav left" onClick={prevImage}>
                                    <FaChevronLeft />
                                </button>
                                <img
                                    src={currentProjectImages[selectedImageIndex]}
                                    alt={`Fullscreen ${selectedImageIndex + 1}`}
                                    className="modal-image"
                                />
                                <button className="modal-nav right" onClick={nextImage}>
                                    <FaChevronRight />
                                </button>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalProjectsPage;

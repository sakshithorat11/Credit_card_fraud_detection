import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import {
    faHome,
    faInfoCircle,
    faBook,
    faShieldAlt,
    faPhone,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import CreditCardLogo from '../assets/Credit_Card_Logo.jpeg';

const HomePage = () => {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page refresh
        alert('Your message has been successfully submitted!');
    };

    const handleLogout = () => {
        navigate('/');
    };


    return (
        <div className="home-page">
            <nav className="navbar" id='Navs'>
                <div className="logo-container" onClick={() => scrollToSection('header-section')}>
                    <img src={CreditCardLogo} alt="Credit Card Logo" className="logo" />
                    <span className="company-name">Credit Card Fraud Detection</span>
                </div>
                <ul className="nav-list">
                    <li><button onClick={() => scrollToSection('header-section')}><FontAwesomeIcon icon={faHome} /> Home</button></li>
                    <li><button onClick={() => scrollToSection('about-section')}><FontAwesomeIcon icon={faInfoCircle} /> About</button></li>
                    <li><button onClick={() => scrollToSection('resources-section')}><FontAwesomeIcon icon={faBook} /> Resources</button></li>
                    <li><button onClick={() => scrollToSection('detection-section')}><FontAwesomeIcon icon={faShieldAlt} /> Detection</button></li>
                    <li><button onClick={() => scrollToSection('contact-section')}><FontAwesomeIcon icon={faPhone} /> Contact </button></li>
                    <li><button onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></li>
                </ul>
            </nav>

            <div id="header-section" className="header-section">
                <h1>Credit Card Fraud Detection using Machine Learning</h1>
            </div>
            <div id="home-section" className="section">
                <p>
                    Credit card fraud is increasingly prevalent, with projections from the Nilson Report estimating
                    losses could soar to an astonishing $38.5 billion by 2027. As the issue becomes increasingly pervasive,
                    understanding how to detect credit card fraud and the reasons behind its prevalence is essential for consumers
                    and businesses alike.
                </p>
                <p>
                    Credit card fraud has surfaced as a significant challenge in the financial sector, resulting in
                    billions of dollars lost each year due to fraudulent activities. As the digital economy expands and
                    more consumers rely on online transactions, the opportunities for malicious actors to exploit
                    vulnerabilities in payment systems have grown exponentially. Conventional fraud detection
                    techniques, like rule-based approaches and manual inspections, have become insufficient in
                    handling the growing complexity and volume of fraudulent activities. These conventional
                    systems tend to be slow, rigid, and often result in high false-positive rates, which can lead to
                    customer dissatisfaction and operational inefficiencies.
                </p>
                <h6>What Is Credit Card Fraud Detection?</h6>
                <p>
                    Credit card fraud detection encompasses a range of strategies and technologies aimed at preventing unauthorized
                    purchases, whether online or in physical stores. The primary goal is to verify the cardholder’s identity and ensure
                    the legitimacy of each transaction.
                </p>
                <p>
                    Various techniques are employed to authenticate cardholders, including multi-factor authentication (MFA), 3D Secure (3DS), biometric verification, and one-time passwords (OTP). These methods enhance security by requiring multiple forms of verification before approving a transaction. In addition to authentication, detecting credit card fraud often involves analyzing transaction anomalies. For instance, if a transaction originates from an IP address linked to a suspicious location or if a device displays an unusual configuration, these factors may trigger alerts.
                </p>
            </div>
            <div id="about-section" className="section">
                <h6>Abstract of Credit Card Fraud Detection</h6>
                <p>
                    Credit card fraud detection is a crucial application of machine learning aimed at identifying and preventing fraudulent transactions. This project leverages advanced algorithms to analyze transaction patterns and distinguish between genuine and fraudulent activities.
                </p>
                <p>
                    The system involves key steps such as data preprocessing, feature extraction, and selection to improve model accuracy. The dataset is split into training and testing sets for effective learning. Bayesian Optimization is employed to fine-tune model parameters, enhancing performance.
                </p>
                <p>
                    Various machine learning algorithms like Logistic Regression, Decision Tree, Random Forest, and Support Vector Machine are applied with 5-fold cross-validation to ensure robust evaluation. The model is assessed using metrics such as accuracy, precision, recall, F1 score, MCC, and ROC_AUC to ensure reliability in detecting fraud.
                </p>
                <p>
                    This approach helps financial institutions minimize losses, improve security, and protect users from fraudulent transactions.
                </p>
                <br />
                <br />
                <h6>How Does Credit Card Fraud Detection Work?</h6>
                <p>By using datasets and algorithms, ML models can automatically detect patterns in transaction
                    data that signify fraud. These models are able to adapt to new forms of fraudulent behavior by
                    learning from historical data and continuously improving as more transactions are processed.
                    Unlike rule-based systems, which rely on predefined conditions, machine learning models are
                    capable of identifying subtle, complex relationships in the data that may not be immediately ap
                    parent to human analysts. </p>
                <p>Credit card fraud detection uses advanced technologies, algorithms and data analysis to identify and prevent fraudulent transactions. Financial institutions utilize real-time machine learning models that recognize patterns and anomalies, such as sudden large purchases abroad or multiple transactions in a short period. These systems assess risk based on transaction history, location and user behavior, often halting suspicious transactions and contacting cardholders for verification.</p>
                <p>In addition to machine learning, rule-based systems apply predefined criteria to flag potential fraud, ranging from simple conditions like exceeding spending limits to more complex correlations among various data points. To enhance security, financial institutions employ real-time monitoring and behavioral analytics to track cardholder activities continuously. Techniques such as biometric verification, tokenization, and multi-factor authentication further bolster defenses against fraud. By integrating these technologies, credit card companies can effectively detect and prevent fraudulent activities, protecting both cardholders and financial institutions.</p>
                <br />
                <br />
                <h6>How Do Fraudsters Get Credit Card Numbers?</h6>
                <p>
                    Acquiring credit card numbers online is surprisingly easy and inexpensive, with dedicated marketplaces on both the clearnet and darknet. Reports indicate that prices can be as low as $17 per card.
                </p>
                <p>
                    Here are some common methods through which these numbers become available:
                    <li><b>Theft:</b> Criminals physically steal credit cards or gain access to them.</li>
                    <li><b>Skimming and cloning: </b>Fraudsters use devices known as skimmers to capture credit card details from legitimate card readers, allowing them to create unauthorized copies.</li>
                    <li><b>Account takeover: </b>A fraudster gains unauthorized access to a victim’s account linked to a credit card. The situation is often exacerbated if the account functions as an e-wallet (e.g., BNPL or cryptocurrency accounts).</li>
                    <li><b>Phishing and social engineering:</b>Scammers exploit human psychology to extract sensitive information through deceptive emails, SMS or fake online stores.</li>
                    <li><b>Infiltrating legitimate online stores:</b>Criminals inject malicious scripts into existing ecommerce websites, a technique known as online skimming, often utilizing sophisticated tools like MageCart.</li>
                </p>
            </div>

            <div id="resources-section" className="section">
                <h6>Resources for Credit Crad Fraud Detection</h6>
                <div className="resources-container">
                    <div className="resource-box">
                        <h5>Research Papers & Articles</h5>
                        <p>Links to IEEE papers, journals, or articles related to credit card fraud detection. Key references used for algorithms, Bayesian Optimization, and evaluation metrics.</p>
                        {/* <button className="see-more-btn">See more..</button> */}
                    </div>
                    <div className="resource-box">
                        <h5>Datasets</h5>
                        <p>Link to the Kaggle dataset used for model training and testing. Description of the dataset features and attributes.</p>
                        {/* <button className="see-more-btn">See more..</button> */}
                    </div>
                    <div className="resource-box">
                        <h5>Documentation & Tutorials</h5>
                        <p>Guides on implementing machine learning models. Tutorials for Flask, React.js, and integrating APIs.</p>
                        {/* <button className="see-more-btn">See more..</button> */}
                    </div>
                    <div className="resource-box">
                        <h5>Code Repositories</h5>
                        <p>Links to relevant GitHub repositories for reference or learning.</p>
                        {/* <button className="see-more-btn">See more..</button> */}
                    </div>
                    <div className="resource-box">
                        <h5>Online Tools & Libraries</h5>
                        <p>Links to essential libraries like scikit-learn, pandas, numpy, etc. Online tools for model evaluation and visualization.</p>
                        {/* <button className="see-more-btn">See more..</button> */}
                    </div>
                    <div className="resource-box">
                        <h5>Presentations & Videos</h5>
                        <p>Links to video explanations, conference talks, or visual resources explaining fraud detection concepts.</p>
                        {/* <button className="see-more-btn">See more..</button> */}
                    </div>
                </div>
            </div>

            <div id="detection-section" className="section">
                <h6>Welcome to Credit Card Fraud Detection System</h6>
                <p>Credit card fraud detection using machine learning involves analyzing transaction data to identify suspicious activities.
                    It employs algorithms like Logistic Regression, Decision Trees, Random Forest, and Support Vector Machines (SVM) to classify transactions as legitimate or fraudulent.
                    The process includes data preprocessing, feature extraction, and selection to improve model performance. Techniques such as Bayesian Optimization are used for hyperparameter tuning,
                    and 5-fold cross-validation ensures reliable evaluation. Key metrics like accuracy, precision, recall, F1 score, MCC, and ROC-AUC are used to assess model effectiveness.
                    This approach enhances fraud detection by identifying complex patterns in transaction data, improving security and minimizing false alerts.</p>
                <br />
                <Link to="/detection">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Learn More
                    </button>
                </Link>
            </div>


            <div id="contact-section" className="section">
                <h6>Get in Touch</h6>
                <p>
                    We're here to help! If you have any inquiries about our fraud detection services or need assistance, feel free to contact us.
                </p>
                <div className="contact-container">
                    <div className="contact-card">
                        <p>
                            <strong>Sakshi Thorat</strong> - Technical Support<br />
                            Email: <a href="mailto:sakshithorat1108@gmail.com">sakshithorat1108@gmail.com</a><br />
                            Phone: +738-768-3208
                        </p>
                        <h4>Follow Us</h4>
                        <a href="https://www.instagram.com/"><FaInstagram /> Instagram</a>
                        <a href="https://www.facebook.com/"><FaFacebook /> Facebook</a>
                    </div>

                    <div className="contact-card">
                        <p>
                            <strong>Ruchita Borikar</strong> - Customer Support<br />
                            Email: <a href="mailto:ruchitaborikar@gmail.com">ruchitaborikar@gmail.com</a><br />
                            Phone: +808-010-8574
                        </p>
                        <h4>Search Us</h4>
                        <a href="https://www.google.co.in/"><FaGoogle /> Google</a>
                        <a href="https://github.com/"><FaGithub /> GitHub</a>
                    </div>
                </div>

                <div className="contact-box">
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required /><br /><br />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required /><br /><br />

                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />

                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="section-p1">

                <div className="foot">
                    <p><i className="fas fa-file-contract"></i> <u>Terms of Use</u></p>
                    <p><i className="fas fa-shield-alt"></i> <u>Privacy & Security</u></p>
                    <p>&copy; 2025 Credit Card Concepts. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default HomePage;
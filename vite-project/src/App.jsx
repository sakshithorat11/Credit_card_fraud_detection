import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import * as Components from './Components';
import HomePage from './Pages/HomePage';
import DetectionPage from './Pages/DetectionPage';

const About = () => <h1>About Us</h1>;
const ResourcesPage = () => <h1>Resources</h1>;
const ContactPage = () => <h1>Contact Us</h1>;

function SignInForm() {
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type='email' placeholder='Email' />
            <Components.Input type='password' placeholder='Password' />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button type="button" onClick={handleSignIn}>Sign In</Components.Button>
        </Components.Form>
    );
}

function App() {
    const [signIn, toggle] = React.useState(true);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Components.Container>
                        <Components.SignUpContainer signinIn={signIn}>
                            <Components.Form>
                                <Components.Title>Create Account</Components.Title>
                                <Components.Input type='text' placeholder='Name' />
                                <Components.Input type='email' placeholder='Email' />
                                <Components.Input type='password' placeholder='Password' />
                                <Components.Button>Sign Up</Components.Button>
                            </Components.Form>
                        </Components.SignUpContainer>

                        <Components.SignInContainer signinIn={signIn}>
                            <SignInForm />
                        </Components.SignInContainer>

                        <Components.OverlayContainer signinIn={signIn}>
                            <Components.Overlay signinIn={signIn}>
                                <Components.LeftOverlayPanel signinIn={signIn}>
                                    <Components.Title>Welcome Back!</Components.Title>
                                    <Components.Paragraph>
                                        To keep connected with us please login with your personal info
                                    </Components.Paragraph>
                                    <Components.GhostButton onClick={() => toggle(true)}>
                                        Sign In
                                    </Components.GhostButton>
                                </Components.LeftOverlayPanel>

                                <Components.RightOverlayPanel signinIn={signIn}>
                                    <Components.Title>Hello, Friend!</Components.Title>
                                    <Components.Paragraph>
                                        Enter your personal details and start your journey with us
                                    </Components.Paragraph>
                                    <Components.GhostButton onClick={() => toggle(false)}>
                                        Sign Up
                                    </Components.GhostButton>
                                </Components.RightOverlayPanel>
                            </Components.Overlay>
                        </Components.OverlayContainer>
                    </Components.Container>
                } />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/detection" element={<DetectionPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
        
    );
}

export default App;
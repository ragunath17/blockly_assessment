import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'

const AppNavbar = () => {
    const { isDarkMode, toggleTheme } = useContext(PortfolioContext)

    return (
        <>
            <Navbar
                bg={isDarkMode ? 'dark' : 'light'}
                variant={isDarkMode ? 'dark' : 'light'}
                expand="lg"
                sticky="top"
                className="navbar-custom"
            >
                <Container className="d-flex justify-content-between align-items-center">
                    {/* Logo + Username */}
                    <div className="d-flex align-items-center">
                        <img
                            src="https://res.cloudinary.com/ducenz904/image/upload/v1750907743/Logo_e5tr2x.svg"
                            alt="logo"
                            height="40"
                            className="me-2"
                        />
                        <span className="username-text">ANISH KUMAR SINHA</span>
                    </div>

                    {/* Toggle Button for Mobile View */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Nav Links */}
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-center"
                    >
                        <Nav className="align-items-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link href="#resume">Resume</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* Theme Toggle */}
                    <Button
                        variant="link"
                        className="theme-icon-btn"
                        onClick={toggleTheme}
                        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {isDarkMode ? (
                            <img
                                src="https://res.cloudinary.com/ducenz904/image/upload/v1750921422/Group_21_cfdejx.png"
                                alt="Sun Icon"
                                className="theme-icon"
                            />
                        ) : (
                            <img
                                src="https://res.cloudinary.com/ducenz904/image/upload/v1750921027/Moon_Black_jgup6p.svg"
                                alt="Moon Icon"
                                className="theme-icon"
                            />
                        )}
                    </Button>
                </Container>
            </Navbar>
        </>

    )
}
export default AppNavbar


/*
<div className='navbar-container' bg={isDarkMode ? 'dark' : 'light'}>
            <img
                src="https://res.cloudinary.com/ducenz904/image/upload/v1750907743/Logo_e5tr2x.svg"
                alt="logo"
                bg={isDarkMode ? 'dark' : 'light'}
            />
            <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#resume">Resume</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Button
                                variant={isDarkMode ? 'light' : 'dark'}
                                className="ms-3"
                                onClick={toggleTheme}
                            >
                                {isDarkMode ? '☀️ ' : '🌙 '}
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        */
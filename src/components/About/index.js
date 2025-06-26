import { useContext } from 'react'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'

const About = () => {

    const { isDarkMode } = useContext(PortfolioContext)

    return (
        <div className="about-bg-container"
            style={{
                backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                color: isDarkMode ? '#ffffff' : '#000000',
            }}
        >
            <div className='about-sub-container'>
                <div>
                    <img
                        src="https://res.cloudinary.com/ducenz904/image/upload/v1750924790/Rectangle_fnvfwd.png"
                        alt="hand"
                        className='hand-arrow'
                    />
                </div>
                <div className='about-info-card'>
                    <h1 className='this-line'>This is it ;) </h1>
                    <p className='about-description'>Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.
                        He holds a bachelor degree in Computer Applications. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative.

                        His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 3D floor plan.

                        When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
                    </p>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/ducenz904/image/upload/v1750934573/Vector_3_z18zyh.png"
                        alt="vector3"
                        className='about-yellow-img'
                    />
                </div>
            </div>
            <div className={isDarkMode ? 'social-links-card this-line-dark' : 'social-links-card this-line-light'}>
                <div>
                    <img src="https://res.cloudinary.com/ducenz904/image/upload/v1750924702/Socials_Links_akujix.png" alt="social links" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ducenz904/image/upload/v1750934523/Vector_4_z978vx.png" alt="heart" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ducenz904/image/upload/v1750934548/Vector_5_xi0gn8.png" alt="upload" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ducenz904/image/upload/v1750924762/Email_rpozcl.png" alt="email" />
                </div>
            </div>
        </div>
    )
}

export default About

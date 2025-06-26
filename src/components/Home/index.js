import './index.css'

const Home = () => (

    <div className='home-bg-contianer'>
        <div className='name-card'>
            <div className='name-info-card'>
                <div className='hello-card'>
                    <p className='hello'>Hello!</p>
                </div>

                <h1 className='name'>I'm <span>Anish</span></h1>
                <p>UI/UX Designer, Front-End Developer & Thinker. Based in India.</p>
                <div className='btn-card'>
                    <button type="button" className='btn-info cv-btn'>Download cv</button>
                    <button type="button" className='btn-info touch-btn'>Get in touch</button>
                </div>
            </div>
            <div className='profile'>
                <img
                    src="https://res.cloudinary.com/ducenz904/image/upload/v1750921638/Group_23_qna5sk.png"
                    alt="profile"
                />
            </div>
        </div>
        <div className="social-links-card">
            <div>
                <img src="https://res.cloudinary.com/ducenz904/image/upload/v1750924702/Socials_Links_akujix.png" alt="social links" />
            </div>
            <div>
                <img src="https://res.cloudinary.com/ducenz904/image/upload/v1750924762/Email_rpozcl.png" alt="email" />
            </div>
        </div>
    </div>

)

export default Home

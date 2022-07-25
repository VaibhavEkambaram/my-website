import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div className="Home">
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Vaibhav's Website</title>
            </Head>
            <header>
                <div className="container">
                    <h1>Vaibhav Ekambaram</h1>
                    <p>
                        Hello there! Looks like you have found my corner of the internet. I am a student in my final
                        year of studying Software Engineering at VUW. Interested in web development, networking and
                        security.
                    </p>
                    <p>
                        <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#118;&#101;&#107;&#97;&#109;&#98;&#97;&#114;&#97;&#109;&#48;&#48;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">Email</a>
                        <a href="https://www.linkedin.com/in/vaibhav-ekambaram/">Linkedin</a>
                        <a href="https://github.com/VaibhavEkambaram">GitHub</a>
                        <a href="https://www.openstreetmap.org/user/VaibhavNZ">OpenStreetMap</a>
                    </p>
                </div>
            </header>
            <main>
                <div className="container">
                    <div>
                        <div className="project">
                            <a href="https://github.com/VaibhavEkambaram/Wells-Backup-Utility">
                                Wells
                            </a>
                            <div>Python based backup utility for network and backup storage management. Currently in early development.</div>
                        </div>
                        
                        <div className="project">
                            <a href="https://github.com/VaibhavEkambaram/Zircon">
                                Zircon
                            </a>
                            <div>Zircon is a Windows keylogger written in Python for one of my cyber-security courses at
                                university.
                            </div>
                        </div>

                        <div className="project">
                            <a href="https://github.com/VaibhavEkambaram/Penguin">
                                Penguin Password Manager
                            </a>
                            <div>A cloud based application built for creating and
                                managing accounts and passwords.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer
                className="Footer"
                style={{fontSize: "small", padding: "1em 0"}}
            >
                <div className="container">
                    &copy; 2019 - 2022 Vaibhav Ekambaram
                </div>
            </footer>
        </div>
    )
}

export default Home

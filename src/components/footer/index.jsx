import {
    FiArrowUpRight,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const Footer = () => {
    return (
        <Styled.Wrapper>
            <div className="footerInner">
                <div className="footerTop">
                    <div className="brandBlock">
                        <span className="eyebrow">SMART DAILY PLANNER</span>

                        <h2>
                            Plan clearly.
                            <span>Work intentionally.</span>
                        </h2>

                        <p>
                            A focused personal productivity workspace for
                            planning tasks, tracking priorities, and keeping
                            daily work organized locally in the browser.
                        </p>
                    </div>

                    <div className="footerLinks">
                        <span className="groupLabel">CONNECT</span>

                        <a
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGlobe />
                            Portfolio
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="https://github.com/a2rp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGithub />
                            GitHub
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="https://codepen.io/ash1198"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGlobe />
                            CodePen
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/aashishranjan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiLinkedin />
                            LinkedIn
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="https://www.facebook.com/theash.ashish/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiFacebook />
                            Facebook
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiYoutube />
                            YouTube
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="https://buymeacoffee.com/a2rp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiCoffee />
                            Buy Me a Coffee
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="https://patreon.com/a2rp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGlobe />
                            Patreon
                            <FiArrowUpRight />
                        </a>

                        <a
                            href="https://a2rp-donation-page.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGlobe />
                            Support
                            <FiArrowUpRight />
                        </a>

                        <a href="mailto:ash.ranjan09@gmail.com">
                            <FiMail />
                            Email
                            <FiArrowUpRight />
                        </a>
                    </div>
                </div>

                <div className="footerBottom">
                    <span>
                        © 2026{" "}
                        <a
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </span>

                    <span>Designed for focus. Built for clarity.</span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;

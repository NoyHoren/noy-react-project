import "./Footer.scss";
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


function Footer() {



    return (
        <footer className="bg-stone-200  dark:bg-slate-500 p-3 text-black  dark:text-gray-100 text-center rounded-t-lg flex row gap-3 justify-center items-center mt-4 footer-style">


            Copyright © 2024 <a href="http://127.0.0.1:5500/index.html" className="color-footer ">Noy Horen</a> . All Rights Reserved.

            <a href="https://www.linkedin.com/in/noy-horen-3946572b1/">
                <FaLinkedin className="color-footer " />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61556219251247&sk=about_work_and_education">
                <FaFacebookSquare className="color-footer " />
            </a>

            <a href="https://www.instagram.com/noyhoren_/">
                <FaInstagramSquare className="color-footer " />
            </a>

        </footer>
    );
}

export default Footer;
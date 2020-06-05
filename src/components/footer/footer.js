import React from 'react';
import Text from '../text/text';
import './footer.css'
import { FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';


export const Footer = () => {
    return (
        <div>
            <div class="footer">
                <div class>
                    <Text heading>LETS TALK</Text>
                    <Text>18 Ijeoma Odika Street, Atlantic View Estate, Lekki</Text>
                    <Text>Phone: 08022275685</Text>
                    <Text>Email: oluwasayoakinkuni@gmail.com</Text>
                    <Text>Online: Monday-Friday, 9am - 5pm</Text>
                    <br/>
                </div>
                <div>
                    <Text heading>INFO</Text><br/>
                    <Text>Home Page</Text>
                    <Text>Services Page</Text>
                    <Text>Features Page</Text>
                    <Text>Portfolio Page</Text>
                    <Text>Blog Page</Text>
                </div>
                <div >
                    <Text heading>WHY ME</Text>
                    <Text>I am very good at what I do.</Text>
                </div>
            </div><hr/>
            <div class="footer2">
                <Text> {new Date().getFullYear()} &copy; Oluwasayo. All rights reserved.</Text>
                <div class="footer-icons">
                    <a href="https://www.instagram.com/__oluwasayo/"><FaInstagram/></a>
                    <a href="https://twitter.com/__oluwasayo"><FaTwitter/></a>
                    <a href="https://www.linkedin.com/in/oluwasayo-akinkunmi-6b0b9011a/"><FaLinkedinIn/></a>
                    <a href="https://github.com/oluwasayo01"><FaGithub/></a>
                </div>
            </div>
        </div>
    )
}

// const footer = styled.div`
//     display: grid;
//     grid-template-columns: 30% 30% 30%;

// `

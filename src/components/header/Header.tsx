import "./header-styles.css";

import {
  IoMdMailUnread as MailICon,
  IoLogoLinkedin as LinkedinIcon,
  IoIosContact as CvICon,
} from "react-icons/io";

export default function Header() {
  return (
    <header id="header" role="name-job title">
      <div className="header-inner-div padding">
        <div>
          <h1>Daniel Bustillos</h1>
          <h2 className="border-transition">Fullstack developer</h2>
        </div>
        <div>
          <ul role="contacto" id="contact-list" className="contact-list-show">
            <li role="linkedin">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/daniel-alejandro-bustillos/"
                id="linkedin"
                className="link"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>
            </li>
            <li role="cv">
              <a
                download={true}
                href="/Daniel_Bustillos_CV.pdf"
                id="cv"
                className="link"
              >
                <CvICon />
                <span>curriculum</span>
              </a>
            </li>
            <li role="email">
              <a
                href="mailto:bustillosdaniel4@gmail.com"
                id="email"
                className="link"
              >
                <MailICon />
                <span>email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

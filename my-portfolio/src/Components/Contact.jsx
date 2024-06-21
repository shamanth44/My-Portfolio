import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import {
  faCheckCircle,
  faEnvelope,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const contactRef = useRef(null);
  return (
    <>
      <div ref={contactRef} className="md:mt-40 mt-12 pt-10">
        <h1 className="text-4xl font-semibold text-center">Contact me</h1>

        <div className="flex justify-center mt-10 ">
          <div className="flex md:justify-between justify-center items-center flex-wrap gap-4 md:text-xl border rounded-3xl max-w-[550px] p-4 md:p-6 mx-20">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                className="text-sm bg-black rounded-full text-white p-2"
                icon={faEnvelope}
              />
              <p>
                <a href="mailto:shamanthganiger@gmail.com">
                  shamanthganiger@gmail.com
                </a>
              </p>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/shamanth-ganiger-47958215a/"
                rel="noopener"
                target="_blank"
              >
                <div className="flex gap-2 items-center">
                  <img
                    className="w-8 bg-black rounded-full cursor-pointer"
                    src="https://res.cloudinary.com/shamanth-ganiger/image/upload/v1718805239/linkedIn_idvelb.png"
                    alt=""
                  />
                  <p>LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

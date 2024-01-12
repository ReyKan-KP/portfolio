import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./ParallaxStar.css";
import "./SocialMedia.css";
import "font-awesome/css/font-awesome.min.css";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#5e318896]" />
            <div className="w-1 sm:h-80 h-40 gradient-text2" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-aliceblue`}>
              <span className="gradient-text1"></span>&nbsp;
              <span className="text-1">Hi, I'm Kanishaka Pranjal</span>
              <span className="text-2">Hi, I'm Kanishaka Pranjal</span>
            </h1>
            <p
              className={`${styles.heroSubText} invisible md:visible mt-2 text-aliceblue-100 inner-headings `}
            >
              I am a &nbsp;
              <section className="ch-word  ">
                <span className="word1 text-indigo-500">
                  <div>Programmer</div>
                </span>
                <span className="word2 text-purple-500">
                  <div>Open Source Contributor</div>
                </span>
                <span className="word3 text-violet-500">
                  <div>Full-Stack Developer</div>
                </span>
              </section>
            </p>
            <p
              className={`${styles.heroSubText} visible md:invisible mt-2 text-aliceblue-100 ih2`}
            >
              I am a<span className="word1 text-indigo-400"> Programmer</span>
              <span className="word2 text-purple-400">
                {" "}
                Open Source Contributor
              </span>
              <span className="word3 text-violet-400">
                {" "}
                Full-Stack Developer
              </span>
            </p>
            <br />
            <div className="mainSocial">
              <ul>
                <li className="itemSocial">
                  <a href="https://github.com/ReyKan-KP" target="_blank">
                    <i className="fa fa-github iconSocial text-4xl"></i>
                  </a>
                </li>
                <li className="itemSocial">
                  <a
                    href="https://www.linkedin.com/in/kanishak-pranjal-070a45235/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin iconSocial text-4xl"></i>
                  </a>
                </li>
                <li className="itemSocial">
                  <a href="mailto:kanishakpranjal@gmail.com" target="_blank">
                    <i className="fa fa-envelope iconSocial text-4xl"></i>
                  </a>
                </li>
                <li className="itemSocial">
                  <a
                    href="https://drive.google.com/file/d/1S9qt6wq8bry_k7oWNdGRs0h-gNGXJGBF/view?usp=sharing"
                    download="KanishakaPranjal_Resume.pdf"
                    target="_blank"
                  >
                    <img
                      src="https://iili.io/JRLq7G2.png"
                      alt="cv"
                      className="iconSocial text-4xl"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    ></img>
                  </a>
                </li>
                <li className="itemSocial">
                  <a
                    href="https://www.instagram.com/kanishak_pranjal_"
                    target="_blank"
                  >
                    <i className="fa fa-instagram iconSocial text-4xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-aliceblue mb-1"
              />
            </div>
          </a>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default Hero;

"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import blendingImg from "../../assets/texts/blend.svg";
import workerImg from "../../assets/images/workersImg.webp";
import workerImg1 from "../../assets/images/worker-img-1.jpg";
import workerImg2 from "../../assets/images/worker-img-2.jpg";
import workerImg3 from "../../assets/images/worker-img-3.jpg";
import Image from "next/image";
import ContactUsModal from "../NavigationBar/ContactUsModal";
import { motion } from "framer-motion";

const HeroSection = ({ sectionRef }: { sectionRef: any }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }}
     animate={{ opacity: 3 }}
      transition={{ duration: 3 }}
     >
      <section
        className={`${styles.heroSectionContainer} heroSection`}
        ref={sectionRef}
      >
        <div className="leftSection">
          <div
           className={styles.banner_img}>
            <Image src={blendingImg} alt="blending" width={700} height={300} />
            <Image
              src={workerImg1}
              alt="worker-img-1"
              height={220}
              width={140}
              className={styles.workerImg1}
            />
          </div>

          <div
            className={styles.welcomeTextContainer}
          >
            <article className={styles.welcomeText}>
              <p>
                Welcome to <b>SG Technofab</b>, we are dedicated to providing
                top-notch heating, ventilation, and air conditioning solutions.
                Our experienced team of professionals delivers tailored HVAC
                systems for residential, commercial, and industrial settings. We
                prioritize quality, customer satisfaction, and cutting-edge
                technology to ensure maximum comfort and efficiency.
              </p>
            </article>

            <div className="buttonContainer">
              {/* <p>
                Experience expert HVAC services for ultimate indoor comfort.
              </p> */}
              <button
                id={styles.lineUp}
                className={styles.contactUsBtn}
                onClick={openModal}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="rightSection">
          <Image
            src={workerImg2}
            alt="worker-img-2"
            height={600}
            width={450}
            className="worker-img-2"
            id={styles.lineUp}
          />
          <Image
            src={workerImg3}
            alt="worker-img-3"
            id={styles.lineUp}
            height={220}
            width={140}
          />
        </div>
      </section>

      {/* mobile section */}
      <section className={styles.mobileHeroSection}>
        <Image
          className={styles.mobileBlendingImg}
          src={blendingImg}
          id={styles.lineUp}
          alt="blending-img"
          height={350}
          width={750}
        />
        <Image
          className={styles.mobileWorkersImg}
          src={workerImg}
          id={styles.lineUp}
          alt="workers-img"
        />
        <article>
          <p>
            Welcome to <b>SG Technofab</b>, we are dedicated to providing
            top-notch heating, ventilation, and air conditioning solutions. Our
            experienced team of professionals delivers tailored HVAC systems for
            residential, commercial, and industrial settings. We prioritize
            quality, customer satisfaction, and cutting-edge technology to
            ensure maximum comfort and efficiency.
          </p>
          <p>Experience expert HVAC services for ultimate indoor comfort.</p>
        </article>
        <button className={styles.contactUsBtn} onClick={openModal}>
          Contact Us
        </button>
      </section>
      <ContactUsModal open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default HeroSection;

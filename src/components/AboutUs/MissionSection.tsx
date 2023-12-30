import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BG2 from "@/assets/images/bg2.jpg";
import styles from "./style.module.scss";
import doubleComma from "@/assets/texts/dbcomma.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function MissionSection(props: any) {
  const missionHeader = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const headerOpacity = Math.min(1, scrollY / 100);;


  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: .8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 },
  };

  const imgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <>
      <section
        ref={props.sectionRef}
        className={styles.missionSectionContainer}
      >
        <motion.div
          className={`${styles.blueBackground} blueBackground`}
          id="blueBackground"
          variants={list}
          initial="hidden"
          animate={controls}
          ref={ref}
          style={{ opacity: headerOpacity }}
        >
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
              width: "100%",
            }}
            variants={item}
          >
            <h2
              style={{
                width: "100vw",
                fontSize: "9rem",
                fontWeight: 500,
                color: "#fff",
                textAlign: "center",
                zIndex: 1,
                position: "absolute",
                top: "3rem", 
                left: "10rem",
                letterSpacing: "0.5rem",
              }}
              ref={missionHeader}

            >
              Our Mission
            </h2>
          </motion.div>
          <motion.div variants={item}>
          <motion.div
              style={{
                position: "absolute",
                top: "1rem",
                left: "10rem",
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={imgVariants}
            >
              <Image
                alt="img"
                src={BG2}
                width={500}
                height={650}
              />
            </motion.div>
            <article
              style={{
                position: "absolute",
                right: "5rem",
                width: "50%",
                bottom: "6rem",
              }}
            >
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                Our mission is to provide top-quality heating, ventilation, and
                air conditioning services that meet our customer needs and
                exceed their expectations. We are dedicated to using the most
                advanced technology and innovative techniques to deliver
                efficient, reliable, and cost-effective solutions. Our team of
                highly trained and experienced professionals is committed to
                delivering the best customer service in the industry, ensuring
                complete satisfaction with every job we do. At SG Technofab, we
                strive to be the premier choice for all of our customers&apos;
                HVAC needs.
              </p>
            </article>

            <Image
              alt="img"
              src={doubleComma}
              height={220}
              width={220}
              className={styles.doubleComma}
            />
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.missionMobileSectionContainer}>
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="missionHeading"
        >
          Our Mission
        </h1>
        <Image
          className={styles.missionMobileImg}
          alt="img"
          src={BG2}
          width={600}
          height={500}
        />
        <div className={styles.blueBackground}>
          <article>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="2000"
            >
              Our mission is to provide top-quality heating, ventilation, and
              air conditioning services that meet our customer needs and exceed
              their expectations. We are dedicated to using the most advanced
              technology and innovative techniques to deliver efficient,
              reliable, and cost-effective solutions. Our team of highly trained
              and experienced professionals is committed to delivering the best
              customer service in the industry, ensuring complete satisfaction
              with every job we do. At SG Technofab, we strive to be the premier
              choice for all of our customers&apos; HVAC needs.
            </p>
          </article>

          <Image
            alt="img"
            src={doubleComma}
            height={220}
            width={220}
            className={styles.doubleComma}
          />
        </div>
      </section>
    </>
  );
}

export default MissionSection;

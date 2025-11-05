import { useState, type ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";

import { LeStudioContactSection } from "./lestudiocontact";

type Locale = {
  contact: string;
  directions: string;
  aboutText: ReactNode;
  list: string[];
  footer: ReactNode;
  captions: string[];
};

// 🔤 Locale data
const locales: Record<"is" | "en", Locale> = {
  is: {
    contact: "Hafa samband",
    directions: "Staðsetning",
    aboutText: (
      <>
        <strong>Le Studio</strong> er nýtt og vel búið ljósmyndastúdíó á{" "}
        <strong>Hólmaslóð 6, 101 Reykjavík</strong> – fullkomið fyrir
        auglýsingar, vörutökur, viðburði og alla faglega framleiðslu. Það er
        hannað með þarfir fagfólks í huga – bjart, rúmgott og stílhreint rými
        sem auðvelt er að aðlaga að fjölbreyttum verkefnum. Ef þið hafið áhuga á
        að skoða stúdíóið eða fá nánari upplýsingar um bókanir, endilega hafið
        samband.
      </>
    ),
    list: [
      "Heildarstærð: <strong>110 fm</strong>",
      "Eilífðarhorn: <strong>48 fm</strong> – hægt að mála í hvaða lit sem er gegn aukagjaldi",
      "Lofthæð: <strong>3,4 metrar</strong>",
      "Einstaklega falleg <strong>náttúruleg birta</strong> sem flæðir um rýmið og skapar hlýlegt og stílhreint umhverfi",
      "Frábær <strong>hár- og förðunarstöð</strong>",
      "Nýuppgert og <strong>fallegt eldhús</strong>",
      "Aðgengi: <strong>Á annarri hæð</strong> með bæði rúmgóðum stiga og lyftu",
      "<strong>Tvö baðherbergi</strong>",
    ],
    captions: [
      "Aðalrými — náttúrulegt ljós", // img1 (Hero)
      "Náttúrulegt ljós um austurgluggana", // img2
      "Skapandi uppsetning tilbúin fyrir tökur", // img3
      "Víðtækt rými fyrir vinnustofur", // img4
      "Mínimalískt layout með hljóðvist", // img5
      "Upptöku- og framleiðsluhorn", // img7
      "Hlýtt horn með mjúkum tónum", // img8
      "Áferð, ljós og stemning", // img9
    ],
    footer: (
      <>
        Le Studio er staðsett á{" "}
        <a
          href="https://www.google.com/maps/place/Le+Studio/@64.1578101,-21.9434363,617m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48d675d05abbd08b:0xa29b455f80456483!8m2!3d64.1578101!4d-21.940856"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vatnagarðar 22, 104 Reykjavík
        </a>{" "}
        — Sjá leiðbeiningar
        <br />© 2025 Le Studio — Reykjavík
      </>
    ),
  },
  en: {
    contact: "Contact us",
    directions: "Get directions",
    aboutText: (
      <>
        <strong>Le Studio</strong> is a new and fully equipped photo studio at{" "}
        <strong>Hólmaslóð 6, 101 Reykjavík</strong> — perfect for advertising,
        product shoots, events, and all kinds of professional productions. It’s
        designed with professionals in mind — bright, spacious, and minimalist,
        adaptable for a wide range of projects. Get in touch to book a visit or
        learn more.
      </>
    ),
    list: [
      "Total size: <strong>110 sqm</strong>",
      "Infinity corner: <strong>48 sqm</strong> — can be painted in any color (extra charge)",
      "Ceiling height: <strong>3.4 meters</strong>",
      "Beautiful <strong>natural light</strong> creates a warm and stylish atmosphere",
      "Professional <strong>hair & makeup station</strong>",
      "Newly renovated <strong>kitchen</strong>",
      "Access: <strong>2nd floor</strong> with large staircase and elevator",
      "<strong>Two bathrooms</strong>",
    ],
    captions: [
      "Main space — natural light", // img1 (Hero)
      "Natural light through the east windows", // img2
      "Creative setup ready for sessions", // img3
      "Wide open space for workshops", // img4
      "Minimal layout with acoustic design", // img5
      "Recording setup and production area", // img7
      "Cosy corner with warm tones", // img8
      "Textures, light and atmosphere", // img9
    ],
    footer: (
      <>
        Le Studio is located at{" "}
        <a
          href="https://www.google.com/maps/place/Le+Studio/@64.1578101,-21.9434363,617m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48d675d05abbd08b:0xa29b455f80456483!8m2!3d64.1578101!4d-21.940856"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vatnagarðar 22, 104 Reykjavík, Iceland
        </a>{" "}
        — Get directions
        <br />© 2025 Le Studio — Reykjavík
      </>
    ),
  },
};

// --- styled components ---

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #ffffff;
  color: #111;
  overflow-x: hidden;
`;

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 120px 8vw;
  background: #ffffff;
  color: #111;
  font-family: "IBM Plex Mono", monospace;
  line-height: 1.9;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1400px;
    gap: clamp(60px, 8vw, 160px);
  }
  ul strong {
    color: #000;
    font-weight: 600;
  }
  .left {
    flex: 1;
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 2vw, 36px);
  }

  .right {
    flex: 0.9;
    max-width: 500px;
  }

  p {
    font-size: clamp(1.05rem, 1.4vw, 1.25rem);
    margin: 0;
    color: #222;
    text-align: justify;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: clamp(1rem, 1.3vw, 1.15rem);
    color: #333;
    line-height: 1.75;
  }

  li {
    margin-bottom: 12px;
  }

  @media (max-width: 900px) {
    .content {
      flex-direction: column;
      gap: 40px;
    }
  }

  @media (max-width: 600px) {
    padding: 80px 6vw;
  }
`;

const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-family: "Special Elite", "Playfair Display", serif;
  font-size: clamp(2.5rem, 9vw, 5rem);
  color: black;
  border-right: 3px solid rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 2.5s steps(10, end) forwards, blink 0.7s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 10ch;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 100px 6vw;

  @media (max-width: 768px) {
    padding: 50px 5vw;
    gap: 40px;
  }
`;

const ImageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Image = styled(motion.img)`
  width: 100%;
  object-fit: contain; /* ✅ sýnir alla myndina */
  background-color: #000; /* bakgrunnur ef aspect ratio mismatch */
  aspect-ratio: auto; /* leyfir myndinni að hafa sitt náttúrulega hlutfall */
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const TopBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
  z-index: 20;

  .left {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a {
    color: white;
    text-decoration: none;
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }

  .lang-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    opacity: 0.7;
  }

  .lang-btn.active {
    opacity: 1;
    text-decoration: underline;
  }

  .menu-btn {
    display: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.6rem;
    cursor: pointer;
    z-index: 30;
  }

  @media (max-width: 768px) {
    .left a {
      display: none;
    }
    .menu-btn {
      display: block;
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  z-index: 25;
  gap: 28px;
  font-size: 1.4rem;

  a {
    color: black;
    text-decoration: none;
    font-weight: 500;
  }

  .close-btn {
    position: absolute;
    top: 8px; /* 👈 sama og .menu-btn í TopBar */
    right: 16px; /* 👈 sama alignment og hamborgaratáknið */
    font-size: 1.8rem;
    background: none;
    border: none;
    cursor: pointer;
    color: black;
    z-index: 30;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
      opacity: 0.6;
      transform: scale(1.05);
    }
  }
`;
const Caption = styled.p`
  font-family: "IBM Plex Mono", monospace;
  font-size: clamp(0.9rem, 1vw, 1rem);
  color: #333;
  margin-left: 2px;
  line-height: 1.6;
  opacity: 0.9;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 80px 6vw 60px;
  font-size: 0.95rem;
  color: #777;
  background: #fafafa;
  line-height: 1.7;
  font-family: "Inter", sans-serif;
`;

export default function Page() {
  const [lang, setLang] = useState<"is" | "en">("is");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = locales[lang];
  const images = [img1, img2, img3, img7, img4, img8, img9];
  const galleryImages = images.slice(1);
  const caps = t.captions;
  return (
    <PageWrapper>
      <Hero>
        <TopBar>
          <div className="left">
            <a href="#contact">{t.contact}</a>
            <a
              href="https://www.google.com/maps/place/Le+Studio/@64.1578101,-21.9434363"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.directions}
            </a>
          </div>

          <div className="right">
            <button
              className={`lang-btn ${lang === "is" ? "active" : ""}`}
              onClick={() => setLang("is")}
            >
              IS
            </button>
            <button
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>

            <button className="menu-btn" onClick={() => setMenuOpen(true)}>
              ☰
            </button>
          </div>
        </TopBar>

        {menuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {t.contact}
            </a>
            <a
              href="https://www.google.com/maps/place/Le+Studio/@64.1578101,-21.9434363"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              {t.directions}
            </a>
          </MobileMenu>
        )}

        <HeroImage
          src={img1}
          alt="Le Studio main space"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <HeroOverlay>
          <HeroTitle>Le Studio.</HeroTitle>
        </HeroOverlay>
      </Hero>

      {/* Rest of the page unchanged */}
      <AboutSection>
        <div className="content">
          <div className="left">
            <p>{t.aboutText}</p>
          </div>
          <div className="right">
            <ul>
              {t.list.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        </div>
      </AboutSection>

      <GallerySection id="about">
        {Array.from({ length: Math.ceil(galleryImages.length / 2) }).map(
          (_, rowIdx) => {
            const aIndex = rowIdx * 2;
            const bIndex = aIndex + 1;
            const globalA = aIndex + 1;
            const globalB = bIndex + 1;

            return (
              <ImageRow key={rowIdx}>
                {galleryImages[aIndex] && (
                  <ImageWrapper>
                    <Image
                      src={galleryImages[aIndex]}
                      alt={caps[globalA]}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      loading="lazy"
                    />
                    <Caption>{caps[globalA]}</Caption>
                  </ImageWrapper>
                )}
                {galleryImages[bIndex] && (
                  <ImageWrapper>
                    <Image
                      src={galleryImages[bIndex]}
                      alt={caps[globalB]}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      loading="lazy"
                    />
                    <Caption>{caps[globalB]}</Caption>
                  </ImageWrapper>
                )}
              </ImageRow>
            );
          }
        )}
      </GallerySection>

      <LeStudioContactSection />
      <Footer>{t.footer}</Footer>
    </PageWrapper>
  );
}

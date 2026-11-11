import Image from "next/image";
import { Navigation, Brand } from "@/components/Navigation";
import { Icon } from "@/components/Icon";
import { InquiryForm } from "@/components/InquiryForm";
import { ProjectCollection } from "@/components/ProjectCollection";
import { photos } from "@/components/projects";
import { siteConfig } from "@/components/siteConfig";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero" id="home">
          <img
            className="hero-image"
            src={photos.hero}
            alt="Light-filled luxury residence opening onto a landscaped garden"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content container">
            <p className="eyebrow light">
              <span /> ROOTED IN TRUST. BUILT ON VISION.
            </p>
            <h1>
              Exceptional spaces.
              <br />
              Enduring <em>possibilities.</em>
            </h1>
            <p className="hero-description">
              Your next chapter begins with the right address. Discover
              considered real estate opportunities across India and the UAE.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#projects">
                Explore our projects <Icon name="arrow-up" size={18} />
              </a>
              <a className="text-link" href="#expertise">
                Explore our expertise{" "}
                <span className="circle-icon">
                  <Icon name="arrow" size={17} />
                </span>
              </a>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>LAND. LIFESTYLE. LEGACY.</span>
            <div>
              Noida <i /> Delhi <i /> Gurgaon <i /> Jaipur <i /> UAE
            </div>
            <a href="#expertise" aria-label="Scroll to our expertise">
              SCROLL TO DISCOVER <span>↓</span>
            </a>
          </div>
        </section>
        <section className="developer-strip" aria-label="Developer landscape">
          <div className="container developer-inner">
            <div className="developer-label">
              A world of
              <br />
              <strong>possibilities.</strong>
              <small>Developer landscape*</small>
            </div>
            <div className="marquee">
              <div className="marquee-track">
                {[0, 1].map((n) => (
                  <div className="marquee-set" key={n} aria-hidden={n === 1}>
                    {[
                      ["Godrej Properties", "godrej.svg"],
                      ["DLF", "dlf.svg"],
                      ["Emaar", "emaar.svg"],
                      ["Sobha", "sobha.png"],
                      ["Prestige Group", "prestige.svg"],
                    ].map(([name, file]) => (
                      <span className="developer-logo" key={name}>
                        <img
                          src={`/developers/${file}`}
                          alt={n === 0 ? `${name} logo` : ""}
                          width={160}
                          height={72}
                          decoding="async"
                        />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="strip-note">
            *Industry references only. No affiliation or partnership is claimed.
          </p>
        </section>
        <section className="expertise section" id="expertise">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / OUR EXPERTISE</p>
                <h2>
                  Different ambitions.
                  <br />
                  <em>One trusted perspective.</em>
                </h2>
              </div>
              <p>
                From the ground beneath your feet to the skyline ahead. Explore
                the possibilities that matter to you.
              </p>
            </div>
            <div className="expertise-grid">
              {[
                [
                  "01",
                  "Land & farm estates",
                  "Large land parcels, agricultural holdings and countryside retreats.",
                  photos.land,
                ],
                [
                  "02",
                  "Exceptional residences",
                  "Thoughtful homes and premium residential developments.",
                  photos.villa,
                ],
                [
                  "03",
                  "Commercial & development",
                  "Business spaces and large-scale development opportunities.",
                  photos.towers,
                ],
                [
                  "04",
                  "Beyond borders",
                  "An informed introduction to international property opportunities.",
                  photos.dubai,
                ],
              ].map(([n, title, desc, img]) => (
                <a href="#contact" className="expertise-card" key={n}>
                  <img src={img} alt="" loading="lazy" />
                  <span className="expertise-number">{n}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <span className="expertise-arrow">
                      <Icon name="arrow-up" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="section container projects" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / EXPLORE THE POSSIBILITIES</p>
              <h2>
                A place for your <em>next chapter.</em>
              </h2>
            </div>
            <p>
              A curated look at the opportunities we aspire to bring to you. All
              listings below are editable sample projects.
            </p>
          </div>
          <ProjectCollection />
        </section>
        <section className="delivered" id="delivered">
          <div className="delivered-image">
            <img
              src={photos.villa}
              alt="Contemporary residence with a private swimming pool"
              loading="lazy"
            />
            <span className="project-tag">DELIVERED PORTFOLIO · SAMPLE</span>
          </div>
          <div className="delivered-copy">
            <p className="eyebrow light">04 / SPACES THAT TELL A STORY</p>
            <h2>
              A vision.
              <br />A place.
              <br />
              <em>A lasting impression.</em>
            </h2>
            <p>
              Our delivered portfolio will celebrate the spaces and
              relationships built along the way.
            </p>
            <div className="delivered-project">
              <div>
                <h3>The Courtyard House</h3>
                <span>Jaipur · Residential</span>
              </div>
              <span className="status">Sample delivery</span>
            </div>
            <p className="content-note">
              Portfolio placeholder. Replace with verified completion details
              and client-approved photography before launch.
            </p>
            <a className="text-link" href="#contact">
              Discuss your next chapter <Icon name="arrow-up" />
            </a>
          </div>
        </section>
        <section className="section container founders" id="founders">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / PEOPLE BEHIND THE PERSPECTIVE</p>
              <h2>
                Shared vision.
                <br />
                <em>Personal commitment.</em>
              </h2>
            </div>
            <p>
              Meet the founders behind the consultancy. A personal approach to
              every conversation and every opportunity.
            </p>
          </div>
          <div className="founder-grid">
            {[
              ["Faisal Bhai", "FB", "Land & development advisory"],
              ["Zaid Bhai", "ZB", "Residential & international advisory"],
            ].map(([name, initials, focus]) => (
              <article className="founder" key={name}>
                {name === "Faisal Bhai" ? (
                  <div className="founder-portrait founder-portrait-photo">
                    <Image
                      src="/founders/faisal-bhai.jpeg"
                      alt="Faisal Bhai, co-founder"
                      fill
                      sizes="(max-width: 760px) 140px, (max-width: 1050px) 130px, 180px"
                      className="founder-photo"
                    />
                  </div>
                ) : (
                  <div
                    className="founder-portrait"
                    role="img"
                    aria-label={`Portrait placeholder for ${name}`}
                  >
                    <span>{initials}</span>
                    <small>PORTRAIT TO FOLLOW</small>
                  </div>
                )}
                <div>
                  <p className="eyebrow">CO-FOUNDER</p>
                  <h3>{name}</h3>
                  <p>{focus}</p>
                  <p className="founder-bio">
                    Professional biography, credentials and years of experience
                    to be added following founder approval.
                  </p>
                  <a className="underlined-link" href="#contact">
                    Connect with our team <Icon name="arrow-up" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="locations">
          <div className="container">
            <p className="eyebrow light">LOCAL KNOWLEDGE. WIDER HORIZONS.</p>
            <div>
              {["Noida", "Delhi", "Gurgaon", "Jaipur", "UAE"].map((city, i) => (
                <span key={city}>
                  {i > 0 && <i>✧</i>}
                  {city}
                </span>
              ))}
            </div>
            <p>Five destinations. A world of opportunity.</p>
          </div>
        </section>
        <section className="section container contact" id="contact">
          <div>
            <p className="eyebrow">06 / LET’S BEGIN</p>
            <h2>
              Your vision.
              <br />
              <em>Our next conversation.</em>
            </h2>
            <p>
              Looking for a home, an investment, or a fresh perspective? Tell us
              what you have in mind. Request a conversation or arrange a
              property visit.
            </p>
            <div className="contact-note">
              <Icon name="location" />
              <span>
                Serving Noida, Delhi, Gurgaon,
                <br />
                Jaipur & the UAE
              </span>
            </div>
            <p className="content-note">
              Demo contact channels. Company details and social profiles are
              awaiting configuration.
            </p>
            <div className="socials">
              {(["whatsapp", "instagram", "youtube"] as const).map((s) => (
                <a
                  key={s}
                  className={`social-brand social-brand-${s}`}
                  href={siteConfig.social[s]}
                  aria-label={`${s} (placeholder profile)`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/social/${s}.svg`}
                    alt=""
                    width={26}
                    height={26}
                  />
                </a>
              ))}
            </div>
          </div>
          <InquiryForm />
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div>
              <Brand />
              <p>Exceptional spaces. Enduring possibilities.</p>
            </div>
            <div>
              <span>EXPLORE</span>
              <a href="#expertise">Our expertise</a>
              <a href="#founders">Our founders</a>
            </div>
            <div>
              <span>YOUR NEXT CHAPTER</span>
              <a href="#projects">Ongoing projects</a>
              <a href="#delivered">Delivered portfolio</a>
              <a href="#contact">Book a visit</a>
            </div>
            <a href="#home" className="back-top">
              Back to top <Icon name="arrow-up" />
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Verdant Estates. All rights reserved.
            </span>
            <span>
              Concept website · Sample listings & illustrative imagery
            </span>
            <span>INDIA & UAE</span>
          </div>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp (placeholder number)"
      >
        <Icon name="whatsapp" size={26} />
      </a>
    </>
  );
}

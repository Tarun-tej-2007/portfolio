function Footer() {
  return (
    <>
      <section className="sec wrap" id="record">
        <div className="sec-head rise">
          <div>
            <p className="kicker">Level <b>04</b> — Experience</p>
            <h2 className="display h-sec" style={{ marginTop: '14px' }}>
              <span className="ln">The</span>
              <br />
              <span className="ln">record.</span>
            </h2>
          </div>
          <div aria-hidden="true" className="hp" data-hp="9"></div>
        </div>
        <div className="case-col">
          <div className="log rise">
            <div className="logrow">
              <div className="when">Apr 2026 — July 2026</div>
              <div>
                <div className="what">
                  Onesol
                </div>
                <div className="role">Full-Stack Web Developer Intern</div>
                <div className="note">
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Develop features for CREO-LABS, an AI-powered platform for generating and refining brand posters.</li>
                    <li>Built and enhanced the brand onboarding workflow and contributed to the poster-generation experience.</li>
                    <li>Developed production features using Next.js, FastAPI, AWS Lambda, AWS Bedrock, LangChain, REST APIs, and Git/GitHub.</li>
                    <li>Contributed code that was merged into the main branch and deployed as part of the live product.</li>
                    <li>Collaborated with the development team on user-facing functionality and gained practical experience with AI application architecture and service-to-service communication.</li>
                  </ul>
                </div>
              </div>
              <div className="dur" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                <span>4 mos</span>
                <img alt="Onesol" decoding="async" src="logo/onesol.webp" style={{ width: '80px', height: 'auto', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec wrap" id="contact">
        <div className="sec-head rise">
          <div className="kick-row">
            <p className="kicker">Level <b>05</b> — Contact</p>
            <p className="avail">
              <span className="brk">[</span>
              <span className="dot"></span>
              Open to work · On-site · Remote
              <span className="brk">]</span>
            </p>
          </div>
          <h2 className="display h-sec">
            <span className="ln">Got something</span>
            <br />
            <span className="ln">worth designing</span>
            <br />
            <span className="ln">properly?</span>
          </h2>
          <aside className="chan" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p className="chan-top">
                <span className="badge">Direct</span>
                <span className="chan-no">Channel 01</span>
              </p>
              <h3 className="chan-title">WhatsApp</h3>
              <p className="chan-desc">Send a message directly. No forms, no fuss.</p>
              <a className="btn-skew chan-btn" href="https://wa.me/918328394354" rel="noopener noreferrer" target="_blank">
                <span className="btn-t">Message</span>
              </a>
            </div>

            <div style={{ paddingTop: '20px', borderTop: '1px solid var(--hairline)' }}>
              <p className="chan-top">
                <span className="badge">Direct</span>
                <span className="chan-no">Channel 02</span>
              </p>
              <h3 className="chan-title">Email</h3>
              <p className="chan-desc">Drop an email anytime. Get a reply within 24 hrs.</p>
              <a className="btn-skew chan-btn" href="mailto:taruntej947@gmail.com" rel="noopener noreferrer">
                <span className="btn-t">Email Me</span>
              </a>
            </div>
          </aside>
        </div>
        <div className="head-col rise">
          <a aria-label="Resume, opens in a new tab" className="btn-skew btn-inline" href="/resume/TarunTej_Resume.pdf" rel="noopener noreferrer" target="_blank">
            <span className="btn-t">Resume</span>
          </a>
        </div>
      </section>

      <div className="wrap" id="pageEnd">
        <div className="case-col">
          <div className="foot">
            <ul className="socials">
              <li><a href="https://www.linkedin.com/in/kondeti-tarun-tej-b8a102344/" rel="noopener noreferrer" target="_blank" style={{ fontSize: '1rem' }}>LinkedIn<span aria-hidden="true">↗</span></a></li>
              <li><a href="https://github.com/Tarun-tej-2007" rel="noopener noreferrer" target="_blank" style={{ fontSize: '1rem' }}>GitHub<span aria-hidden="true">↗</span></a></li>
              <li><a href="https://x.com/TarunTej44" rel="noopener noreferrer" target="_blank" style={{ fontSize: '1rem' }}>Twitter<span aria-hidden="true">↗</span></a></li>
            </ul>
            <span className="foot-me" style={{ fontSize: '0.85rem', marginTop: '16px' }}>Kondeti Tarun Tej · Full Stack Developer</span>
            <span className="foot-legal" style={{ fontSize: '0.75rem', marginTop: '8px' }}>© 2026 Kondeti Tarun Tej. All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

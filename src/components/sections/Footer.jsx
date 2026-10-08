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
              <div className="when">Jan 2024 — Present</div>
              <div>
                <div className="what">
                  <img alt="" className="co-ic" decoding="async" height="16" loading="lazy" src="logo/salaryse.webp" width="16" />
                  SalarySe
                </div>
                <div className="role">Full Stack Developer · Gurgaon · Full-Time</div>
                <div className="note">Credit, UPI, lending, leasing and payroll products, going 0&nbsp;→&nbsp;1.</div>
              </div>
              <div className="dur">2 yrs 8 mos</div>
            </div>
            
            <div className="logrow">
              <div className="when">Oct 2022 — Dec 2023</div>
              <div>
                <div className="what">
                  <img alt="" className="co-ic" decoding="async" height="16" loading="lazy" src="logo/mridul-rohan.webp" width="16" />
                  Mridul &amp; Rohan
                </div>
                <div className="role">UX Designer · Remote · Part-Time</div>
                <div className="note">UX and UI across apps, sites and templates. Trained the interns who took it over.</div>
              </div>
              <div className="dur">1 yr 3 mos</div>
            </div>
            
            <div className="logrow">
              <div className="when">Dec 2022 — Feb 2023</div>
              <div>
                <div className="what">
                  <img alt="" className="co-ic" decoding="async" height="16" loading="lazy" src="logo/pharmallama.webp" width="16" />
                  Pharmallama
                </div>
                <div className="role">UX Designer · Remote · Part-Time</div>
                <div className="note">Led UX on a medication app seniors could actually use, and kept using.</div>
              </div>
              <div className="dur">3 mos</div>
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
          <aside className="chan">
            <p className="chan-top">
              <span className="badge">Direct</span>
              <span className="chan-no">Channel 01</span>
            </p>
            <h3 className="chan-title">WhatsApp</h3>
            <p className="chan-desc">Send a message. No filling forms, no scheduling a call. Get a reply within 24 hrs.</p>
            <a className="btn-skew chan-btn" href="https://wa.me/919555800002" rel="noopener noreferrer" target="_blank">
              <span className="btn-t">Message now</span>
            </a>
          </aside>
        </div>
        <div className="head-col rise">
          <a aria-label="Resume, opens in a new tab" className="btn-skew btn-inline" href="https://oyearsh.vercel.app/resume/Arshvardhan_Bishnoi_Resume_Product_Designer.pdf" rel="noopener noreferrer" target="_blank">
            <span className="btn-t">Resume</span>
          </a>
        </div>
      </section>

      <div className="wrap" id="pageEnd">
        <div className="case-col">
          <div className="foot">
            <ul className="socials">
              <li><a href="https://www.linkedin.com/in/arshvardhanbishnoi" rel="noopener noreferrer" target="_blank">LinkedIn<span aria-hidden="true">↗</span></a></li>
              <li><a href="https://www.behance.net/arshbishnoi" rel="noopener noreferrer" target="_blank">Behance<span aria-hidden="true">↗</span></a></li>
              <li><a href="https://www.instagram.com/arshvardhanbishnoi" rel="noopener noreferrer" target="_blank">Instagram<span aria-hidden="true">↗</span></a></li>
            </ul>
            <span className="foot-me">Kondeti Tarun Tej · Full Stack Developer · Gurgaon</span>
            <span className="foot-legal">© 2026 Kondeti Tarun Tej. All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

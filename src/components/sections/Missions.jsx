const casesData = [
  {
    slug: 'bbps',
    title: 'BBPS (Bharat Bill Payment System)',
    year: '2026',
    brief: 'Electricity, mobile, internet and credit card bills brought inside SalarySe, cutting the manual chase and making what is owed visible.',
    tools: 'Figma, ChatGPT, Adobe After Effects',
    stats: [
      { num: '₹2.33 Cr', label: 'First-quarter bill payments' },
      { num: '6.5x', label: 'Monthly payers in eight months' },
    ]
  },
  {
    slug: 'credit-on-upi',
    title: 'CoBranded Credit Card with RBL Bank',
    year: '2025',
    brief: 'Turning UPI from a utility into a credit layer, so paying with credit needs no new habit, just the flow people already have.',
    tools: 'Figma, Vercel, ChatGPT (Image Creation), Adobe After Effects',
    stats: [
      { num: '10.7K+', label: 'RBL UP Cards issued' },
      { num: '₹61 Cr+', label: 'Merchant payments powered on UPI' },
    ]
  },
  {
    slug: 'deals',
    title: 'Deals - A Gift Cards Product',
    year: '2025',
    brief: 'Brand offers and gift cards in one place, built so the right one is found in seconds instead of hunted for.',
    tools: 'Figma, ChatGPT (Image Creation), Adobe After Effects',
    stats: [
      { num: '₹3 Cr+', label: 'Worth of gift cards bought per quarter' },
      { num: '5.2x', label: 'Monthly gift card sales vs pre-revamp' },
    ]
  },
  {
    slug: 'home-screen',
    title: 'SalarySe HomeScreen Redesign',
    year: '2025',
    brief: 'SalarySe had outgrown its Credit-on-UPI identity. The home screen was still a shelf of shortcuts, so it was rebuilt as the way into an ecosystem.',
    tools: 'Figma, ChatGPT (Image Creation), Adobe Illustrator',
    impactDesc: 'A shortcut shelf rebuilt as a multi-product home.',
    stats: []
  },
  {
    slug: 'salaryse-upi',
    title: 'SalarySe UPI - A Payments Product',
    year: '2024',
    brief: 'The app itself: UPI speed carrying credit-backed payments, instant cash and spend management in a single flow.',
    tools: 'Figma and the good old Internet',
    stats: [
      { num: '53K+', label: 'Monthly transacting users, from 26' },
      { num: '₹15.35 Cr', label: 'Quarterly payment value, up 5.8x' },
    ]
  }
];

function CaseItem({ data, index }) {
  return (
    <article className="case" style={{ '--i': index }}>
      <div className="case-bar">
        <div className="case-bar-l">
          <h3 className="case-title">{data.title}</h3>
          <a aria-label={`View case study: ${data.title}`} className="btn-skew btn-mini js-case" href="#">
            <span className="btn-t">→</span>
          </a>
        </div>
        <span className="case-year">{data.year}</span>
      </div>
      <div className="case-body">
        <div className="case-main">
          <div className="case-cover">
            <img alt="" aria-hidden="true" decoding="async" loading="lazy" src={`case/${data.slug}/cover.webp`} />
          </div>
          <div className="case-brief">
            <p className="case-lab">Brief</p>
            <p>{data.brief}</p>
          </div>
        </div>
        <aside className="case-side">
          <p className="case-lab rule">Tool Stack</p>
          <p className="case-val">{data.tools}</p>
          <p className="case-lab rule" style={{ marginTop: '22px' }}>Impact</p>
          
          {data.impactDesc && <p className="case-val">{data.impactDesc}</p>}
          
          {data.stats.length > 0 && (
            <div className="stats">
              {data.stats.map((stat, i) => (
                <div className="stat" key={i}>
                  <b>{stat.num}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
          
          <a className="btn-skew js-case" href="#">
            <span className="btn-t">
              View Case Study
              <span aria-hidden="true" className="btn-ar">→</span>
            </span>
          </a>
        </aside>
      </div>
    </article>
  );
}

function Missions() {
  return (
    <section className="sec wrap" id="missions">
      <div className="sec-head rise">
        <div>
          <p className="kicker">Level <b>02</b> — Selected work</p>
          <h2 className="display h-sec" style={{ marginTop: '14px' }}>
            <span className="ln">The</span>
            <br />
            <span className="ln">missions.</span>
          </h2>
        </div>
        <div aria-hidden="true" className="hp" data-hp="6"></div>
      </div>
      
      <div className="cases case-col" style={{ '--n': casesData.length }}>
        {casesData.map((c, i) => (
          <CaseItem key={c.slug} data={c} index={i} />
        ))}
      </div>
      
      <div className="case-col">
        <div className="more-bar">
          <span>
            More missions incoming
            <span className="more-tail">, check back soon</span>
          </span>
          <span aria-hidden="true" className="more-glyphs">◈ ◈ ◈</span>
        </div>
      </div>
    </section>
  );
}

export default Missions;

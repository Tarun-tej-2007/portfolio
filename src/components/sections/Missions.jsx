import { useState } from 'react';
import { sfx } from '../../utils/sfx';

const casesData = [
  {
    slug: 'codeatlas',
    coverExt: 'png',
    title: 'CODEATLAS',
    year: '2026',
    categories: ['all', 'ai', 'data'],
    brief: 'Understanding a large codebase shouldn\'t require tracing thousands of files manually. CodeAtlas analyzes source code, resolves symbols and dependencies, builds architecture graphs, and turns the results into an interactive visual intelligence layer for developers.',
    tools: 'Next.js, FastAPI, Python, Tree-sitter, PostgreSQL',
    repoLink: 'https://github.com/Tarun-tej-2007/codeatlas',
    caseStudyLink: 'https://github.com/Tarun-tej-2007/CodeAtlas/blob/main/README.md',
    stats: [
      { num: '266+', label: 'Tests across the analysis engine' },
      { num: 'Multi-layer', label: 'Architecture & dependency intelligence' },
    ]
  },
  {
    slug: 'satquery',
    coverExt: 'png',
    title: 'SATQUERY AI',
    year: '2026',
    categories: ['all', 'ai', 'fullstack'],
    brief: 'Satellite Intelligence Platform. Next-generation geospatial intelligence platform ingesting and processing Sentinel-1 SAR and Sentinel-2 optical imagery to monitor environmental patterns, flood risks, and land use changes.',
    tools: 'Next.js, FastAPI, Python, Sentinel-1, Sentinel-2',
    repoLink: 'https://github.com/Tarun-tej-2007/sih-prototype',
    caseStudyLink: 'https://github.com/Tarun-tej-2007/sih-prototype/blob/main/README.md',
    stats: [
      { num: 'S1 · S2', label: 'Multi-sensor Earth observation' },
    ]
  },
  {
    slug: 'agridata',
    coverExt: 'png',
    title: 'AGRIDATA',
    year: '2025',
    categories: ['all', 'ai', 'data'],
    brief: 'Agricultural Intelligence Platform. Turning raw agricultural data into actionable intelligence. Agridata Copilot ingests and profiles datasets, detects anomalies, analyzes spatial indicators, surfaces insights, and generates decision-ready reports.',
    tools: 'Next.js, FastAPI, Python, PostgreSQL, AI',
    repoLink: 'https://github.com/Tarun-tej-2007/Agridata-Copilot',
    caseStudyLink: 'https://github.com/Tarun-tej-2007/Agridata-Copilot/blob/main/README.md',
    stats: [
      { num: 'CSV · XLSX', label: 'Agricultural data ingestion' },
      { num: 'AI → INSIGHTS', label: 'Data → intelligence → reports' },
    ]
  },
  {
    slug: 'f1-insight',
    coverExt: 'png',
    title: 'F1 INSIGHT',
    year: '2025',
    categories: ['all', 'fullstack', 'data'],
    brief: 'Formula 1 Analytics Platform. Formula 1 data is everywhere, but understanding performance takes more than race results. F1 Insight brings drivers, teams, races, standings, points progression, and pit-stop efficiency into one interactive analytics platform.',
    tools: 'React, Vite, Node.js, Express, MongoDB, Recharts',
    repoLink: 'https://f1insighgt.netlify.app/',
    caseStudyLink: 'https://github.com/Tarun-tej-2007/f1insight',
    stats: [
      { num: '24+', label: 'Races analyzed' },
      { num: 'DATA → INSIGHT', label: 'Driver · Team · Race analytics' },
    ]
  },
  {
    slug: 'factify',
    coverExt: 'png',
    title: 'FACTIFY',
    year: '2025',
    categories: ['all', 'ai', 'fullstack'],
    brief: 'Content Verification Platform. The internet moves faster than fact-checking. Factify gives users a quick way to verify links, claims, news, and media — combining AI analysis with security checks to surface suspicious content before it is trusted or shared.',
    tools: 'React Native, Expo, TypeScript, Node.js, Express, Gemini',
    repoLink: 'https://github.com/Tarun-tej-2007/Factify',
    caseStudyLink: 'https://github.com/Tarun-tej-2007/Factify/blob/finalpush/README.md',
    stats: [
      { num: 'URL · TEXT · MEDIA', label: 'Multi-format verification' },
      { num: 'AI + SECURITY', label: 'Gemini · Safe Browsing · VirusTotal' },
    ]
  }
];

const filterCategories = [
  { id: 'all', label: 'ALL MISSIONS' },
  { id: 'ai', label: 'AI & INTELLIGENCE' },
  { id: 'fullstack', label: 'FULL STACK & WEB' },
  { id: 'data', label: 'DATA & DEV TOOLS' },
];

function CaseItem({ data, index }) {
  return (
    <article className="case" style={{ '--i': index }} onMouseEnter={() => sfx.playHover()}>
      <div className="case-bar">
        <div className="case-bar-l">
          <h3 className="case-title">{data.title}</h3>
          <a 
            aria-label={`View case study: ${data.title}`} 
            className={`btn-skew btn-mini ${data.repoLink ? '' : 'js-case'}`} 
            href={data.repoLink || "#"} 
            target={data.repoLink ? "_blank" : "_self"} 
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
          >
            <span className="btn-t">→</span>
          </a>
        </div>
        <span className="case-year">{data.year}</span>
      </div>
      <div className="case-body">
        <div className="case-main">
          <div className="case-cover">
            <img alt="" aria-hidden="true" decoding="async" loading="lazy" src={`case/${data.slug}/cover.${data.coverExt || 'webp'}`} />
          </div>
          <div className="case-brief">
            <p className="case-lab">Brief</p>
            <p>{data.brief}</p>
          </div>
        </div>
        <aside className="case-side">
          <p className="case-lab rule">Tool Stack</p>
          <div className="tool-pills">
            {data.tools.split(',').map(tool => (
              <span key={tool.trim()} className="tool-pill">{tool.trim()}</span>
            ))}
          </div>
          <p className="case-lab rule" style={{ marginTop: '22px' }}>Impact</p>
          
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
          
          <a 
            className={`btn-skew ${data.caseStudyLink ? '' : 'js-case'}`} 
            href={data.caseStudyLink || "#"} 
            target={data.caseStudyLink ? "_blank" : "_self"} 
            rel="noopener noreferrer"
            onClick={() => sfx.playClick()}
          >
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

function Missions({ onTriggerAchievement }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCases = casesData.filter((c) => 
    c.categories.includes(activeFilter)
  );

  const handleFilterClick = (filterId) => {
    sfx.playClick();
    setActiveFilter(filterId);

    if (onTriggerAchievement) {
      onTriggerAchievement('arsenal_filter', 'Arsenal Filtered', 'Inspected specialized project loadouts', 75);
    }
  };

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
      </div>

      {/* Arcade Category Filter Bar */}
      <div className="mission-filter-bar rise">
        <span className="filter-prompt">&gt; FILTER:</span>
        <div className="filter-chips">
          {filterCategories.map((cat) => {
            const count = cat.id === 'all' 
              ? casesData.length 
              : casesData.filter(c => c.categories.includes(cat.id)).length;
            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                className={`filter-chip ${isActive ? 'active' : ''}`}
                onClick={() => handleFilterClick(cat.id)}
                onMouseEnter={() => sfx.playHover()}
              >
                <span className="chip-indicator">{isActive ? '▶' : '◇'}</span>
                <span className="chip-label">{cat.label}</span>
                <span className="chip-count">[{count}]</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="cases case-col" style={{ '--n': filteredCases.length }}>
        {filteredCases.map((c, i) => (
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

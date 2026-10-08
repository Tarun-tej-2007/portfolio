function Marquee() {
  const logos = [
    { src: 'co/pharmallama.webp', w: 1103, hVar: 0.599 },
    { src: 'co/rbl.webp', w: 453, hVar: 1.126 },
    { src: 'co/wipro.webp', w: 168, hVar: 1.250 },
    { src: 'co/salaryse.webp', w: 551, hVar: 0.997 },
    { src: 'co/hdfc.webp', w: 796, hVar: 0.704, isBox: true },
    { src: 'co/mridul-rohan.webp', w: 520, hVar: 1.494, yVar: 0.228 },
    { src: 'co/cub.webp', w: 595, hVar: 0.850, isBox: true },
  ];

  return (
    <div aria-hidden="true" className="marquee">
      <div className="marquee-in">
        {[...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className={`co ${logo.isBox ? 'co-box' : ''}`} 
            style={{ '--h': logo.hVar, ...(logo.yVar ? { '--y': logo.yVar } : {}) }}
          >
            <img alt="" decoding="async" height="132" loading="lazy" src={logo.src} width={logo.w} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

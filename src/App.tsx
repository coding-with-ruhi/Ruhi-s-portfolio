import React, { useState, useEffect } from 'react';
import { profileData } from './data/profile';
import { GitHubIcon, LinkedInIcon } from './components/Icons';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile dropdown on window resize (if scaled up to desktop) or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Accessible skip link */}
      <a href="#main" className="skip-link">
        {profileData.navigation.skipToContent}
      </a>

      {/* NAVBAR */}
      <nav className="site-nav" aria-label="Main Navigation">
        <div className="container nav-container">
          <a href="#top" className="nav-logo">
            {profileData.navigation.logo}
          </a>

          <div className="nav-actions">
            <ul className="nav-links">
              {profileData.navigation.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-socials">
              <a
                href={profileData.navigation.socials[0].href}
                target="_blank"
                rel="noreferrer"
                className="nav-icon-link"
                aria-label={profileData.navigation.socials[0].ariaLabel}
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={profileData.navigation.socials[1].href}
                target="_blank"
                rel="noreferrer"
                className="nav-icon-link"
                aria-label={profileData.navigation.socials[1].ariaLabel}
              >
                <LinkedInIcon size={20} />
              </a>
            </div>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={
                isMobileMenuOpen
                  ? profileData.navigation.mobileMenuClose
                  : profileData.navigation.mobileMenuOpen
              }
            >
              {isMobileMenuOpen
                ? profileData.navigation.mobileMenuClose
                : profileData.navigation.mobileMenuOpen}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <ul className="mobile-dropdown" role="menu">
            {profileData.navigation.links.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  className="mobile-dropdown-link"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* HERO SECTION */}
      <header id="top" className="hero-section">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="hero-wordmark">
            <span className="hero-name-ruhi">{profileData.hero.nameLine1}</span>
            <span className="hero-name-sharma">{profileData.hero.nameLine2}</span>
          </h1>

          <p className="hero-tagline">{profileData.hero.tagline}</p>

          <div className="hero-buttons">
            <a href={profileData.hero.primaryCta.href} className="btn-primary">
              {profileData.hero.primaryCta.label}
            </a>
            <a
              href={profileData.hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              {profileData.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="hero-scroll-text">{profileData.hero.scrollHint}</span>
          <span className="hero-scroll-line" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main id="main">
        {/* ABOUT SECTION */}
        <section
          id="about"
          className="about-section"
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className="about-grid">
              <h2 id="about-heading" className="section-heading-serif">
                {profileData.about.heading}
              </h2>
              <div className="about-body">
                <p className="about-p1">{profileData.about.paragraphs[0]}</p>
                <p className="about-p2">{profileData.about.paragraphs[1]}</p>
                <ul className="facts-list">
                  {profileData.about.facts.map((fact) => (
                    <li key={fact.label} className="fact-item">
                      <span className="fact-label">{fact.label}</span>
                      <span className="fact-detail">{fact.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SKILLS MARQUEE */}
          <div className="skills-marquee-wrapper">
            <div className="sr-only">
              <h3>{profileData.about.skillsHeadingSrOnly}</h3>
              <ul>
                {profileData.about.allSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="marquee-container" aria-hidden="true">
              {/* Row 1 */}
              <div className="marquee-row marquee-row-1">
                <div className="marquee-track">
                  {profileData.about.skillsRow1
                    .concat(profileData.about.skillsRow1)
                    .map((skill, index) => (
                      <React.Fragment key={`r1a-${index}`}>
                        <span className="marquee-item">{skill}</span>
                        <span className="marquee-dot">•</span>
                      </React.Fragment>
                    ))}
                </div>
                <div className="marquee-track">
                  {profileData.about.skillsRow1
                    .concat(profileData.about.skillsRow1)
                    .map((skill, index) => (
                      <React.Fragment key={`r1b-${index}`}>
                        <span className="marquee-item">{skill}</span>
                        <span className="marquee-dot">•</span>
                      </React.Fragment>
                    ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="marquee-row marquee-row-2">
                <div className="marquee-track">
                  {profileData.about.skillsRow2
                    .concat(profileData.about.skillsRow2)
                    .map((skill, index) => (
                      <React.Fragment key={`r2a-${index}`}>
                        <span className="marquee-item">{skill}</span>
                        <span className="marquee-dot">•</span>
                      </React.Fragment>
                    ))}
                </div>
                <div className="marquee-track">
                  {profileData.about.skillsRow2
                    .concat(profileData.about.skillsRow2)
                    .map((skill, index) => (
                      <React.Fragment key={`r2b-${index}`}>
                        <span className="marquee-item">{skill}</span>
                        <span className="marquee-dot">•</span>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="projects-section"
          aria-labelledby="projects-heading"
        >
          <div className="container">
            <div className="projects-header">
              <h2 id="projects-heading" className="section-heading-serif">
                {profileData.projectsSection.heading}
              </h2>
              <a
                href={profileData.projectsSection.allReposLink.href}
                target="_blank"
                rel="noreferrer"
                className="all-repos-link"
              >
                {profileData.projectsSection.allReposLink.label}
              </a>
            </div>

            <ol className="projects-grid">
              {profileData.projectsSection.projects.map((proj) => {
                const isFeatured = !!proj.featured;

                if (isFeatured) {
                  return (
                    <li
                      key={proj.id}
                      className="project-card project-card-featured"
                    >
                      <div className="project-card-top">
                        <span className="project-number">{proj.number}</span>
                        {proj.label && (
                          <span className="project-badge-pill project-badge-progress">
                            {proj.label}
                          </span>
                        )}
                      </div>

                      <div className="featured-content-grid">
                        <div className="featured-left">
                          <h3 className="project-name">{proj.name}</h3>
                          <div className="project-line" />
                          <p className="project-desc">{proj.description}</p>
                        </div>
                        <div className="featured-right">
                          <div className="project-tags">
                            {proj.tags.map((tag) => (
                              <span key={tag} className="tag-pill">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="project-bottom-action">
                            {proj.link ? (
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                              >
                                {profileData.projectsSection.viewGithubLabel}
                              </a>
                            ) : (
                              <span className="project-in-progress-note">
                                {proj.inProgressNotice}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={proj.id} className="project-card">
                    <div className="project-card-top">
                      <span className="project-number">{proj.number}</span>
                      {proj.label && (
                        <span
                          className={`project-badge-pill ${
                            proj.label === 'Team project'
                              ? 'project-badge-team'
                              : 'project-badge-progress'
                          }`}
                        >
                          {proj.label}
                        </span>
                      )}
                    </div>

                    <h3 className="project-name">{proj.name}</h3>
                    <div className="project-line" />
                    <p className="project-desc">{proj.description}</p>

                    <div className="project-tags">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-bottom-action">
                      {proj.link ? (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          {profileData.projectsSection.viewGithubLabel}
                        </a>
                      ) : (
                        <span className="project-in-progress-note">
                          {proj.inProgressNotice}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="work"
          className="experience-section"
          aria-labelledby="work-heading"
        >
          <div className="container">
            <h2
              id="work-heading"
              className="section-heading-serif experience-section-heading"
            >
              {profileData.experienceSection.heading}
            </h2>

            <ol className="timeline">
              {profileData.experienceSection.items.map((item) => (
                <li key={item.id} className="timeline-entry">
                  <span
                    className={`timeline-dot ${
                      item.isCurrent
                        ? 'timeline-dot-current'
                        : 'timeline-dot-past'
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="timeline-role">{item.role}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-company">{item.company}</span>
                    <span className="timeline-separator" aria-hidden="true">
                      ·
                    </span>
                    <span className="timeline-dates">{item.dates}</span>
                    {item.location && (
                      <>
                        <span className="timeline-separator" aria-hidden="true">
                          ·
                        </span>
                        <span className="timeline-location">
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>
                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="timeline-bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="contact-glow" aria-hidden="true" />
          <div className="container">
            <div className="contact-content">
              <p className="contact-eyebrow">{profileData.contact.eyebrow}</p>
              <h2 id="contact-heading" className="contact-heading">
                {profileData.contact.heading}
              </h2>
              <p className="contact-desc">{profileData.contact.description}</p>
              <div className="contact-button">
                <a
                  href={profileData.contact.ctaButton.href}
                  className="btn-primary"
                >
                  {profileData.contact.ctaButton.label}
                </a>
              </div>
              <ul className="contact-links">
                {profileData.contact.links.map((link) => (
                  <li key={link.label} className="contact-link-item">
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith('mailto:') ? undefined : '_blank'
                      }
                      rel={
                        link.href.startsWith('mailto:')
                          ? undefined
                          : 'noreferrer'
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <p className="footer-copy">
            © {currentYear} {profileData.footer.copyrightName}
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;

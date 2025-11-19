import React, { useState, useMemo, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const faqs = [
    {
      question: 'Who is this for ?',
      answer:
        'Our programs are designed for students, career switchers, and job seekers in tech — anyone looking to build skills and launch their career.'
    },
    {
      question: 'Are there prerequisites or language requirements?',
      answer:
        'Most courses require only a commitment to learn; some advanced tracks assume basic programming knowledge. English proficiency is recommended for most content.'
    }
  ];

  const filteredFaqs = useMemo(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => (f.question + ' ' + f.answer).toLowerCase().includes(q));
  }, [searchValue, faqs]);

  useEffect(() => setOpenIndex(null), [searchValue]);

  return (
    <footer className="footer">
      {/* Footer FAQs (moved from home) */}
      <section className="footer-faqs-section">
        <div className="footer-faqs-container">
          <div className="footer-faqs-header">
            <h2 className="footer-faqs-title">Search FAQs</h2>
            <div className="footer-search-wrapper">
              <svg className="footer-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6" stroke="black" strokeWidth="2" />
                <line x1="12.8" y1="12.8" x2="17.999" y2="17.999" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                className="footer-search-input"
                placeholder="Search FAQs..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                aria-label="Search FAQs"
              />
            </div>
          </div>

          <div className="footer-faq-list">
            {filteredFaqs.length === 0 ? (
              <div className="footer-no-results">Oops — nothing found</div>
            ) : (
              filteredFaqs.map((f, idx) => (
                <div key={idx} className={`footer-faq-item ${openIndex === idx ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="footer-faq-question-wrapper"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                  >
                    <p className="footer-faq-question">{f.question}</p>
                    <div className="footer-faq-toggle" aria-hidden>
                      {openIndex === idx ? (
                        <svg className="footer-faq-icon" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.375 5.91703H5.625V9.86203C5.625 10.0364 5.55915 10.2036 5.44194 10.327C5.32473 10.4503 5.16576 10.5195 5 10.5195C4.83424 10.5195 4.67527 10.4503 4.55806 10.327C4.44085 10.2036 4.375 10.0364 4.375 9.86203V5.91703H0.625C0.45924 5.91703 0.300269 5.84776 0.183058 5.72445C0.0658482 5.60115 0 5.43391 0 5.25953C0 5.08515 0.0658482 4.91791 0.183058 4.79461C0.300269 4.6713 0.45924 4.60203 0.625 4.60203H4.375V0.65703C4.375 0.48265 4.44085 0.315412 4.55806 0.192106C4.67527 0.0688019 4.83424 -0.000469208 5 -0.000469208C5.16576 -0.000469208 5.32473 0.0688019 5.44194 0.192106C5.55915 0.315412 5.625 0.48265 5.625 0.65703V4.60203H9.375C9.54076 4.60203 9.69973 4.6713 9.81694 4.79461C9.93415 4.91791 10 5.08515 10 5.25953C10 5.43391 9.93415 5.60115 9.81694 5.72445C9.69973 5.84776 9.54076 5.91703 9.375 5.91703Z" fill="black"/>
                        </svg>
                      ) : (
                        <svg className="footer-faq-icon" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.375 4.60311H5.625V0.657587C5.625 0.483184 5.55915 0.315925 5.44194 0.192603C5.32473 0.0692815 5.16576 0 5 0C4.83424 0 4.67527 0.0692815 4.55806 0.192603C4.44085 0.315925 4.375 0.483184 4.375 0.657587V4.60311H0.625C0.45924 4.60311 0.300269 4.67239 0.183058 4.79571C0.0658481 4.91904 0 5.0863 0 5.2607C0 5.4351 0.0658481 5.60236 0.183058 5.72568C0.300269 5.849 0.45924 5.91829 0.625 5.91829H4.375V9.86381C4.375 10.0382 4.44085 10.2055 4.55806 10.3288C4.67527 10.4521 4.83424 10.5214 5 10.5214C5.16576 10.5214 5.32473 10.4521 5.44194 10.3288C5.55915 10.2055 5.625 10.0382 5.625 9.86381V5.91829H9.375C9.54076 5.91829 9.69973 5.849 9.81694 5.72568C9.93415 5.60236 10 5.4351 10 5.2607C10 5.0863 9.93415 4.91904 9.81694 4.79571C9.69973 4.67239 9.54076 4.60311 9.375 4.60311Z" fill="black"/>
                        </svg>
                      )}
                    </div>
                  </button>

                  <div className="footer-faq-answer" aria-hidden={openIndex !== idx}>
                    <p>{f.answer}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="footer-newsletter-section">
        <div className="footer-newsletter-container">
          <div className="footer-newsletter-content">
            <h2 className="footer-newsletter-title">Subscribe To Our Newsletter</h2>
            <p className="footer-newsletter-description">
              Stay ahead in your tech journey with weekly tips, insider advice, and career resources straight to your inbox. Be the first to know about upcoming events, mentorship opportunities, and early access to open roles from top tech companies.
            </p>
          </div>

          <div className="footer-newsletter-form">
            <Link to="https://substack.com/@tekcanon" target="_blank">
            <button className="footer-newsletter-button" type="button">
              <span className="footer-newsletter-button-text">Sign Up</span>
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-top">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3e8cd75a5cdfa7024a65133163b4f0d87d330cf8?width=436"
              alt="TekCanon"
              className="footer-logo"
            />

            <div className="footer-links-section">
              <div className="footer-column">
                <h3 className="footer-column-title">Quick Links</h3>
                <ul className="footer-links">
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/mentorship">Mentorship</Link></li>
                  {/*<li><Link to="/career-development">Career Development</Link></li>*/}
                  <li><Link to="/who-we-serve">Who we Serve</Link></li>
                  <li><Link to="/courses">Our Resources</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Contact Us</h3>
                <p className="footer-contact-email">info@tekcanon.com</p>
                <div className="footer-social">
                  <a href="https://instagram.com/tek.canon" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/tekcanon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Address</h3>
                <p className="footer-address">254 Chapman road, Ste 209, Newark DE 19702</p>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copyright">Copyright 2025 TekCanon</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

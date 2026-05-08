import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github, Moon, Sun, Download, ExternalLink, Code2,
  Mail, Linkedin, Award, MapPin, Phone, ChevronRight, Calendar, GraduationCap
} from 'lucide-react'
import {
  SiHtml5, SiJavascript, SiReact, SiCplusplus,
  SiPython, SiAngular, SiSelenium, SiTailwindcss
} from 'react-icons/si'

function useTypewriter(words, speed = 80, pause = 1600) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), speed)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  useEffect(() => {
    setDisplay(words[wordIndex].slice(0, charIndex))
  }, [charIndex, wordIndex, words])

  return display
}

function FadeIn({ children, delay = 0, className = '', y = 30 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SkillCard({ icon, label }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <span>{label}</span>
    </div>
  )
}

function downloadResume() {
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>Eman Israr — Resume</title><style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:'Georgia',serif;background:#fff;color:#1a1a1a;max-width:800px;margin:40px auto;padding:40px;font-size:14px;line-height:1.6;}.header{border-bottom:2px solid #c0816a;padding-bottom:20px;margin-bottom:24px;}.name{font-size:32px;font-weight:bold;}.title{font-size:15px;color:#c0816a;margin-top:4px;font-style:italic;}.contact{display:flex;flex-wrap:wrap;gap:16px;margin-top:12px;font-size:12px;color:#555;}h2{font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;color:#c0816a;margin:24px 0 10px;border-bottom:1px solid #eee;padding-bottom:6px;}.edu-item{margin-bottom:14px;}.edu-title{font-weight:bold;}.edu-sub{color:#c0816a;font-size:12px;}.edu-date{color:#777;font-size:12px;float:right;}.edu-desc{color:#555;font-size:12px;margin-top:4px;}.sg{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}.sc h4{font-weight:bold;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#555;margin-bottom:6px;}.sc ul{list-style:disc;padding-left:16px;color:#333;font-size:12px;}.project{margin-bottom:16px;}.pt{font-weight:bold;}.pl{font-size:11px;color:#c0816a;}.tag{display:inline-block;background:#fdf0ec;color:#c0816a;border:1px solid #e8c4b6;border-radius:4px;padding:1px 7px;font-size:11px;margin-right:4px;margin-top:4px;}.pd{color:#555;font-size:12px;margin-top:4px;}.ach{background:#fdf0ec;border-left:3px solid #c0816a;padding:12px 16px;border-radius:0 8px 8px 0;}.ach h4{font-weight:bold;}.ach p{color:#555;font-size:12px;margin-top:4px;}</style></head><body><div class="header"><div class="name">Eman Israr</div><div class="title">Frontend Developer &amp; Creative Artist</div><div class="contact"><span>📞 0314-5817727</span><span>📧 israreman177@gmail.com</span><span>📍 Rawalpindi, Pakistan</span><span>🔗 github.com/Eman2427</span></div></div><h2>Summary</h2><p style="color:#333">Motivated CS student with hands-on web development experience. Skilled in HTML, CSS, JavaScript, Python, and React. Passionate about AI and innovative solutions. Award-winning artist.</p><h2>Education</h2><div class="edu-item"><span class="edu-date">2024–2026</span><div class="edu-title">Associate Degree in Computer Science</div><div class="edu-sub">Air University, Islamabad</div><div class="edu-desc">Software engineering, algorithms, and web development.</div></div><div class="edu-item"><span class="edu-date">2022–2024</span><div class="edu-title">ICS — Intermediate in Computer Science</div><div class="edu-sub">IMCG I-8/4</div><div class="edu-desc">Computer science, mathematics, and physics.</div></div><h2>Skills</h2><div class="sg"><div class="sc"><h4>Frontend</h4><ul><li>HTML5 &amp; CSS3</li><li>JavaScript</li><li>React.js</li><li>Angular</li></ul></div><div class="sc"><h4>Programming</h4><ul><li>Python</li><li>C++</li></ul></div><div class="sc"><h4>Tools</h4><ul><li>Selenium</li><li>BeautifulSoup</li><li>GitHub</li></ul></div></div><h2>Projects</h2><div class="project"><div class="pt">AI-Based Disease Diagnosis <span class="pl">— paksehat.vercel.app</span></div><div><span class="tag">AI</span><span class="tag">React</span><span class="tag">Python</span></div><div class="pd">AI-powered system to assist in disease identification.</div></div><div class="project"><div class="pt">Recipe Book Website</div><div><span class="tag">React</span><span class="tag">CSS</span></div><div class="pd">Modern online recipe platform with responsive design.</div></div><div class="project"><div class="pt">Web Scraper <span class="pl">— github.com/Eman2427/scraper</span></div><div><span class="tag">Python</span><span class="tag">Selenium</span><span class="tag">BeautifulSoup</span></div><div class="pd">Data scraping tool extracting and processing data from websites.</div></div><h2>Achievements</h2><div class="ach"><h4>Art Exhibition Winner — Air University, 2024</h4><p>First place in university-wide art exhibition.</p></div><h2>Languages &amp; Interests</h2><p><strong>Languages:</strong> English, Urdu &nbsp; <strong>Interests:</strong> Painting, Creative Design, Technology, AI</p></body></html>`
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Eman_Israr_Resume.html'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

const projects = [
  {
    title: 'AI-Based Disease Diagnosis',
    category: 'AI',
    tags: ['AI', 'React', 'Python'],
    link: 'https://paksehat.vercel.app',
    description: 'An intelligent web system to assist in disease identification using AI.',
    bg: 'linear-gradient(135deg, hsl(330,60%,15%), hsl(270,40%,15%), hsl(230,40%,10%))',
  },
  {
    title: 'Recipe Book Website',
    category: 'React',
    tags: ['React', 'CSS', 'Responsive'],
    description: 'A modern recipe platform with a user-friendly, fully responsive interface.',
    bg: 'linear-gradient(135deg, hsl(30,60%,15%), hsl(15,50%,15%), hsl(340,40%,10%))',
  },
  {
    title: 'Web Scraper Tool',
    category: 'Other',
    tags: ['Python', 'Selenium', 'BeautifulSoup'],
    link: 'https://github.com/Eman2427/scraper',
    description: 'Automated data extraction tool using Selenium & BeautifulSoup.',
    bg: 'linear-gradient(135deg, hsl(270,50%,15%), hsl(230,50%,15%), hsl(210,40%,8%))',
  },
]

const education = [
  {
    degree: 'Associate Degree in Computer Science',
    institution: 'Air University, Islamabad',
    period: '2024 – 2026',
    description: 'Focusing on software engineering, algorithms, and web development technologies.',
  },
  {
    degree: 'ICS (Intermediate in Computer Science)',
    institution: 'IMCG I-8/4',
    period: '2022 – 2024',
    description: 'Foundation in computer science, mathematics, and physics.',
  },
]

export default function App() {
  const [light, setLight] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [activeFilter, setActiveFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const role = useTypewriter(['Frontend Developer', 'React Developer', 'UI/UX Enthusiast', 'AI Builder'])

  const navSections = ['Home', 'About', 'Projects', 'Experience', 'Contact']
  const filters = ['All', 'React', 'AI', 'Other']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    const handler = () => {
      const ids = ['home', 'about', 'projects', 'experience', 'contact']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1))
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className={`app ${light ? 'light' : 'dark'}`}>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="nav-logo">E.</a>
          <ul className="nav-links">
            {navSections.map(s => (
              <li key={s}>
                <a
                  href={`#${s.toLowerCase()}`}
                  className={activeSection === s ? 'active' : ''}
                  onClick={() => setActiveSection(s)}
                >
                  {s}
                  {activeSection === s && (
                    <motion.div layoutId="underline" className="nav-underline" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <button className="icon-btn" onClick={() => setLight(!light)} title="Toggle theme">
              {light ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {navSections.map(s => (
              <button key={s} onClick={() => scrollTo(s.toLowerCase())}
                className={activeSection === s ? 'active' : ''}>
                {s}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <FadeIn delay={0.1}>
                <div className="badge">
                  <span className="badge-dot" />
                  Available for new opportunities
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="hero-title">Hello, I'm</h1>
                <h1 className="hero-name">Eman Israr</h1>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="hero-role">
                  <span>{role}</span>
                  <span className="cursor" />
                </div>
              </FadeIn>
              <FadeIn delay={0.45}>
                <p className="hero-desc">
                  Building modern, user-friendly web applications. I craft elegant,
                  high-performance digital experiences that merge beautiful design with robust engineering.
                </p>
              </FadeIn>
              <FadeIn delay={0.55} className="hero-btns">
                <button className="btn btn-outline" onClick={() => scrollTo('projects')}>
                  View Projects <ChevronRight size={16} />
                </button>
                <button className="btn btn-outline" onClick={downloadResume}>
                  <Download size={16} /> Download Resume
                </button>
              </FadeIn>
              <FadeIn delay={0.65} className="social-links">
                <a href="https://github.com/Eman2427" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/eman-israr" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:israreman177@gmail.com" className="social-btn" title="Email">
                  <Mail size={20} />
                </a>
              </FadeIn>
            </div>

            {/* Animated circle */}
            <FadeIn delay={0.3} className="hero-circle-wrap">
              <div className="circle-outer">
                <motion.div
                  className="float-badge badge-left"
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="badge-code">&lt;</span> React Dev
                </motion.div>
                <div className="hero-circle">
                  <div className="blob blob-1" />
                  <div className="blob blob-2" />
                  <div className="blob blob-3" />
                  <div className="blob blob-4" />
                  <div className="blob blob-5" />
                  <div className="blob-gloss" />
                </div>
                <motion.div
                  className="float-badge badge-right"
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="badge-code">/</span> UI/UX
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="title-line" />
          </div>
          <div className="about-grid">
            <FadeIn>
              <blockquote>
                "I believe that great software is born at the intersection of logical problem-solving and empathetic design."
              </blockquote>
              <div className="about-text">
                <p>I am Eman Israr, a Computer Science student at Air University in Islamabad, Pakistan, with a deep passion for frontend development and crafting intuitive user interfaces.</p>
                <p>My journey in tech is driven by a curiosity for how things work and a desire to build applications that feel effortless to use. I specialize in building responsive, modern web applications using React and JavaScript.</p>
                <p>Beyond writing code, I am an award-winning painter — a creative background that gives me a meticulous eye for detail. I strive to create digital experiences that are not just functional, but genuinely delightful.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="skills-section">
                <div className="skill-group">
                  <h4>Frontend</h4>
                  <div className="skills-grid">
                    <SkillCard icon={<SiHtml5 color="#E44D26" size={28} />} label="HTML" />
                    <SkillCard icon={<SiTailwindcss color="#38BDF8" size={28} />} label="CSS" />
                    <SkillCard icon={<SiJavascript color="#F7DF1E" size={28} />} label="JavaScript" />
                    <SkillCard icon={<SiReact color="#61DAFB" size={28} />} label="React" />
                    <SkillCard icon={<SiAngular color="#DD0031" size={28} />} label="Angular" />
                  </div>
                </div>
                <div className="skill-group">
                  <h4>Programming</h4>
                  <div className="skills-grid">
                    <SkillCard icon={<SiPython color="#3776AB" size={28} />} label="Python" />
                    <SkillCard icon={<SiCplusplus color="#00599C" size={28} />} label="C++" />
                  </div>
                </div>
                <div className="skill-group">
                  <h4>Tools</h4>
                  <div className="skills-grid">
                    <SkillCard icon={<SiSelenium color="#43B02A" size={28} />} label="Selenium" />
                    <SkillCard icon={<Github size={28} />} label="GitHub" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Selected Work</h2>
            <div className="title-line" />
          </div>
          <div className="filter-tabs">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <AnimatePresence mode="popLayout">
            <motion.div layout className="projects-grid">
              {filteredProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="project-card"
                >
                  <div className="project-img" style={{ background: p.bg }}>
                    <div className="project-deco">
                      <div className="deco-ring r1" />
                      <div className="deco-ring r2" />
                    </div>
                    <div className="project-overlay">
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="proj-btn">
                          <ExternalLink size={13} /> {p.category === 'Other' ? 'GitHub' : 'Live Demo'}
                        </a>
                      )}
                      {!p.link && (
                        <button className="proj-btn">
                          <Code2 size={13} /> Code
                        </button>
                      )}
                    </div>
                    <span className="proj-cat">{p.category}</span>
                  </div>
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="project-tags">
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Experience</h2>
            <div className="title-line" />
          </div>
          <div className="exp-grid">
            <FadeIn>
              <div className="exp-col-header">
                <div className="exp-icon"><GraduationCap size={20} /></div>
                <h3>Education</h3>
              </div>
              <div className="timeline">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  >
                    <div className="timeline-dot" />
                    <div className="edu-card">
                      <div className="edu-card-top">
                        <h4>{edu.degree}</h4>
                        <div className="edu-period">
                          <Calendar size={11} /> {edu.period}
                        </div>
                      </div>
                      <p className="edu-inst">{edu.institution}</p>
                      <p className="edu-desc">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="exp-col-header">
                <div className="exp-icon"><Award size={20} /></div>
                <h3>Achievements</h3>
              </div>
              <div className="achieve-card">
                <div className="achieve-icon"><Award size={28} /></div>
                <h4>Art Exhibition Winner</h4>
                <p className="achieve-org">Air University • 2024</p>
                <p>Awarded first place in the university-wide art exhibition, demonstrating creativity, aesthetic sensibility, and an eye for design that translates directly into crafting beautiful user interfaces.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-alt">
        <div className="container-sm">
          <div className="section-title">
            <h2>Contact</h2>
            <div className="title-line" />
          </div>
          <p className="contact-intro">I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.</p>
          <div className="contact-grid">
            <a href="tel:0314-5817727" className="contact-card">
              <div className="contact-icon"><Phone size={20} /></div>
              <div><p className="contact-label">Phone</p><p className="contact-value">0314-5817727</p></div>
            </a>
            <a href="mailto:israreman177@gmail.com" className="contact-card">
              <div className="contact-icon"><Mail size={20} /></div>
              <div><p className="contact-label">Email</p><p className="contact-value">israreman177@gmail.com</p></div>
            </a>
            <div className="contact-card no-hover">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div><p className="contact-label">Location</p><p className="contact-value">Rawalpindi, Pakistan</p></div>
            </div>
            <a href="https://www.linkedin.com/in/eman-israr" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon"><Linkedin size={20} /></div>
              <div><p className="contact-label">LinkedIn</p><p className="contact-value">Connect with me</p></div>
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://github.com/Eman2427" target="_blank" rel="noreferrer" className="btn btn-primary">
              <Github size={16} /> GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} <span className="accent">E.</span> Eman Israr — Crafted with intention.</p>
      </footer>
    </div>
  )
}

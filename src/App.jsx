import { useState } from 'react'
import './App.css'

const INSTAGRAM_URL = 'https://instagram.com/paani_puri_kadai'

const menu = [
  {
    name: 'Paani Puri',
    price: 30,
    note: 'Six puri. Count pannunga, ezhu irundha adhu thappu.',
  },
  {
    name: 'Masala Puri',
    price: 40,
    note: 'Paani puri-ku jacket pottu vitta maadhiri.',
  },
  {
    name: 'Bhel Puri',
    price: 40,
    note: 'Diet la irukkom nu solravanga order panra item.',
  },
  {
    name: 'Dahi Puri',
    price: 50,
    note: 'Thayir irukku, so healthy. Science. Nambunga.',
  },
  {
    name: 'Sev Puri',
    price: 45,
    note: 'Crunch sound kekkum. Pakkathu table kum kekkum.',
  },
  {
    name: 'Extra Paani',
    price: 0,
    note: 'Free dhaan. Aana kekkum podhu oru smile podunga.',
  },
]

const rules = [
  'Puri udanjaa adhu unga thappu, engalodadhu illa.',
  '"Konjam kaaram kammi" nu sonna, kammi dhaan. Nambikkai vachi saapdunga.',
  'Last puri free nu ninaikadheenga. Adhu business model illa.',
  'Photo edukka 2 nimisham. Saapda 20 second. Priority set pannunga.',
  'Diet Monday la irundhu dhaan. Innaiku illa.',
]

const reviews = [
  {
    text: 'Oru plate dhaan saapda vandhen. Moonu plate aachu. Ennoda decisions ah naan question panren.',
    by: 'Regular customer, against his will',
  },
  {
    text: 'Paani la enna podraanga nu theriyala. Therinjikkavum venaam.',
    by: 'Food critic (self-declared)',
  },
  {
    text: '5 stars. Aana kadai la seat illa. Nikkara dhaan exercise.',
    by: 'Fitness influencer, 112 followers',
  },
]

function Puri({ className = '' }) {
  return (
    <span className={`puri ${className}`} aria-hidden="true">
      <span className="puri-hole" />
    </span>
  )
}

function App() {
  const [plates, setPlates] = useState(0)

  const plateMessage =
    plates === 0
      ? 'Innum aarambikkala? Shy ah?'
      : plates < 3
        ? 'Warm-up dhaan idhu.'
        : plates < 6
          ? 'Ippo dhaan game start aagudhu.'
          : plates < 10
            ? 'Veetla sollidalaama? Dinner skip nu.'
            : 'Bro, neenga customer illa. Share holder.'

  return (
    <div className="page">
      <header className="nav">
        <a href="#top" className="brand">
          <Puri className="brand-puri" />
          <span>
            Ishwaryah Harini
            <small>Paani Puri Kadai</small>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#rules">Rules</a>
          <a href="#reviews">Reviews</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @paani_puri_kadai
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Ishwaryah Harini Paani Puri Kadai</p>
            <h1>
              Summa Vaanga,
              <br />
              <span className="highlight">Sudaana Puri</span> Saapdunga.
            </h1>
            <p className="tagline">
              Diet plan ah naalaiku vechikalaam. Innaiku paani puri. Avlo dhaan.
            </p>
            <div className="hero-actions">
              <a href="#menu" className="btn btn-primary">
                Menu paakalaam
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                @paani_puri_kadai
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="plate">
              <Puri className="p1" />
              <Puri className="p2" />
              <Puri className="p3" />
              <Puri className="p4" />
              <Puri className="p5" />
              <Puri className="p6" />
            </div>
            <p className="plate-caption">
              Idhu ad photo illa. Real ah ivlo dhaan varum.
            </p>
          </div>
        </section>

        <section className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Kaaram jaasthi</span>
            <span>Self-control kammi</span>
            <span>Paani free</span>
            <span>Puri ku kaasu</span>
            <span>Summa vaanga</span>
            <span>Kaaram jaasthi</span>
            <span>Self-control kammi</span>
            <span>Paani free</span>
            <span>Puri ku kaasu</span>
            <span>Summa vaanga</span>
          </div>
        </section>

        <section id="menu" className="section">
          <h2>Menu</h2>
          <p className="section-sub">
            Prices kammi. Unga self-control um kammi. Perfect match.
          </p>
          <div className="menu-grid">
            {menu.map((item) => (
              <article key={item.name} className="menu-card">
                <div className="menu-head">
                  <h3>{item.name}</h3>
                  <span className="price">
                    {item.price === 0 ? 'Free*' : `₹${item.price}`}
                  </span>
                </div>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section counter-section">
          <h2>Plate Counter</h2>
          <p className="section-sub">
            Neenga evlo saapteenga nu naanga judge panna maattom. Indha button
            pannum.
          </p>
          <div className="counter-box">
            <span className="counter-number">{plates}</span>
            <span className="counter-label">plates</span>
            <p className="counter-message">{plateMessage}</p>
            <div className="counter-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setPlates((n) => n + 1)}
              >
                Innum oru plate
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setPlates(0)}
              >
                Naan saapdave illa
              </button>
            </div>
          </div>
        </section>

        <section id="rules" className="section">
          <h2>Kadai Rules</h2>
          <p className="section-sub">Padikka venaam. Aana follow pannanum.</p>
          <ol className="rules">
            {rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </section>

        <section id="reviews" className="section">
          <h2>Customer Reviews</h2>
          <p className="section-sub">
            100% genuine. Naanga ezhudhala. Promise. (Konjam dhaan ezhudhinom.)
          </p>
          <div className="reviews">
            {reviews.map((review) => (
              <figure key={review.by} className="review">
                <blockquote>"{review.text}"</blockquote>
                <figcaption>— {review.by}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cta">
          <h2>Innum yosikireengala?</h2>
          <p>
            Puri aaridum. Neenga yosikkaradhu mudiyaradhukulla. Follow pannunga,
            DM pannunga, illa direct ah vaanga.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-big"
          >
            Follow @paani_puri_kadai
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Ishwaryah Harini Paani Puri Kadai. No
          refunds on regret.
        </p>
        <p className="fine-print">
          *Extra paani free. Extra puri kekkadheenga. Kettaa kaasu.
        </p>
      </footer>
    </div>
  )
}

export default App

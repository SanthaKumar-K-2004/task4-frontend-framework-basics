import { useMemo, useState } from 'react'
import ComponentCard from './components/ComponentCard'
import CounterDemo from './components/CounterDemo'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

const componentCatalog = [
  {
    id: 'card',
    title: 'ComponentCard',
    purpose: 'Displays reusable UI blocks using dynamic props for title and description.',
    propsUsed: ['title', 'purpose', 'propsUsed', 'isFavorite'],
    category: 'presentational',
  },
  {
    id: 'badge',
    title: 'Badge',
    purpose: 'Shows compact labels and status values with style variants via props.',
    propsUsed: ['text', 'variant'],
    category: 'presentational',
  },
  {
    id: 'counter',
    title: 'CounterDemo',
    purpose: 'Manages local state and updates values using React useState.',
    propsUsed: ['title', 'step'],
    category: 'stateful',
  },
  {
    id: 'theme',
    title: 'ThemeToggle',
    purpose: 'Controls parent state by invoking callback props.',
    propsUsed: ['theme', 'onToggle'],
    category: 'stateful',
  },
]

function App() {
  const [theme, setTheme] = useState('sun')
  const [activeCategory, setActiveCategory] = useState('all')
  const [favorites, setFavorites] = useState([])

  const filteredComponents = useMemo(() => {
    if (activeCategory === 'all') {
      return componentCatalog
    }

    return componentCatalog.filter((component) => component.category === activeCategory)
  }, [activeCategory])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <main className={theme === 'sun' ? 'app theme-sun' : 'app theme-lagoon'}>
      <header className="hero">
        <p className="eyebrow">EduTech Internship - Task 4</p>
        <h1>Frontend Framework Basics (React)</h1>
        <p className="intro">
          This mini component library demonstrates reusable components, props-driven UI,
          and state management.
        </p>
        <div className="hero-actions">
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((prev) => (prev === 'sun' ? 'lagoon' : 'sun'))}
          />
          <div className="filter-buttons">
            <button
              type="button"
              className={activeCategory === 'all' ? 'active' : ''}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button
              type="button"
              className={activeCategory === 'presentational' ? 'active' : ''}
              onClick={() => setActiveCategory('presentational')}
            >
              Presentational
            </button>
            <button
              type="button"
              className={activeCategory === 'stateful' ? 'active' : ''}
              onClick={() => setActiveCategory('stateful')}
            >
              Stateful
            </button>
          </div>
        </div>
      </header>

      <section className="component-grid" aria-label="Component library">
        {filteredComponents.map((component) => (
          <ComponentCard
            key={component.id}
            title={component.title}
            purpose={component.purpose}
            propsUsed={component.propsUsed}
            isFavorite={favorites.includes(component.id)}
            onToggleFavorite={() => toggleFavorite(component.id)}
          />
        ))}
      </section>

      <section className="demos">
        <CounterDemo title="State Demo: Click Counter" step={2} />
        <article className="summary-panel">
          <h3>Live Summary</h3>
          <p>
            Selected category: <strong>{activeCategory}</strong>
          </p>
          <p>
            Starred components: <strong>{favorites.length}</strong>
          </p>
          <p>
            Active theme: <strong>{theme === 'sun' ? 'Sunset' : 'Lagoon'}</strong>
          </p>
        </article>
      </section>

      <section className="deliverables">
        <article className="deliverable-card">
          <h3>Instruction Coverage</h3>
          <ul>
            <li>Create components: done with reusable files in src/components</li>
            <li>Implement props: dynamic content and callbacks across components</li>
            <li>Implement state: parent and local state with useState</li>
            <li>Component library: documented in README with structure and usage</li>
          </ul>
        </article>
        <article className="deliverable-card">
          <h3>Interview Prep</h3>
          <p>
            Virtual DOM improves update efficiency by calculating minimal changes
            before touching the real DOM.
          </p>
          <p>
            React is used for reusable component architecture, predictable state,
            and maintainable UI development.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App

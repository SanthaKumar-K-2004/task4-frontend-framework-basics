function ThemeToggle({ theme, onToggle }) {
  return (
    <button type="button" className="theme-toggle" onClick={onToggle}>
      Theme: {theme === 'sun' ? 'Sunset' : 'Lagoon'}
    </button>
  )
}

export default ThemeToggle

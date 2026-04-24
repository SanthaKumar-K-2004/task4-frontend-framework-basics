import Badge from './Badge'

function ComponentCard({ title, purpose, propsUsed, isFavorite, onToggleFavorite }) {
  return (
    <article className="component-card">
      <div className="component-card-top">
        <h3>{title}</h3>
        <button
          type="button"
          className={isFavorite ? 'favorite active' : 'favorite'}
          onClick={onToggleFavorite}
        >
          {isFavorite ? 'Starred' : 'Star'}
        </button>
      </div>
      <p>{purpose}</p>
      <div className="badge-list">
        {propsUsed.map((propName) => (
          <Badge key={propName} text={propName} variant="accent" />
        ))}
      </div>
    </article>
  )
}

export default ComponentCard

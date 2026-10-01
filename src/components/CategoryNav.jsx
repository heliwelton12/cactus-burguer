export default function CategoryNav({ categories, activeCategory, onSelect }) {
  return (
    <nav className="category-nav" aria-label="Categorias do cardápio">
      <div className="category-nav-inner">
        <span className="category-label">Categorias</span>

        <div className="category-scroll">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={activeCategory === category.id ? 'active' : ''}
              aria-pressed={activeCategory === category.id}
              onClick={() => onSelect(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

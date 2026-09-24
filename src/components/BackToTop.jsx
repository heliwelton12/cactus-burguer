export default function BackToTop({ visible }) {
  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}

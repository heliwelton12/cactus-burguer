export default function StoreStatus({ status, compact = false }) {
  const label = compact
    ? (status.open ? 'ABERTO' : 'FECHADO')
    : status.label;

  return (
    <span className={`store-status ${status.open ? 'is-open' : 'is-closed'}`}>
      <span className="status-dot" aria-hidden="true" />
      {label}
    </span>
  );
}

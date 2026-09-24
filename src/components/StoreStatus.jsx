export default function StoreStatus({ status }) {
  return (
    <span className={`store-status ${status.open ? 'is-open' : 'is-closed'}`}>
      <span className="status-dot" aria-hidden="true" />
      {status.label}
    </span>
  );
}

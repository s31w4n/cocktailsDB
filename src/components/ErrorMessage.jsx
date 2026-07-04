function ErrorMessage({ message, onRetry }) {
  return (
    <section className="section">
      <div className="error-container">
        <h2 className="section-title-error">{message}</h2>
        {onRetry && (
          <button type="button" className="btn btn-primary" onClick={onRetry}>
            try again
          </button>
        )}
      </div>
    </section>
  );
}

export default ErrorMessage;

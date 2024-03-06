export const LoadingSpinner = () => {
  return (
    <div aria-label="Loading..." className="spinner-parent" role="status">
      <span className="loader"></span>
    </div>
  );
};

export const MainLoading = () => {
  return (
    <div
      aria-label="Loading..."
      className="spinner-parent"
      role="status"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <span className="main-loader"></span>
    </div>
  );
};

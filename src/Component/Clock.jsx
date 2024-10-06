function Clock({ time }) {
  return (
    <div className="clock-container">
      <h1>Current time</h1>
      {time}
    </div>
  );
}

export default Clock;

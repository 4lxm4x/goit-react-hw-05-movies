export default function Movies(query) {
  return (
    <div>
      <form onSubmit={query}>
        <input name="query" autoComplete="off" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

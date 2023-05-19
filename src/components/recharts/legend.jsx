export default function renderLegend(props) {
  const { payload } = props;

  return (
    <ul>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ color: entry.color }}>
          {entry.value === "sessionLength"
            ? "Durée moyenne des sessions"
            : entry.value}
        </li>
      ))}
    </ul>
  );
}

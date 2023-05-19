export default function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return <div className="p-2 bg-white">{payload[0].value + "min"}</div>;
  }
}

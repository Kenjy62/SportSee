export default function CustomTick({ x, y, payload, type }) {
  const day = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <text x={x} y={y} dy={20} fill="white" textAnchor="middle">
      {day[payload.value - 1]}
    </text>
  );
}

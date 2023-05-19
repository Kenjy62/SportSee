import { Text } from "recharts";

export default function RadarTick({ payload, x, y, cx, cy, ...rest }) {
  let word = payload.value.charAt(0).toUpperCase() + payload.value.slice(1);

  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 5.5}
      x={x + (x - cx) / 5.5}
    >
      {word}
    </Text>
  );
}

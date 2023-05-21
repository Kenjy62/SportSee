import { Text } from "recharts";

// Daily
export const DailyTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-red-500 p-5">
        <p className="text-white">{payload[0].payload.kilogram}kg</p>
        <p className="text-white">{payload[0].payload.calories}Kcal</p>
      </div>
    );
  }

  return null;
};

export const DailyTick = ({ x, y, payload, type }) => {
  let p = payload.value.split("-");

  return (
    <text
      fill="#9B9EAC"
      className="font-semibold"
      dy={10}
      x={x}
      y={y}
      textAnchor="middle"
    >
      {p[2]}
    </text>
  );
};

export const DailyRightTick = ({ x, y, payload, type }) => {
  return (
    <text
      fill="#9B9EAC"
      className="font-semibold"
      dx={10}
      x={x}
      y={y}
      textAnchor="middle"
    >
      {payload.value}
    </text>
  );
};

// Score

export const ScoreLegend = ({ payload }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <span className="block font-semibold text-md">
        {payload[0].payload.value}%
      </span>
      <span className="block font-semibold text-[#74798C] text-[9px] xl:text-xl">
        de votre objectif
      </span>
    </div>
  );
};

// Radar

export const RadarTick = ({ payload, x, y, cx, cy, ...rest }) => {
  let word = payload.value.charAt(0).toUpperCase() + payload.value.slice(1);

  if (word === "Intensity") {
    word = "Intensité";
  } else if (word === "Speed") {
    word = "Vitesse";
  } else if (word === "Strength") {
    word = "Force";
  } else if (word === "Energy") {
    word = "Énergie";
  }

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
};

// Session

export const SessionLegend = (props) => {
  const { payload } = props;

  return (
    <ul>
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ color: entry.color }}
          className="xl:text-xl"
        >
          {entry.value === "sessionLength"
            ? "Durée moyenne des sessions"
            : entry.value}
        </li>
      ))}
    </ul>
  );
};

export const SessionTick = ({ x, y, payload, type }) => {
  const day = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <text x={x} y={y} dy={20} fill="white" textAnchor="middle">
      {day[payload.value - 1]}
    </text>
  );
};

export const SessionTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return <div className="p-2 bg-white">{payload[0].value + "min"}</div>;
  }
};

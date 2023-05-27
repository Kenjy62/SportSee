import { Text } from "recharts";

/**
 * Modificateur de style pour les tooltips
 * @param {Boolean} active - Etat de la tooltip.
 * @param {object} payload - Informations de la tooltip
 * @returns {JSX.Element} Le composant Tooltip modifié.
 */

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

/**
 * Modificateur de style pour les ticks
 * @param {Number} x - Coordonnée X du tick
 * @param {Number} y - Coordonnée Y du tick
 * @param {object} payload - Information du tick
 * @returns {JSX.Element} Le composant Tick modifié.
 */

export const DailyTick = ({ x, y, payload }) => {
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

/**
 * Modificateur de style pour les ticks.
 * @param {Number} x - Coordonnée X du tick
 * @param {Number} y - Coordonnée Y du tick
 * @param {object} payload - Information du tick
 * @returns {JSX.Element} Le composant Tick modifié.
 */

export const DailyRightTick = ({ x, y, payload }) => {
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

/**
 * Modificateur de style pour la légende.
 * @param {object} payload - Information de la legend
 * @returns {JSX.Element} Le composant Legend modifié.
 */

export const ScoreLegend = ({ payload }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-md block font-semibold">
        {payload[0].payload.value}%
      </span>
      <span className="block text-[9px] font-semibold text-[#74798C] xl:text-xl">
        de votre objectif
      </span>
    </div>
  );
};

// Radar

/**
 * Modificateur de styl pour les ticks
 * @param {Number} x - Coordonnée X du tick
 * @param {Number} y - Coordonnée Y du tick
 * @param {Number} cx - Margin X du X
 * @param {Number} cy - Margin Y du X
 * @param {object} payload - Information du tick
 * @returns {JSX.Element} Le composant Tick modifié.
 */

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

/**
 * Modificateur de style pour la légende.
 * @param {object} props - Props du composant Legend
 * @returns {JSX.Element} Le composant Legend modifié.
 */

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

/**
 * Modificateur de style pour le Tick.
 * @param {object} payload - Information du Tick
 * @param {Number} x - X du Tick
 * @param {Number} y - Y du Tick
 * @returns {JSX.Element} Le composant Tick modifié.
 */

export const SessionTick = ({ x, y, payload }) => {
  const day = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <text x={x} y={y} dy={20} fill="white" textAnchor="middle">
      {day[payload.value - 1]}
    </text>
  );
};

/**
 * Modificateur de style pour la légende.
 * @param {boolean} active - Information du visibilité de la tooltip
 * @param {object} payload - Information de la legend
 * @returns {JSX.Element} Le composant Tooltip modifié.
 */
export const SessionTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <div className="bg-white p-2">{payload[0].value + "min"}</div>;
  }
};

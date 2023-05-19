export function CustomLegendScore({ payload }) {
  return (
    <div className="flex items-center justify-center flex-col">
      <span className="block font-semibold text-2xl">
        {payload[0].payload.value}%
      </span>
      <span className="block font-semibold text-[#74798C] text-xl">
        de votre objectif
      </span>
    </div>
  );
}

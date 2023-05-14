export default function Welcome({ name }) {
  return (
    <div className="flex gap-5 flex-col">
      <h1 className="text-3xl font-bold">
        Bonjour <font color="red">{name}</font>
      </h1>
      <span>Félicitation! Vous avez explosé vos objectifs hier &#128075;</span>
    </div>
  );
}

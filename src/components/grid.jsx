import Daily from "./daily";
import Card from "./card";

export default function Grid() {
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3 grid grid-rows-2 gap-8">
          <div>
            <Daily />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-rows-4 gap-8">
            <Card color="bg-red-100" icon="calorie" type="calories" />
            <Card color="bg-blue-100" icon="proteine" type="proteines" />
            <Card color="bg-yellow-100" icon="glucide" type="glucides" />
            <Card color="bg-pink-100" icon="lipide" type="lipides" />
          </div>
        </div>
      </div>
    </>
  );
}

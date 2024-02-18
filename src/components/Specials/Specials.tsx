import img_01 from "~/assets/images/specials-01.png";
import img_02 from "~/assets/images/specials-02.png";

function Specials() {
  return (
    <section>
      <div className="container mb-20">
        <div className="mb-8">
          <h3 className="text-2xl font-bold">Специальные предложения</h3>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="flex justify-between items-center bg-orange-100 py-4 pl-8 rounded-2xl">
            <div className="w-[60%]">
              <h1 className="text-2xl font-bold">Оформите карту «Северяночка»</h1>
              <p>И получайте бонусы при покупке в магазинах и на сайте</p>
            </div>
            <img src={img_02} alt="404" />
          </div>
          <div className="flex justify-between items-center bg-green-100 py-4 px-8 rounded-2xl">
            <div className="w-[60%]">
              <h1 className="text-2xl font-bold">Покупайте акционные товары</h1>
              <p>И получайте вдвое больше бонусов</p>
            </div>
            <img src={img_01} alt="404" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;

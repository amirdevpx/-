import FRUITS from "~/assets/images/banner-image.png";

function Banner() {
  return (
    <section className="h-[200px] flex items-center bg-banner bg-cover bg-no-repeat">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="mr-8">
            <img src={FRUITS} alt="404" />
          </div>
          <h1 className="text-5xl font-bold text-gray-700 ">Доставка бесплатно от 1000 ₽</h1>
        </div>
      </div>
    </section>
  );
}

export default Banner;

import { useEffect, useState } from "react";

const baseUrl = import.meta.env.BASE_URL;

const slides = [
  {
    id: 1,
    image: `${baseUrl}img/minecraft.jpg`,
    alt: "Minecraft destacado en GameZone",
    title: "Explora mundos sin límites",
    text: "Construye, descubre y vive nuevas aventuras en Minecraft.",
  },
  {
    id: 2,
    image: `${baseUrl}img/forza-horizon-5.jpg`,
    alt: "Forza Horizon 5 destacado en GameZone",
    title: "Siente la velocidad",
    text: "Recorre México y compite con cientos de vehículos en Forza Horizon 5.",
  },
  {
    id: 3,
    image: `${baseUrl}img/ea-sports-fc-26.jpg`,
    alt: "EA SPORTS FC 26 destacado en GameZone",
    title: "Vive el fútbol",
    text: "Disfruta de clubes, jugadores y competiciones en EA SPORTS FC 26.",
  },
];

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      id="destacados"
      className="carousel"
      aria-label="Videojuegos destacados"
    >
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className="carousel__slide"
            aria-hidden={index !== activeSlide}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="carousel__image"
            />

            <div className="carousel__overlay">
              <p className="carousel__eyebrow">Destacados</p>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="carousel__control carousel__control--previous"
        onClick={previousSlide}
        aria-label="Mostrar videojuego anterior"
      >
        ‹
      </button>

      <button
        type="button"
        className="carousel__control carousel__control--next"
        onClick={nextSlide}
        aria-label="Mostrar siguiente videojuego"
      >
        ›
      </button>

      <div
        className="carousel__indicators"
        aria-label="Seleccionar videojuego destacado"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`carousel__indicator ${
              index === activeSlide ? "carousel__indicator--active" : ""
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Mostrar ${slide.title}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;

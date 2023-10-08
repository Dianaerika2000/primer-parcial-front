import Card from "./card";

export default function Carousel() {
  const arrInstructions = [
    {
      img: "https://res.cloudinary.com/dwhmsrfva/image/upload/v1696700327/room_m7ooqc.png",
      title: "Crea una sala",
      description: "Toca una Nueva Sala para poder empezar a diseñar de manera colaborativa"
    },
    {
      img: "https://res.cloudinary.com/dwhmsrfva/image/upload/v1696700412/diagram_a5c4ja.png",
      title: "Diagrama de manera colaborativa",
      description: "Toca obtner enlace de invitacion, para poder compartirla con tus compañeros de trabajo"
    }
  ];
  return (
    <div id="carousel" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Card
            image={arrInstructions[0].img}
            title={arrInstructions[0].title}
            description={arrInstructions[0].description} />
        </div>
        <div className="carousel-item">
          <Card
            image={arrInstructions[1].img}
            title={arrInstructions[1].title}
            description={arrInstructions[1].description} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon btn btn-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon btn btn-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
import React, { useState, useEffect } from 'react';

const CarlosCoronel = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Cambia la imagen cada 2 segundos (2000 milisegundos)

    return () => {
      clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []); // El segundo argumento del useEffect (un array vacío) asegura que el efecto se ejecute solo una vez

  return (
    <article>
      <header className="flex justify-center items-center h-screen">
        <div className=" border-solid border-2 border-green-900">
          <div className="CarlosCoronel ">
            <img
              src={images[currentImageIndex]}
              alt={`Imagen ${currentImageIndex}`}
              className="CarlosCoronel-image  max-h-[400px]"
            />
          </div>
          <div className=" border-solid border-2 border-green-900">
            <h1>Juan Carlos Coronel Zarabanda</h1>
            <h3>Estudiante ACADEMLO</h3>
          </div>
        </div>
      </header>
    </article>
  );
};

export default CarlosCoronel;

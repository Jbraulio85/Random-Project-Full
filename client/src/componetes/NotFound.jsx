import { Footer } from "./Footer";
export const NotFound = () => {
  const image = "https://i.ibb.co/VHV5p02/NotFound.png";

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="sm:text-4xl text-2xl font-bold my-3">Juelagran!!!</h1>
        <img src={image} alt="Page Not Found!!!" className="my-3" />
        <h1 className="sm:text-4xl text-2xl font-bold my-3">
          Page Not Found!!!
        </h1>
        <p className="mt-2">
          <a href="/" className="text-blue-500 hover:underline">
            Regresa al inicio
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

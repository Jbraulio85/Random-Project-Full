import { Image } from "./Image";
import { Form } from "./Form";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
      <div className="flex-1 sm:mr-2 flex justify-center items-center lg:mt-0 sm:mt-0">
        <Image />
      </div>
      <div className="flex-1 sm:ml-2 flex justify-center items-center sm:mt-2 lg:mt-0">
        <Form />
      </div>
      <Footer />
    </div>
  );
};





export const Image = () => {
    const image = "https://i.ibb.co/D93dKF3/testbot-2-Mesa-de-trabajo-1.png";
    return (
      <div className="flex justify-center items-center w-full">
        <img 
          src={image}
          alt="Robot-Image"
          className="w-full h-auto max-w-lg" 
        />
      </div>
    );
  }

  
  
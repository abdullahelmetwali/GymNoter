const Home = () => {
  return (
    <main className="">
        <div className="relative flex justify-center items-center">
          <img
            src="/imgs/MT.jpg"
            className="w-full brightness-[0.5] h-1/3"
            alt="Background"
          />
          <h1 className="absolute text-[5vw] font-black tracking-wider">
           GET UP.
          </h1>
        </div>
        <div>
          <h1 className="text-[3vw] font-black tracking-wider text-center my-8">
            SEARCH - GET - CHOOSE - DIG 
          </h1>
        </div>
    </main>
  );
};

export default Home;

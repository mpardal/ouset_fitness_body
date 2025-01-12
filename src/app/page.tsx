const Home = () => {
  const banniereUrl =
      "https://firebasestorage.googleapis.com/v0/b/ouest-fitness-body-6a187.firebasestorage.app/o/banniere-OFB.JPG?alt=media&token=c3de069f-6fc9-4016-a0b1-fcd5aeb891e5";

  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold my-4">Bienvenue chez Ouest Fitnees Body</h1>
              <img
                  src={banniereUrl}
                  alt="OFB"
                  className="w-1/2 border border-gray-300 rounded-lg shadow-lg"
              />
      </div>
  );
};

export default Home;
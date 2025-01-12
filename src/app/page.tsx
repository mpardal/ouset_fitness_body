import Image from "next/image";

const Home = () => {
  const banniereUrl =
      "https://firebasestorage.googleapis.com/v0/b/ouest-fitness-body-6a187.firebasestorage.app/o/banniere-OFB.JPG?alt=media&token=c3de069f-6fc9-4016-a0b1-fcd5aeb891e5";

  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold my-4">Bienvenue chez Ouest Fitness Body</h1>
          <Image
              src={banniereUrl}
              alt="OFB"
              className="mx-auto w-full max-w-[50%] sm:max-w-[90%] sm:px-4"
              width={200}
              height={200}
          />
      </div>
  );
};

export default Home;
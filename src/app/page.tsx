import Image from "next/image";

const Home = () => {
  const banniereUrl =
      "https://firebasestorage.googleapis.com/v0/b/ouest-fitness-body-6a187.firebasestorage.app/o/banniere-OFB.JPG?alt=media&token=c3de069f-6fc9-4016-a0b1-fcd5aeb891e5";

  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold py-4">Bienvenue chez Ouest Fitness Body</h1>
          <Image
              src={banniereUrl}
              alt="OFB"
              className="mx-auto max-w-[70%] md:max-w-[80%] md:px-4"
              width={800}
              height={800}
          />
      </div>
  );
};

export default Home;
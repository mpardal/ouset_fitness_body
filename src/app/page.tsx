import Image from "next/image";
import {IMAGES} from "@/constants/images";

const Home = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold py-4 text-black text-center">Bienvenue chez Ouest Fitness Body</h1>
          <Image
              src={IMAGES.logo}
              alt="OFB"
              className="mx-auto max-w-[70%] md:max-w-[80%] md:px-4"
              width={800}
              height={800}
          />
      </div>
  );
};

export default Home;
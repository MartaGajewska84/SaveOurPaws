import Image from 'next/image';
import { Button } from 'flowbite-react';
import catImage from '../../public/catImage.png';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center gap-3">
      <div className="relative p-10 pt-5 mt-10">
        <Image
          src={catImage}
          alt="image of a cat"
          fill
          objectFit="contain"
          className="hidden md:block md:absolute -z-10"
        />

        <h1 className="pt-3 md:pt-36 text-center tracking-widest font-mainHeading text-6xl md:text-8xl z-30">
          Save Our Paws
        </h1>
        <div className="flex justify-center">
          <Image
            src={catImage}
            alt="image of a cat"
            width={300}
            className="md:hidden"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <Button gradientDuoTone="cyanToBlue">Adopt me</Button>
        <Button outline gradientDuoTone="cyanToBlue">
          About
        </Button>
      </div>
      <div>
        <p className="hidden md:block md:p-36 md:pt-12 md:text-xl">
          <span className="tracking-wide font-semibold">Save Our Paws</span> is
          a non-profit dedicated to the welfare of animals in need.
        </p>
      </div>
    </div>
  );
}

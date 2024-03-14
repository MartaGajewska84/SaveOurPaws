import { Button } from 'flowbite-react';
import { Badge } from 'flowbite-react';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { IoHourglassOutline } from 'react-icons/io5';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Animal {
  animal: {
    id: number;
    name: string;
    image: StaticImageData;
    readyForAdoption: boolean;
  };
}

export default function AdoptionCard({ animal }: Animal) {
  const { name, image, readyForAdoption } = animal;
  return (
    <div className="p-10 flex justify-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg"
          src={image}
          alt="an image of animal for adoption"
        />

        <div className="p-5">
          <div className="flex justify-between pb-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            {readyForAdoption ? (
              <Badge icon={AiFillHome}>ready to find home</Badge>
            ) : (
              <Badge color="success" icon={IoHourglassOutline}>
                in progress
              </Badge>
            )}
          </div>

          {readyForAdoption ? (
            <Link href="adoptme">
              <Button gradientDuoTone="cyanToBlue">
                <span className="pr-2">Adopt me</span>
                <HiOutlineArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link href="adoptme">
              <Button disabled gradientDuoTone="cyanToBlue">
                <span className="pr-2">Adopt me</span>
                <HiOutlineArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

import { Button } from 'flowbite-react';
import { Badge } from 'flowbite-react';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import image from '../../../public/pet-12.png';

export default function AdoptionCard() {
  return (
    <div className="p-10 flex justify-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src={image}
            alt="an image of animal for adoption"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <div className="flex justify-between pb-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Name
              </h5>
              <Badge icon={AiFillHome}>ready to find home</Badge>
            </div>
          </a>

          <Link href="adoptme">
            <Button gradientDuoTone="cyanToBlue">
              <span className="pr-2">Adopt me</span>
              <HiOutlineArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

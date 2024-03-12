import { Button } from 'flowbite-react';

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center">
        
        <h1 className='pt-56 text-center tracking-widest font-mainHeading text-8xl'>Save Our Paws</h1>
        <div className="flex gap-5 pt-10">
          <Button gradientDuoTone="cyanToBlue">Adopt me</Button>
          <Button outline gradientDuoTone="cyanToBlue">
            About
          </Button>
        </div>
        <div>
          <p className="p-36 pt-12 text-xl">
            <span className="tracking-wide font-semibold">Save Our Paws</span>{' '}
            is a non-profit dedicated to the welfare of animals in need.
          </p>
        </div>
        {/* <p>
        Our mission revolves around rescuing, rehabilitating, and
              rehoming abandoned, abused, or neglected pets, providing them with
              a second chance at a loving and permanent home.
          Our organization operates through a network of dedicated volunteers,
          foster homes, and partner shelters, working tirelessly to ensure the
          well-being of every animal in our care. We prioritize the health and
          happiness of our rescued pets, providing veterinary care, training,
          and socialization to prepare them for adoption. Through community
          outreach and education programs, we strive to raise awareness about
          responsible pet ownership, the importance of spaying and neutering,
          and the value of adopting from shelters and rescue organizations. We
          believe in the transformative power of the human-animal bond and are
          committed to making a positive difference in the lives of both animals
          and people. Join us in our mission to give every rescued pet the
          chance to thrive and find their forever home. Together, we can make a
          difference, one paw at a time.
        </p> */}
      </div>
    </div>
  );
}

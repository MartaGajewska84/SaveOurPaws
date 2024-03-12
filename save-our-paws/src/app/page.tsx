import { Button } from 'flowbite-react';

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center">
        <h1 className="pt-56 text-center tracking-widest">Save Our Paws</h1>
        <div className="flex gap-5 pt-10">
          <Button gradientDuoTone="cyanToBlue">Adopt me</Button>
          <Button outline gradientDuoTone="cyanToBlue">
            About
          </Button>
        </div>
      </div>
    </div>
  );
}

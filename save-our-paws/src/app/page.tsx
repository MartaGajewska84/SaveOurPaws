import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center">
        <h1 className="pt-56 text-center tracking-widest">Save Our Paws</h1>
        <div className="flex gap-5 pt-10">
          <Button color="primary" variant="solid">
            Adopt me
          </Button>
          <Button color="primary" variant="light">
            About
          </Button>
        </div>
      </div>
    </div>
  );
}

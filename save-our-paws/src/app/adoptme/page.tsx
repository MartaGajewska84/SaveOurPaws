import AdoptionCard from '../components/Card';
import animalsForAdoption from '../../animalsforadoption'


export default function Adoptme() {
  return (
    <div>
      <h1 className="p-12 text-center tracking-widest font-mainHeading text-6xl ">
        Ready for adoption
      </h1>
      <div className='md:flex md:justify-center'>
        {animalsForAdoption.map((animal) => {
          return (
            <AdoptionCard key={animal.name} animal={animal}/>
          )
        })}
      </div>
    </div>
  );
}

import Hindi from './Features';  
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Example() {

  const navigation = useNavigate();
  const handleClick = () => {
    navigate('/hindi');
  };

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-20 lg:pb-20 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
          
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-indigo-900 sm:mt-10 sm:text-6xl">
              Madhya Pradesh Police
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            The Madhya Pradesh Police is the law enforcement agency for the state of Madhya Pradesh in India.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Madhya Pradesh Police is headed by the Director General of Police (DGP). The Director General of Police functions from the police headquarters in Bhopal. The DGP is assisted by a team of senior officers from the ranks of ADGP and IG of police to Assistant Inspector General of Police (AIG - a post equivalent in rank and status to the superintendent of police).
            </p>
            <div className="mt-10 flex items-center gap-x-6">

            <button
             onClick={() => navigation('/hindi')}
             type="button"
             className="rounded-md bg-indigo-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"           >
             Get Started 
            </button>

              <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://img.freepik.com/premium-photo/cartoon-character-with-cop-his-head-other-police-officers-front-him_981829-16037.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
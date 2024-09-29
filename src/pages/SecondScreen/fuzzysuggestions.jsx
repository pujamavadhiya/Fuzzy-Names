import { useState } from 'react';

export default function Example() {
  const [showTable, setShowTable] = useState(false); 

  const people = [
    { name: 'Suresh', progress: 100 },
    { name: 'Saurish', progress: 83.33 },
    { name: 'Sourish', progress: 80.66},
    { name: 'Suresha', progress: 78.68},
    { name: 'Sarsh', progress: 55.92},
  ];

  const handleFindClick = (e) => {
    e.preventDefault();
    setShowTable(true); 
  };

  const getGradientColor = (progress) => {
    return `linear-gradient(to right, red, yellow, green ${progress}%)`;
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mx-auto max-w-3xl text-center">
        Fuzzy Name Suggestions for Inconsistent Transliteration
        </h2>
      </div>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Enter Your Name</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>You will get the Fuzzy Suggestions of the name entered.</p>
          </div>
          <form className="mt-5 sm:flex sm:items-center" onSubmit={handleFindClick}>
            <div className="w-full sm:max-w-xs">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="myname"
                id="name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Name"
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Find
            </button>
          </form>
        </div>
      </div>

      {showTable && ( 
        <div className="px-4 sm:px-6 lg:px-8 pt-10">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Some Suggestions are:</h1>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-2 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          style={{ width: '20%' }}
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          style={{ width: '60%' }} 
                        >
                          Similarity
                        </th>
                        <th scope="col" className="px-3 py-3.5 pl-20 text-left text-sm font-semibold text-gray-900"
                        style={{ width: '20%' }}
                        >
                           Description 
                         </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {people.map((person, personIdx) => (
                        <tr
                          key={person.name + personIdx}
                          className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="h-2.5 rounded-full"
                                style={{
                                  width: `${person.progress}%`,
                                  background: getGradientColor(person.progress),
                                }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{person.progress}%</span>
                          </td>
                          <td className="relative pl-20">
                            <a href="https://www.ncrb.gov.in" className="text-indigo-600 hover:text-indigo-900">
                            Click Here<span className="sr-only">, {person.name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

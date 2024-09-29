import { useNavigate } from 'react-router-dom';

const features = [
  {
    name: 'Fuzzy Name Suggestions for Inconsistent Transliteration',
    description:
      'Enter a name and receive fuzzy name recommendations, accounting for common transliteration and spelling variations between Hindi and English. This helps users retrieve all possible matches, even when names are recorded differently.',
    imageSrc: 'https://res.cloudinary.com/hilnmyskv/image/upload/q_70,f_auto/v1690975494/Algolia_com_Blog_assets/Featured_images/engineering/algolia-analyzer-browser-extension-inspect-algolia-specific-requests-in-devtools/bal7slfbel3qr4fpsqon.png',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    route: '/fuzzysuggestions', 
  },
  {
    name: 'Phonetic and Character-Based Name Similarity Check',
    description:
      'Input two names to compare their phonetic and character-based similarities using algorithms like Soundex and Levenshtein. This feature ensures accurate matching even when names differ slightly in spelling or pronunciation.',
    imageSrc: 'https://res.cloudinary.com/hilnmyskv/image/upload/q_70,f_auto/v1724522991/Algolia_com_Blog_assets/Featured_images/engineering/discover-what-fuzzy-search-is-with-fuzzy-matching/fiq8whz7xa9byucl7vmd.png',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    route: '/namesimilarity', 
  },
  {
    name: 'Transliterate Hindi Names and Suggest Fuzzy Matches',
    description:
      'Convert Hindi names into English with a standardized transliteration system, and then apply fuzzy matching to recommend similar names. This ensures seamless search results across both Hindi and English scripts.',
    imageSrc: 'https://filose.com/wp-content/uploads/2022/01/hindi-language-translation-services-1.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    route: '/hinditransliteration', 
  },
  {
    name: 'Cross-Script Name Comparison',
    description:
    'This feature enables users to input a Hindi name and an English name for comparison. By leveraging various algorithms, the system identifies and highlights similarities and differences, facilitating more accurate record matching and enhancing data retrieval processes.',
    imageSrc: 'https://newsimg.giznext.com/mobile/production/news/wp-content/uploads/2022/05/05152137/Easy-Hindi-Typing-1200_675-735x400.png',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    route: '/twoscript', 
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="mx-auto m-0 max-w-2xl pb-24 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our features</h2>
          <p className="mt-4 text-gray-500">
            This project aims to streamline name matching for the police department, addressing challenges related to transliteration, spelling variations, and phonetic differences, especially with Hindi names. By incorporating fuzzy matching algorithms and script interoperability, the system ensures accurate name retrieval and improved operational efficiency.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={`${feature.name}-${featureIdx}`} 
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>

                <button
                  onClick={() => navigate(feature.route)} 
                  type="button"
                  className="mt-4 rounded-md bg-indigo-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Try now 
                </button>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg ">
                  <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

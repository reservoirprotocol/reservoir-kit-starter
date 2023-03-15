import React from 'react';
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

const CollectionSlider: React.FC = () => {
  const collections = [
    'Collection 1',
    'Collection 2',
    'Collection 3',
    'Collection 4',
    'Collection 5',
    'Collection 6',
    'Collection 7',
    'Collection 8',
    'Collection 9',
    'Collection 10',
  ];

  const renderCollections = (items: string[]) =>
    items.map((collection, index) => (
      <div key={index} className="text-white flex p-4 bg-[#3a3a3a94] gap-4 rounded-lg min-w-[240px]">
        <img src="/images/nftLogo.png" width={50} />
        <div>
          <p className='font-medium text-xl'>{collection}</p>
          <p>Floor</p>
        </div>
      </div>
    ));

  return (
    <div className='flex items-center'>
      <div className='text-white z-[99] hidden sm:block'>
        <p className="">Check Some <br/> of Our feature <br/> collections</p>
        <div className='border border-[#6FE999] bg-[#2d623f61] mt-2 p-2 rounded-full text-center w-[40px]'>
          <ArrowLongRightIcon style={{width: '20px'}} />
        </div>
      </div>
      <div className="flex items-center overflow-hidden w-[300px] ml-[-40px] sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1400px]">
        <div className='w-[100px] min-h-[100px] z-[10] bg-collection-slider hidden sm:block'>
          <button className='w-[200px]'></button>
        </div>
        <div className="flex whitespace-nowrap z-0 gap-2">
          <div className="flex space-x-2 animate-moveCollections">
            {renderCollections(collections)}
          </div>
          <div className="flex space-x-2 animate-moveCollections">
            {renderCollections(collections)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSlider;
import React from 'react';
import CompanyLogos from './CompanyLogos';

function UsedBycComponent() {
  return (
    <div className="flex flex-col my-16">
      <div className="flex flex-col items-center gap-2 mb-2">
        <h1 className="font-bold text-3xl">
          Embraced by 9 out of 10 top-tier corporations
        </h1>
        <div className="flex justify-center items-center flex-col mt-1">
          <p className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 items-center justify-center mx-auto">
            Premier organizations worldwide rely on our solution, delivering
          </p>
          <p className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 items-center justify-center mx-auto">
            an unparalleled experience for both creators and end-users.
          </p>
        </div>
      </div>
      <CompanyLogos />
    </div>
  );
}

export default UsedBycComponent;

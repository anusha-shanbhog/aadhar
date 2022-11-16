import { useRef } from 'react';

export const Stats = () => {
    return (
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid row-gap-8 sm:grid-cols-3">
          <div class="text-center">
            <h6 class="text-5xl font-bold text-amber-700">131.68 Cr</h6>
            <p class="text-2xl font-bold">Aadhar card</p>
          </div>
          <div class="text-center">
            <h6 class="text-5xl font-bold text-amber-700">88 %</h6>
            <p class="text-2xl font-bold">Indian's have Aadhar</p>
          </div>
          <div class="text-center">
            <h6 class="text-5xl font-bold text-amber-700">1 lakh</h6>
            <p class="text-2xl font-bold">Operator's</p>
          </div>
        </div>
      </div>
    );
  };
import React from "react";

export const Switch: React.FC = () => {
  return (
    <>
      <input type="checkbox" id="toggle" className="w-0 h-0 invisible peer" />
      <label
        htmlFor="toggle"
        className="
        mr-2
        w-12 
        h-6 
        relative 
        block 
        bg-[#ebebeb] 
        rounded-xl 
        shadow-[inset_0px_5px_15px_rgba(0,0,0,0.1)] 
        cursor-pointer
        after:content-['']
        after:w-5
        after:h-5
        after:absolute
        after:top-[.12rem]
        after:left-[.18rem]
        after:bg-green
        after:rounded-[180px]
        after:shadow-[0px_5px_10px_rgba(0,0,0,0.2)]
        peer-checked:after:left-[25.5px]
        after:transition-all
        after:duration-300
        "
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 207.628 207.628"
          className="absolute w-3 top-[6.1px] left-[6.8px] fill-[#B6B6B6]"
        >
          <circle cx="103.814" cy="103.814" r="45.868" />
          <path
            d="M103.814,157.183c-29.427,0-53.368-23.941-53.368-53.368s23.941-53.368,53.368-53.368s53.368,23.941,53.368,53.368
     S133.241,157.183,103.814,157.183z M103.814,65.446c-21.156,0-38.368,17.212-38.368,38.368s17.212,38.368,38.368,38.368
     s38.368-17.212,38.368-38.368S124.97,65.446,103.814,65.446z"
          />
          <path
            d="M103.814,39.385c-4.142,0-7.5-3.358-7.5-7.5V7.5c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385
     C111.314,36.027,107.956,39.385,103.814,39.385z"
          />
          <path
            d="M103.814,207.628c-4.142,0-7.5-3.358-7.5-7.5v-24.385c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385
     C111.314,204.271,107.956,207.628,103.814,207.628z"
          />
          <path
            d="M200.128,111.314h-24.385c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5
     S204.271,111.314,200.128,111.314z"
          />
          <path
            d="M31.885,111.314H7.5c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5
     S36.027,111.314,31.885,111.314z"
          />
          <path
            d="M154.676,60.452c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.242
     c2.929-2.929,7.678-2.93,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.242C158.515,59.72,156.595,60.452,154.676,60.452z"
          />
          <path
            d="M35.709,179.419c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.243
     c2.929-2.929,7.678-2.929,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.243C39.548,178.687,37.629,179.419,35.709,179.419z
     "
          />
          <path
            d="M171.918,179.419c-1.919,0-3.839-0.732-5.303-2.197l-17.243-17.243c-2.929-2.929-2.929-7.678,0-10.606
     c2.929-2.929,7.678-2.929,10.606,0l17.243,17.243c2.929,2.929,2.929,7.678,0,10.606
     C175.757,178.687,173.838,179.419,171.918,179.419z"
          />
          <path
            d="M52.952,60.452c-1.919,0-3.839-0.732-5.303-2.197L30.406,41.013c-2.929-2.929-2.929-7.677,0-10.606
     c2.929-2.929,7.678-2.93,10.606,0l17.243,17.242c2.929,2.929,2.929,7.677,0,10.606C56.791,59.72,54.872,60.452,52.952,60.452z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          className="absolute w-3 top-[6.1px] left-[29px] fill-[#B6B6B6]"
        >
          <g>
            <g>
              <path d="m275.4,500.7c-135,0-244.7-109.8-244.7-244.7 1.06581e-14-134.9 109.8-244.7 244.7-244.7 8.2,0 16.4,0.4 24.6,1.2 7.2,0.7 13.5,5.2 16.5,11.7s2.4,14.2-1.6,20.2c-23,33.8-35.2,73.3-35.2,114.2 0,105 78.7,192.2 183.2,202.6 7.2,0.7 13.5,5.2 16.5,11.7 3.1,6.5 2.4,14.2-1.6,20.2-45.8,67.4-121.4,107.6-202.4,107.6zm-12.5-448c-106.5,6.5-191.2,95.2-191.2,203.3 1.42109e-14,112.3 91.4,203.7 203.7,203.7 56.4,0 109.6-23.4 147.8-63.7-46.2-11.7-88.1-36.8-120.8-72.6-41.1-45.2-63.8-103.6-63.8-164.6 0.1-37.1 8.4-73.2 24.3-106.1z" />
            </g>
          </g>
        </svg>
      </label>
    </>
  );
};

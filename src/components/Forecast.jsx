import React from 'react'

function Forecast({title}) {
  return (
    <div>

        <div className="flex items-center justify-start mt-6">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-3" />

        <div className="flex flex-row items-center justify-between text-white">

            <div className="flex flex-col items-center">
                <p className="font-light text-sm">
                    12:30pm
                </p>
                {/* //imgae put */}
                <img src="" className="w-12 my-1" alt="" />
                <p className="font-medium">22°</p>
            </div>


            <div className="flex flex-col items-center">
                <p className="font-light text-sm">
                    12:30pm
                </p>
                {/* //imgae put */}
                <img src="" className="w-12 my-1" alt="" />
                <p className="font-medium">22°</p>
            </div>


            <div className="flex flex-col items-center">
                <p className="font-light text-sm">
                    12:30pm
                </p>
                {/* //imgae put */}
                <img src="" className="w-12 my-1" alt="" />
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="font-light text-sm">
                    12:30pm
                </p>
                {/* //imgae put */}
                <img src="" className="w-12 my-1" alt="" />
                <p className="font-medium">22°</p>
            </div>


            <div className="flex flex-col items-center">
                <p className="font-light text-sm">
                    12:30pm
                </p>
                {/* //imgae put */}
                <img src="" className="w-12 my-1" alt="" />
                <p className="font-medium">22°</p>
            </div>

        </div>
    </div>
  );
}

export default Forecast;
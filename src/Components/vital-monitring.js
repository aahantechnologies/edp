import React from 'react'
import heart from "../Images/heart.png";

export default function VitalMonitring() {
  return (
    <div className="bg-[white] p-2 rounded-xl">
                <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
                  Vital Monitring
                </h1>
                <div className="flex justify-between p-2">
                  <div>
                    <h3 className="text-start text-base text-[#707070]">
                      <span className="text-5xl font-bold text-[#348acf]">
                        57
                      </span>
                      %SpO2
                    </h3>
                    <h3 className="text-start text-base text-[#707070]">
                      <span className="text-5xl font-bold text-[#348acf]">
                        85
                      </span>
                      PRbPm
                    </h3>
                    <p className="text-start text-sm text-[#707070]">
                      Last monitored:
                    </p>
                    <p className="text-start text-sm text-[black] font-bold">
                      60 mins ago
                    </p>
                  </div>
                  <div>
                    <img className="w-2/4" src={heart} />
                  </div>
                </div>
              </div>
  )
}

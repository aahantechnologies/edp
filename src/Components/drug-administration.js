import React, { useState } from "react";
import dn from "../Images/down.png";
import upl from "../Images/liup.png";
import dnl from "../Images/ldown.png";
import cross from "../Images/cross.png";
import right from "../Images/right.png";
import play from "../Images/play.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function DrugAdministration() {
  const [count, setCount] = useState(500);
  const [count1, setCount1] = useState(500);
  const [count2, setCount2] = useState(500);
  return (
    <div className="bg-[white] p-2 rounded-xl mt-3">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Drug Administration
      </h1>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6">
        <select id="framework" className="border border-sky-500 rounded w-40 mt-2">
            <option value="1">1. anefhcbfu</option>
            <option value="2">2. anefhcbfu</option>
            <option value="3">3. anefhcbfu</option>
            <option value="4">4. anefhcbfu</option>
          </select>
          <div className="flex gap-1 bg-[#f0f0f0] rounded my-2"><img src={play}/> <p className="text-[9px] text-[red]">The patient is allergic to the compo..</p></div>
          <select id="framework" className="border border-sky-500 rounded w-40 mt-2">
            <option value="1">1. anefhcbfu</option>
            <option value="2">2. anefhcbfu</option>
            <option value="3">3. anefhcbfu</option>
            <option value="4">4. anefhcbfu</option>
          </select>
          <div className="flex gap-1 bg-[#f0f0f0] rounded my-2"><img src={play}/> <p className="text-[9px] text-green-600">The patient is allergic to the compo..</p></div>
          <select id="framework" className="border border-sky-500 rounded w-40 mt-2">
            <option value="1">1. anefhcbfu</option>
            <option value="2">2. anefhcbfu</option>
            <option value="3">3. anefhcbfu</option>
            <option value="4">4. anefhcbfu</option>
          </select>
          <div className="flex gap-1 bg-[#f0f0f0] rounded my-2"><img src={play}/> <p className="text-[9px] text-green-600">The patient is allergic to the compo..</p></div>
        </div>

        <div className="col-span-6">
            <div className="flex justify-around  items-center">
            <div className="flex justify-between border border-sky-500 px-1 rounded mt-2">
            <p>{count}ml</p>
           
          </div >
             <img className="w-6 h-6 mt-2" onClick={() => {
                    setCount(count + 1);
                  }} src={upl}/>
             <img className="w-6 h-6 mt-2" onClick={() => {
                    setCount(count - 1);
                  }} src={dnl}/>
             <img className="w-5 h-5 mt-2" src={cross}/>
            </div>
            <div className="flex justify-around  mt-5 items-center">
            <div className="flex justify-between border border-sky-500 px-1 rounded mt-2">
            <p>{count1}ml</p>
           
          </div >
          <img className="w-6 h-6 mt-2" onClick={() => {
                    setCount1(count1 + 1);
                  }} src={upl}/>
             <img className="w-6 h-6 mt-2" onClick={() => {
                    setCount1(count1 - 1);
                  }} src={dnl}/>
             <img className="w-5 h-5 mt-2" src={right}/>
            </div>
            <div className="flex justify-around mt-5 items-center">
            <div className="flex justify-between border border-sky-500 px-1 rounded mt-2">
            <p>{count2}ml</p>
           
          </div >
          <img className="w-6 h-6 mt-2" onClick={() => {
                    setCount2(count2 + 1);
                  }} src={upl}/>
             <img className="w-6 h-6 mt-2" onClick={() => {
                    setCount2(count2 - 1);
                  }} src={dnl}/>
             <img className="w-5 h-5 mt-2" src={right}/>
            </div>
        </div>
        <div className="col-span-12 text-end"><AddCircleIcon sx={{fontSize:"40px",color:"#348acf"}}/> </div>
      </div>
    </div>
  );
}

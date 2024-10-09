import { Minus, Plus } from "lucide-react";
import React from "react";

const FormIngredients = () => {
  return (
    <>
      <div className="form p-4">
        <div className="input-wrap mb-2">
          <div className="grid grid-cols-[1fr_150px_50px_80px] gap-5">
            <input type="text" />
            <select name="" id="">
              <option value="">Pound</option>
              <option value="">Kilo</option>
              <option value="">Liter</option>
              <option value="">Piece</option>
              <option value="">Cup</option>
            </select>
            <input type="text" />
            <div className="flex gap-2">
              <button className="size-6 center-all rounded-full bg-accent text-white">
                <Plus size={15} />
              </button>
              <button className="size-6 center-all rounded-full bg-gray-300 text-white">
                <Minus />
              </button>
            </div>
          </div>
        </div>
        <div className="input-wrap mb-2">
          <div className="grid grid-cols-[1fr_150px_50px_80px] gap-5">
            <input type="text" />
            <select name="" id="">
              <option value="">Pound</option>
              <option value="">Kilo</option>
              <option value="">Liter</option>
              <option value="">Piece</option>
              <option value="">Cup</option>
            </select>
            <input type="text" />
            <div className="flex gap-2">
              <button className="size-6 center-all rounded-full bg-accent text-white">
                <Plus size={15} />
              </button>
              <button className="size-6 center-all rounded-full bg-gray-300 text-white">
                <Minus />
              </button>
            </div>
          </div>
        </div>
        <div className="input-wrap mb-2">
          <div className="grid grid-cols-[1fr_150px_50px_80px] gap-5">
            <input type="text" />
            <select name="" id="">
              <option value="">Pound</option>
              <option value="">Kilo</option>
              <option value="">Liter</option>
              <option value="">Piece</option>
              <option value="">Cup</option>
            </select>
            <input type="text" />
            <div className="flex gap-2">
              <button className="size-6 center-all rounded-full bg-accent text-white">
                <Plus size={15} />
              </button>
              <button className="size-6 center-all rounded-full bg-gray-300 text-white">
                <Minus />
              </button>
            </div>
          </div>
        </div>
        <div className="input-wrap mb-2">
          <div className="grid grid-cols-[1fr_150px_50px_80px] gap-5">
            <input type="text" />
            <select name="" id="">
              <option value="">Pound</option>
              <option value="">Kilo</option>
              <option value="">Liter</option>
              <option value="">Piece</option>
              <option value="">Cup</option>
            </select>
            <input type="text" />
            <div className="flex gap-2">
              <button className="size-6 center-all rounded-full bg-accent text-white">
                <Plus size={15} />
              </button>
              <button className="size-6 center-all rounded-full bg-gray-300 text-white">
                <Minus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormIngredients;

import React from 'react';

const FilteringBox = () => {
    return (
        <div style={{ width: '24vw' }}  className=" p-5 bg-gray-100  ml-20 filtering-box flex flex-col space-y-4">
            <div className="bg-white p-5 rounded-2xl filter-section">
                <h2 className="text-slate-500 text-3xl filtering-box-title font-lato font-bold pb-5 ">Meal Category</h2>
                <div className="text-slate-400 text-xl categories flex flex-col gap-1 space-y-3">
                    <label className="flex space-x-2">
                        <input type="checkbox" name="category" value="Tajine" />
                        <span>Tajine</span>
                    </label>
                    <label className="flex space-x-2">
                        <input type="checkbox" name="category" value="Couscous" />
                        <span>Couscous</span>
                    </label>
                    <label className="flex space-x-2">
                        <input type="checkbox" name="category" value="Pastilla" />
                        <span>Pastilla</span>
                    </label>
                    <label className="flex space-x-2">
                        <input type="checkbox" name="category" value="Harira Soup" />
                        <span>Harira Soup</span>
                    </label>
                    <label className="flex space-x-2">
                        <input type="checkbox" name="category" value="Kefta" />
                        <span>Kefta</span>
                    </label>
                    <label className="flex space-x-2">
                        <input type="checkbox" name="category" value="Tagine" />
                        <span>Tagine</span>
                    </label>
                </div>
            </div>
            <div className="bg-white p-7 rounded-xl filter-section">
                <h2 className="text-slate-500 text-3xl filtering-box-titlefont-lato font-bold pb-2 ">Price Range</h2>
                <div className="text-slate-400 text-xl price-ranges flex flex-col gap-1 space-y-2">
                    <label className="flex space-x-2">
                        <input type="checkbox" name="price" value="0-100" />
                        <span>0 - 100 MAD</span>
                    </label>
                    <label className="flex space-x-2">
                        <input type="checkbox" name="price" value="100-250" />
                        <span>100 - 250 MAD</span>
                    </label>
                    <label className="flex space-x-2">
                        <input type="checkbox" name="price" value="250-400" />
                        <span>250 - 400 MAD</span>
                    </label>
                    <label className="flex space-x-2">
                        <input type="checkbox" name="price" value="400+" />
                        <span>400+ MAD</span>
                    </label>
                </div>
            </div>
            <button class="border border-4 border-lime-500 h-16 text-2xl apply-button transition duration-300 ease-in-out hover:bg-lime-500 hover:text-white">Apply</button>
            
            
             </div>
    );
}

export default FilteringBox;
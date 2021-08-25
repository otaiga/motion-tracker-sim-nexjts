import React, { useState } from "react";

interface PopupProps {
  handleOkClick: (timerSet: number) => void;
  handleCancelClick: () => void;
}

const Popup = (props: PopupProps) => {
  const [timeSet, setTimeSet] = useState(0);
  const { handleOkClick, handleCancelClick } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 9999) {
      return;
    }
    setTimeSet(value);
  };

  return (
    <div>
      <div className="fixed inset-0 max-w-screen-lg mx-auto rounded opacity-75 pointer-events-none" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-blue-400 rounded shadow-lg sm:max-w-sm">
          <div className="px-6 py-4 text-left modal-content text-white">
            <div className="flex items-center justify-between pb-3">
              <p className="text-lg font-bold ">SET TIMER (seconds)</p>
            </div>
            <div className="mb-1">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="timeSet"
                type="number"
                value={timeSet.toString()}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end pt-2">
              <button
                tabIndex={0}
                className={`px-4 py-1 bg-black text-green-500 mx-2 rounded outline-none focus:outline-none`}
                onClick={() => {
                  handleOkClick(timeSet);
                }}
              >
                OK
              </button>
              <button
                tabIndex={1}
                className={`px-4 py-1 bg-black text-red-500 rounded outline-none focus:outline-none`}
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

import Ball from './Ball.tsx';

import './App.css';

function App() {
  return (
    <>
      <div className="fixed top-0">
        <div className="text-[#fff] text-[24px] px-[68px] py-[24px] font-bold">
          ZERO STUDIOS is an integrated creative agency.
        </div>
      </div>
      <div className="h-[700px] px-[24px] py-[68px] flex justify-end flex-col">
        <Ball />
      </div>
    </>
  );
}

export default App;

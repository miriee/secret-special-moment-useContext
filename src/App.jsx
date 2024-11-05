import { ListeMoment } from "./components/ShowList/ListeMoment"
import { SpecialMoment } from "./components/SpecialMoment"

import { createContext, useState } from 'react';

export const StockageContext = createContext();

function App() {
  const [souvenirs, setSouvenirs] = useState(JSON.parse(localStorage.getItem("liste")) || []);
  return (
    <>
      <StockageContext.Provider value={{souvenirs, setSouvenirs}}>
        <div className="background-image"></div>
        <h1>Journal Intime</h1>
        <div className="body-journal">
          <SpecialMoment />
        </div>
        <div className="list-souvenirs">
          <ListeMoment />
        </div>
      </StockageContext.Provider>
    </>
  )
}

export default App

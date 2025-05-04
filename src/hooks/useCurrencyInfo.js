import { useState, useEffect } from "react";
function useCurrencyInfo(currency) {
  const [ data, setData ] = useState({});
  useEffect(() => {
    fetch(`https://api.freecurrencyapi.
    // com/v1/latest?apikey=fca_live_o9q3
    // i4ey6wpLNKvOGCmw3PB4qSvIuvTha4tZw
    // hQG/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]) )
    console.log(data)
  }, [currency, data])
  return data
  
}

export default useCurrencyInfo;


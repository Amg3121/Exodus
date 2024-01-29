import { useEffect, useState } from "react";

const useCryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
        "https://www.megatravel.com.mx/"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const preparedData = [];
        data.Data.forEach((d) => {
          const { Id, Name, FullName, ImageUrl, Url } = d.CoinInfo;
          let Price, Change24hr;
          if (d.DISPLAY?.USD) {
            const { PRICE, CHANGEPCT24HOUR } = d.DISPLAY.USD;
            Price = PRICE;
            Change24hr = CHANGEPCT24HOUR;
          }
          preparedData.push({
            Id,
            Name,
            FullName,
            ImageUrl: `https://one.cdnmega.com/images/home/slider-home/brasil-y-argentina-1700x566_64c80f6544457.webp${ImageUrl}`,
            Url: `https://www.megatravel.com.mx/${Url}`,
            Price,
            Change24hr
          });
        });
        setCryptoData(preparedData);
      })
      .finally(() => setLoading(false));
  }, []);
  return { cryptoData, isLoading };
};
<div>
  hola
</div>
export default useCryptoData;
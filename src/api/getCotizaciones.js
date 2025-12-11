const url = "https://uy-rates.pablopercas93.workers.dev"

function clearNum(numString) {
  return Number(numString.replace(",", ".")).toFixed(2);
}

export async function getCotizaciones() {
  try {
    const response = await fetch(url);
    console.log(response)

    const data = await response.json();

 return {
      usd: clearNum(data.dolar),
      rbr: clearNum(data.real),
      eur: clearNum(data.euro),
      ars: clearNum(data.argentino),
    };

  } catch (error) {
    console.error("Error fetching data", error);
    return null; // optional but useful
  }
}

//{"dolar":"40,80000","euro":"48,66000","argentino":"0,20000","real":"8,60000"}
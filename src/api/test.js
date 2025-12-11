import { getCotizaciones } from "./getCotizaciones.js";

async function test() {
  const result = await getCotizaciones();
  console.log("Resultado:", result);
}

test();
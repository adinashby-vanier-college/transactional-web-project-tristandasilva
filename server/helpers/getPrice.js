import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const header = {
  "Content-Type": "application/json",
  Authorization:
    "Discogs key=" +
    process.env.CUSTOMER_KEY +
    ", secret=" +
    process.env.CUSTOMER_SECERT,
};

async function getPrice(id) {
  try {
    const response = await axios.get(
      "https://api.discogs.com/marketplace/stats/" + id + "?curr_abbr=cad",
      {
        headers: header,
      }
    );
    return response.data.lowest_price.value;
  } catch (err) {
    return "N/A";
  }
}

async function appendPrice(arr) {
  const data = arr.results;
  const dataWithPrices = await Promise.all(
    data.map(async (item) => ({ ...item, price: await getPrice(item.id) }))
  );
  return dataWithPrices;
}

export default appendPrice;

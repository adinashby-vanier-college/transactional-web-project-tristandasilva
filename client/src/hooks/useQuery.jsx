import { useEffect, useState } from "react";
import axios from "axios";

function useQuery(url) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        setData(response);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [url]);
  return data.data;
}

export default useQuery;

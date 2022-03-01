import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProdcuts = (API) => {
  const [products, setProdcuts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProdcuts(response.data);
	}, []);

  return products;
};

export default useGetProdcuts;
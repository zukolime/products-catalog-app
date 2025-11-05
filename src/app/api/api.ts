import axios from 'axios';
import type { Product } from '../../models/product';

export const fetchData = async (): Promise<Product[]> => {
  const { data } = await axios.get('https://dummyjson.com/products?limit=6');
  return data.products.map(transformData);
};

const transformData = (data: Product) => {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    thumbnail: data.thumbnail,
    liked: false,
  };
};

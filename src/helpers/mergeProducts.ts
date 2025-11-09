import type { Product } from '../models/product';

export const mergeProducts = (oldList: Product[], newList: Product[]) => {
  const currentIds = new Set(oldList.map((product) => product.id));
  const newProducts = newList.filter((product) => !currentIds.has(product.id));
  return [...oldList, ...newProducts];
};

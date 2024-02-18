import productsData from "../../assets/data/products.json";
import { ProductState } from "../slices/productsSlice";

export function fetchAllProducts(limit = 10) {
  return new Promise<{ data: Array<ProductState> }>((resolve) =>
    setTimeout(() => resolve({ data: productsData.slice(0, limit) }), 500)
  );
}

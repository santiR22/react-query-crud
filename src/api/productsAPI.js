import axios from "axios";

const productsAPI = axios.create({
  baseURL: "http://localhost:3000/products",
});

export const getProducts = async () => {
  const res = await productsAPI.get("/");
  return res.data;
};

export const createProduct = (product) => {
  return productsAPI.post("/", product);
};

export const deleteProduct = (id) => {
  return productsAPI.delete(`/${id}`);
};

export const updateProduct = (product) => {
  return productsAPI.put(`/${product.id}`, product);
};

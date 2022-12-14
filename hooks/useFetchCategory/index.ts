import { useQuery } from "@tanstack/react-query";

async function fetchCategoryProduct() {
  const endpoint = "http://localhost:3000/api/store/category";
  const parsed = await fetch(endpoint, {
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
}

async function fetchProducts() {
  const endpoint = "http://localhost:3000/api/store/products";
  const parsed = await fetch(endpoint, {
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
}

// use query
const useCategoryProduct = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => await fetchCategoryProduct(),
  });
};

const useProductData = () => {
  return useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => await fetchProducts(),
  });
};

export { fetchCategoryProduct, useCategoryProduct, useProductData };

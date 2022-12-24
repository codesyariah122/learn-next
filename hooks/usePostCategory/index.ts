import { useQuery } from "@tanstack/react-query";

async function addNewCategory(body: object) {
  const endpoint = "http://localhost:3000/api/store/category";
  const parsed = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = parsed.json();
  return result;
}

export { addNewCategory };

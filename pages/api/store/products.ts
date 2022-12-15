// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type DataType = {
  message: any;
  data: any;
};

const products = [
  {
    id: 1,
    category_name: "shoes",
    name: "Vans Old Skull",
    slug: "vans-old-skull",
    price: 4500000,
  },
  {
    id: 2,
    category_name: "bag",
    name: "The Cure ToteBag",
    slug: "the-cure-totebag",
    price: 125000,
  },
  {
    id: 3,
    category_name: "cosmetics",
    name: "Brightening Facial Foam",
    slug: "brightening-facial-foam",
    price: 200000,
  },
  {
    id: 4,
    category_name: "nutrition food",
    name: "Fitbar Vegetables",
    slug: "fitbar-vegetables",
    price: 50000,
  },
  {
    id: 5,
    category_name: "electronic gadget",
    name: "Samsung Gallaxy S21",
    slug: "samsung-gallaxy-s21",
    price: 3500000,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataType>
) {
  res.status(200).json({
    message: "Welcome in my store",
    data: products,
  });
}

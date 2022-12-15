// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type DataType = {
  message: any;
  data: any;
};

const categories = [
  {
    id: 1,
    name: "shoes",
    slug: "shoes",
  },
  {
    id: 2,
    name: "bag",
    slug: "bag",
  },
  {
    id: 3,
    name: "cosmetics",
    slug: "cosmetics",
  },
  {
    id: 4,
    name: "nutrition food",
    slug: "nutrition-foor",
  },
  {
    id: 5,
    name: "electronic gadget",
    slug: "electronic-gadget",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataType>
) {
  res.status(200).json({
    message: "Welcome in my store",
    data: categories,
  });
}

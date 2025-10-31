export interface MenuVariantOption {
  name: string;
  image?: string;
}

export interface MenuVariantGroup {
  groupName: string;
  options: MenuVariantOption[];
}

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  variantGroups: MenuVariantGroup[];
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Bumbu Ungkep",
    category: "bumbu-ungkep",
    price: "Rp15.000",
    image: "/spicyBites/Bumbu ungkep.png",
    rating: 4.8,
    reviews: 132,
    variantGroups: [
      {
        groupName: "Varian 500ml & 1lt:",
        options: [
          { name: "Bumbu Kalasan", image: "/spicyBites/Bumbu Kalasan.png" },
          { name: "Bumbu Kuning", image: "/spicyBites/Bumbu Kuning.png" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Ayam Ungkep",
    category: "ayam-ungkep",
    price: "Rp20.000",
    image: "/spicyBites/Ayam Ungkep.png",
    rating: 4.9,
    reviews: 158,
    variantGroups: [
      {
        groupName: "Varian:",
        options: [
          { name: "Ayam Kalasan", image: "/spicyBites/Ayam Kalasan.png" },
          { name: "Ayam Kuning", image: "/spicyBites/Ayam Kuning.png" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Sambal",
    category: "sambal",
    price: "Rp20.000",
    image: "/spicyBites/Sambal.png",
    rating: 4.9,
    reviews: 158,
    variantGroups: [
      {
        groupName: "Varian Botol 200g:",
        options: [
          { name: "Sambal Gami", image: "/spicyBites/Sambal Gami botol.png" },
          { name: "Sambal Terasi", image: "/spicyBites/Sambal Terasi botol.png" },
          { name: "Sambal Korek", image: "/spicyBites/Sambal Korek botol.png" },
          { name: "Sambal Mercon", image: "/spicyBites/sambal Mercon botol.png" },
        ],
      },
      {
        groupName: "Varian Pouch 50g:",
        options: [
          { name: "Sambal Gami", image: "/spicyBites/Sambal Gami pouch.png" },
          { name: "Sambal Terasi", image: "/spicyBites/Sambal Terasi pouch.png" },
          { name: "Sambal Korek", image: "/spicyBites/Sambal Korek pouch.png" },
          { name: "Sambal Mercon", image: "/spicyBites/Sambal Mercon pouch.png" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Sambal Lauk",
    category: "sambal-lauk",
    price: "Rp10.000",
    image: "/spicyBites/Sambal Lauk.png",
    rating: 4.7,
    reviews: 97,
    variantGroups: [
      {
        groupName: "Varian Botol 200g:",
        options: [
          { name: "Sambal Cumi", image: "/spicyBites/Sambal Cumi botol.png" },
          { name: "Sambal Pete", image: "/spicyBites/Sambal Pete botol.png" },
        ],
      },
      {
        groupName: "Varian Pouch 50g",
        options: [
          { name: "Sambal Cumi", image: "/spicyBites/Sambal Cumi pouch.png" },
          { name: "Sambal Pete", image: "/spicyBites/Sambal Pete pouch.png" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Sapi",
    category: "sapi",
    price: "Rp25.000",
    image: "/spicyBites/Sapi.png",
    rating: 4.9,
    reviews: 140,
    variantGroups: [
      {
        groupName: "Iga",
        options: [
          { name: "Iga Mercon", image: "/spicyBites/Iga Mercon.png" },
          { name: "Iga Warisan", image: "/spicyBites/sapi-blackpepper.jpg" },
        ],
      },
      {
        groupName: "Paru",
       options: [
          { name: "Paru Mercon", image: "/spicyBites/sapi-manis-pedas.jpg" },
          { name: "Paru Warisan", image: "/spicyBites/sapi-blackpepper.jpg" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Kripik Kentang",
    category: "kripik-kentang",
    price: "Rp12.000",
    image: "/spicyBites/Keripik kentang.png",
    rating: 4.6,
    reviews: 111,
    variantGroups: [
      {
        groupName: "",
        options: [
          { name: "", image: "/spicyBites/Keripik kentang.png" },
          { name: "", image: "/spicyBites/kripik-keju.jpg" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Tahu Tempe",
    category: "tahu-tempe",
    price: "Rp8.000",
    image: "/spicyBites/Tahu tempe.png",
    rating: 4.5,
    reviews: 89,
    variantGroups: [
      {
        groupName: "Jenis",
        options: [
          { name: "Tahu", image: "/spicyBites/Tahu.png" },
          { name: "Tempe", image: "/spicyBites/Tempe.png" },
        ],
      },
    ],
  },
];
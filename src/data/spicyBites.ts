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
  description: string;
  image: string;
  rating: number;
  reviews: number;
  sizes?: string[];   
  variants?: string[];  
  variantGroups: MenuVariantGroup[];
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Bumbu Ungkep Kaldu",
    category: "bumbu-ungkep",
    price: "Rp15.000",
    description: "Bumbu Ungkep Kaldu Mindut Gendut bukan sekadar bumbu ungkep biasa. Diracik dari resep tradisional warisan nenek, bumbu ini sudah mengandung kaldu alami sehingga bisa langsung di gunakan tanpa tambahan bumbu lain. Praktis, sehat, dan bergizi --- menghadirkan rasa gurih autentik khas masakan rumahan.",
    image: "/spicyBites/Bumbu ungkep.png",
    rating: 4.8,
    reviews: 132,
    sizes: ["500 ml", "1 liter"],
    variants: ["Kalasan", "Kuning"],
    variantGroups: [
      {
        groupName: "",
        options: [
          { name: "", image: "/spicyBites/Bumbu Kalasan.png" },
          { name: "", image: "/spicyBites/Bumbu Kuning.png" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Ayam Ungkep Pejantan",
    category: "ayam-ungkep",
    price: "Rp20.000",
    description:"",
    image: "/spicyBites/Ayam Ungkep.png",
    rating: 4.9,
    reviews: 158,
    sizes: ["1/2 Ekor", "1 Ekor"],
    variants: ["Kalasan", "Kuning"],
    variantGroups: [
      {
        groupName: "",
        options: [
          { name: "", image: "/spicyBites/Ayam Kalasan.png" },
          { name: "", image: "/spicyBites/Ayam Kuning.png" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Sambal Mindut Gendut",
    category: "sambal",
    description:"",
    price: "Rp20.000",
    image: "/spicyBites/Sambal.png",
    rating: 4.9,
    reviews: 158,
    sizes: ["200 g", "50 g"],
    variants: ["Gami", "Terasi", "Korek", "Mercon"],
    variantGroups: [
      {
        groupName: "",
        options: [
          { name: "", image: "/spicyBites/Sambal Gami botol.png" },
          { name: "", image: "/spicyBites/Sambal Terasi botol.png" },
          { name: "", image: "/spicyBites/Sambal Korek botol.png" },
          { name: "", image: "/spicyBites/sambal Mercon botol.png" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Sambal Lauk",
    category: "sambal-lauk",
    description:"",
    price: "Rp10.000",
    image: "/spicyBites/Sambal Lauk.png",
    rating: 4.7,
    reviews: 97,
    sizes: ["200 g", "50 g"],
    variants: ["Sambal Cumi", "Sambal Pete"],
    variantGroups: [
      {
        groupName: "",
        options: [
          { name: "", image: "/spicyBites/Sambal Cumi botol.png" },
          { name: "", image: "/spicyBites/Sambal Pete botol.png" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Sapi",
    category: "sapi",
    description:"",
    price: "Rp25.000",
    image: "/spicyBites/Sapi.png",
    rating: 4.9,
    reviews: 140,
    sizes: ["200 g"],
    variants: ["Original", "Pedas"],
    variantGroups: [
      {
        groupName: "",
        options: [
          { name: "Iga", image: "/spicyBites/Iga Mercon.png" },
          { name: "Paru", image: "/spicyBites/sapi-blackpepper.jpg" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Kripik Kentang",
    category: "kripik-kentang",
    description:"",
    price: "Rp12.000",
    image: "/spicyBites/Keripik kentang.png",
    rating: 4.6,
    reviews: 111,
    sizes: ["80 g"],
    variants: ["Original"],
    variantGroups: [
      {
        groupName: "Varian:",
        options: [
          { name: "Original", image: "/spicyBites/Keripik kentang.png" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Tahu Tempe",
    category: "tahu-tempe",
    description:"",
    price: "Rp8.000",
    image: "/spicyBites/Tahu tempe.png",
    rating: 4.5,
    reviews: 89,
    sizes: ["10 Pcs"],
    variants: ["Tahu", "Tempe"],
    variantGroups: [
      {
        groupName: "Jenis:",
        options: [
          { name: "Tahu", image: "/spicyBites/Tahu.png" },
          { name: "Tempe", image: "/spicyBites/Tempe.png" },
        ],
      },
    ],
  },
];
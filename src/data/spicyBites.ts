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
    description: "Bumbu Ungkep Kaldu Mindut Gendut bukan sekadar bumbu ungkep biasa. Diracik dari resep tradisional warisan nenek, bumbu ini sudah mengandung kaldu alami sehingga bisa langsung di gunakan tanpa tambahan bumbu lain. Praktis, sehat, dan bergizi - menghadirkan rasa gurih autentik khas masakan rumahan.",
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
    description:"Ayam Frozen Pejantan Mindut Gendut bukan ayam ungkep biasa. Dibuat dari ayam pejantan pilihan dan bumbu kaldu alami warisan nenek, tersedia dalam dua varian: Bumbu Kalasan dan Bumbu Kuning. Tanpa pengawet, praktis tinggal goreng — nikmati cita rasa rumahan yang autentik dan bergizi.",
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
    description:"Sambal rumahan autentik tanpa pengawet, dibuat dari bahan segar pilihan dengan cita rasa khas Indonesia. Tersedia 4 varian rasa sesuai level pedas favoritmu: Gami: pedas manis gurih, Terasi: pedas sedang, Korek: pedas gurih yang bikin nagih, Mercon: super pedas",
    price: "Rp20.000",
    image: "/spicyBites/Sambal.png",
    rating: 4.9,
    reviews: 158,
    sizes: ["200 gr", "50 gr"],
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
    description:"Praktisnya lauk pedas khas rumahan, dibuat tanpa pengawet dari bahan segar berkualitas. Tersedia 2 varian favorit: Sambal Baby Cumi & Sambal Pete dengan sambal mercon yang menggugah selera.",
    price: "Rp10.000",
    image: "/spicyBites/Sambal Lauk.png",
    rating: 4.7,
    reviews: 97,
    sizes: ["200 gr", "50 gr"],
    variants: ["Sambal Cumi", "Sambal Pete"],
    variantGroups: [
      {
        groupName: "",
        options: [
          { name: "", image: "/spicyBites/Sambal Cumi botol.png" },
          { name: "", image: "/spicyBites/Sambal Pete pouch.png" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Sapi",
    category: "sapi",
    description:"Sambal Iga Mindut Gendut — perpaduan iga sapi pilihan dengan bumbu khas warisan nenek, dibuat tanpa pengawet, melalui proses diungkep selama 8 jam, menghasilkan cita rasa yang dalam, bebas amis, dan bumbu yang meresap sempurna hingga ke dalam daging. Menu makan malam spesial dan praktis siap dihidangkan!",
    price: "Rp25.000",
    image: "/spicyBites/Sapi.png",
    rating: 4.9,
    reviews: 140,
    sizes: ["200 gr"],
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
    description:"Keripik Kentang Sambal Mindut Gendut — keripik kentang renyah dengan coating sambal pedas manis gurih khas Mindut Gendut. Dibuat dari kentang pilihan tanpa pengawet, rasanya nagih banget! Dikemas dalam toples praktis yang memudahkan penyimpanan. Cocok dimakan langsung, jadi lauk pendamping nasi, atau teman nasi goreng & mi instan favoritmu!",
    price: "Rp12.000",
    image: "/spicyBites/Keripik kentang.png",
    rating: 4.6,
    reviews: 111,
    sizes: ["80 gr"],
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
    name: "Tahu",
    category: "tahu",
    description:"Tahu Susu Spesial Mindut Gendut — dibuat fresh setiap hari dari bahan berkualitas, menghasilkan tekstur lembut dan rasa gurih alami yang khas. Tanpa pengawet, bisa langsung digoreng atau dijadikan lauk sesuai selera. Untuk penyimpanan lebih lama, setelah diterima ganti airnya dengan air panas, lalu simpan di kulkas — tahan hingga 1 minggu. Praktis, segar, dan lezat setiap hari!",
    price: "Rp8.000",
    image: "/spicyBites/Tahu.png",
    rating: 4.5,
    reviews: 89,
    sizes: ["10 Pcs"],
    variants: [],
    variantGroups: [
      {
        groupName: "",
        options: [
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Tempe",
    category: "tempe",
    description:"Tempe Bacem Mindut Gendut — dibuat dari kedelai pilihan dan dimasak perlahan dengan bumbu bacem tradisional khas Jawa. Rasanya manis gurih, lembut, dan meresap sampai ke dalam, menghadirkan cita rasa rumahan yang autentik. Dijamin beda dari tempe bacem biasa — sekali coba, pasti ketagihan!",
    price: "Rp8.000",
    image: "/spicyBites/Tempe.png",
    rating: 4.5,
    reviews: 89,
    sizes: ["10 Pcs"],
    variants: [],
    variantGroups: [
      {
        groupName: "",
        options: [],
      },
    ],
  },
];
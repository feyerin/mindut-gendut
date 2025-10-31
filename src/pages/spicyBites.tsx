// "use client";

// import { motion } from "framer-motion";
// import { menuData } from "../data/spicyBites";

// interface Variant {
//   name: string;
//   image: string;
// }

// interface MenuItem {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   variants: Variant[];
// }

// export default function SpicyBites() {
//   return (
//     <section
//       id="spicyBitesPage"
//       className="w-full min-h-[400px] flex-1 relative"
//       style={{
//         backgroundImage: "url('/background/secondary.png')",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col justify-center items-center text-center px-6 lg:pt-26 pt-32">
//           <motion.h2
//             className="text-5xl md:text-6xl font-[Playfair-Display] text-[#9a0906] font-bold mb-16"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Spicy Bites
//           </motion.h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
//           {menuData.map((menu: MenuItem) => (
//             <motion.div
//               key={menu.id}
//               className="relative bg-[#9a0906]/20 rounded-2xl shadow-sm text-center py-10 px-6 hover:shadow-md transition"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="absolute -top-10 -right-7 w-52 h-52 rounded-full border-[10px] border-yellow-400 bg-white overflow-hidden shadow-md">
//                 <img
//                   src={menu.image}
//                   alt={menu.name}
//                   className="w-full h-full object-cover rounded-full border-4 border-red-900"
//                 />
//               </div>

//               {/* Content */}
//               <div className="mt-36">
//                 <h3 className="font-semibold text-[#9a0906] text-lg">{menu.name}</h3>

//                 {menu.variants && menu.variants.length > 0 && (
//                   <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
//                     {menu.variants.map((variant, i) => (
//                       <div
//                         key={i}
//                         className="flex flex-col items-center p-2 rounded-xl shadow-sm min-w-[90px]"
//                       >
//                         <img
//                           src={variant.image}
//                           alt={variant.name}
//                           className="w-14 h-14 rounded-full object-cover mb-1 border border-gray-200"
//                         />
//                         <p className="text-xs text-red-900 font-bold">{variant.name}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
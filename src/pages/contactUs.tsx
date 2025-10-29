import { useState } from "react";
import ArrowDownIcon from "../assets/arrowDownIcon";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Apa menu andalan Mindut Gendut",
    answer: "Menu andalan kami adalah Nasi Bakar. Semua menu kami dibuat dari resep warisan keluarga, dimasak dengan bumbu rempah asli Indonesia dan cara tradisional yang menjaga cita rasa khasnya.",
  },
  {
    question: "Apakah semua hidangan di Mindut Gendut Halal?",
    answer: "Ya, semua hidangan kami 100% Halal dan Mindut Gendut sudah bersertifikasi Halal.",
  },
  {
    question: "Apakah ada lokasi dine-in?",
    answer: "Ya, lokasi dine-in kami berada di Gading Serpong. Anda bisa mencari di Google Maps dengan kata kunci “Nasi Bakar Mindut Gendut",
  },
  {
    question: "Bagaimana cara melakukan pemesanan online?",
    answer: "Anda dapat memesan melalui website atau WhatsApp kami.",
  },
  {
    question: "Apakah ada minimal ordernya?",
    answer: "Minimal order untuk catering adalah 10 porsi.",
  },
  {
    question: "Apakah Mindut Gendut menerima bulk order?",
    answer: "Ya, kami menerima pesanan dalam jumlah besar untuk event atau acara.",
  },
];

export default function ContactUs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return(
        <>
            <section 
                id="kontak" 
                className="w-full min-h-[400px] pt-20 flex-1 relative"
                style={{
                    backgroundImage: "url('/background/secondary.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="grid grid-cols-8 sm:grid-cols-4 md:grid-cols-12 gap-x-4 sm:gap-x-6 md:pt-8">
                    {/* Gambar */}
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <img
                        src="https://boganamaymay.com/storage/storage/images/section/3766591877.png"
                        alt="Kontak Bogana May-May"
                        className="w-full h-full"
                    />
                    </div>

                    {/* Info + Form */}
                    <div className="col-span-12 sm:col-span-6 lg:col-span-8 px-4 py-8 sm:py-16 sm:px-8 xl:px-40">
                    {/* Info Kontak */}
                    <div className="text-left text-[#990001]">
                        <h1 className="uppercase font-[Playfair-Display] text-5xl md:text-6xl xl:text-8xl text-primary">
                        Kontak Kami
                        </h1>
                        <div className="mt-4 mb-4 text-md md:text-xl">
                        <p>Jl. Klp. Gading Sel. Blok AH10 No.19, RT.8/RW.12</p>
                        <p>West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810</p>
                        <p className="mt-6">Telp : +628119938180</p>
                        <p>Email : bogana.mm@gmail.com</p>
                        </div>
                    </div>

                    <form
                        className="w-full border border-primary rounded px-4 py-6 mt-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
                            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                            const waLink = `https://wa.me/628119938180?text=${encodeURIComponent(
                            `jenis: ${subject}.\n\n${message}`
                            )}`;
                            window.open(waLink, "_blank");

                            form.reset();
                        }}
                        >
                        <div className="mb-4">
                            <label
                            htmlFor="subject"
                            className="block text-gray-700 text-sm font-bold mb-2"
                            >
                            Subject
                            </label>
                            <select
                            id="subject"
                            name="subject"
                            className="shadow bg-white appearance-none border rounded w-full py-3 px-3 text-primary font-worksans focus:outline-none focus:shadow-outline"
                            required
                            >
                            <option value="Catering">Catering</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                            htmlFor="message"
                            className="block text-gray-700 text-sm font-bold mb-2"
                            >
                            Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            className="shadow bg-white appearance-none border font-worksans text-primary rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                            placeholder="Write your message"
                            required
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                            type="submit"
                            className="bg-[#9a0906] text-white font-bold sm:text-md text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                            Submit
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="w-full bg-[#990001] py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-8">
                    FAQs
                    </h1>

                    {/* FAQ List */}
                    <div className="divide-y divide-white border border-white rounded-md">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-4 text-left text-white font-medium hover:bg-[#990001] transition"
                            >
                                <span>{faq.question}</span>
                                <span
                                className={`ml-4 transform transition-transform duration-300 ${
                                    openIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                                >
                                <ArrowDownIcon />
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 text-white bg-[#990001]">
                                <p>{faq.answer}</p>
                                </div>
                            )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
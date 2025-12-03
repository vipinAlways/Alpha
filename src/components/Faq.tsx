import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the price range of Mahindra Thar?",
      answer:
        "The Mahindra Thar is priced between ₹9.99 Lakh to ₹16.99 Lakh (ex-showroom). The price varies based on the variant, fuel type, and transmission option you choose.",
    },
    {
      question: "What are the engine options available?",
      answer:
        "The Mahindra Thar comes with three engine options: a 1497cc petrol engine, a 2184cc diesel engine, and a 1997cc diesel engine. All engines are available with both manual and automatic transmission options.",
    },
    {
      question: "What is the fuel efficiency of Mahindra Thar?",
      answer:
        "The Mahindra Thar delivers a mileage of approximately 15-16 km/l for diesel variants and 12-13 km/l for petrol variants, depending on driving conditions and the specific variant.",
    },
    {
      question: "What safety features does the Thar offer?",
      answer:
        "The Mahindra Thar has received a 4-star Global NCAP safety rating. It comes equipped with dual airbags, ABS with EBD, rear parking sensors, electronic stability program (ESP), hill hold control, and hill descent control.",
    },
    {
      question: "What is the seating capacity?",
      answer:
        "The Mahindra Thar has a seating capacity of 4 people. It features forward-facing front seats and side-facing rear seats, making it suitable for adventure trips and off-road experiences.",
    },
    {
      question: "What is the warranty period?",
      answer:
        "Mahindra offers a comprehensive warranty of 3 years with unlimited kilometers on the Thar. This provides peace of mind for long-distance travelers and off-road enthusiasts.",
    },
    {
      question: "Is Mahindra Thar good for off-roading?",
      answer:
        "Yes, the Mahindra Thar is excellent for off-roading. It features 4x4 capabilities, high ground clearance, robust build quality, and specialized off-road features like differential locks and low-range gearbox.",
    },
    {
      question: "What are the color options available?",
      answer:
        "The Mahindra Thar is available in multiple color options including Aquamarine, Red Rage, Napoli Black, Mystic Copper, Everest White, and Galaxy Grey, allowing you to choose according to your preference.",
    },
  ];

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about Mahindra Thar
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-gray-800 pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 pt-2">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Mail, Edit3, Megaphone, Newspaper } from "lucide-react";
import { Nunito, Lato } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const services = [
  {
    icon: Mail,
    iconBg: "bg-[#ff9580]",
    title: "White-Labeled Campaign Services",
    oldPrice: "$400",
    price: "$250",
    description:
      "Need an extra set of expert hands? We handle the execution while you keep the credit—ads, funnels, automations, and more.",
  },
  {
    icon: Edit3,
    iconBg: "bg-[#5b8bf7]",
    title: "Content Marketing",
    oldPrice: "$500",
    price: "$300",
    description:
      "Close more deals with plug-and-play proposals, onboarding flows, and fulfillment docs that save you hours every week.",
  },
  {
    icon: Megaphone,
    iconBg: "bg-[#ffe082]",
    title: "Branding & Positioning Support",
    oldPrice: null,
    price: "FREE",
    description:
      "Whether you're launching or leveling up, we help you refine your offer and brand voice so you stand out in a sea of sameness.",
  },
  {
    icon: Newspaper,
    iconBg: "bg-[#ff9580]",
    title: "Automation & Tech Integration",
    oldPrice: "$300",
    price: "$150",
    description:
      "Streamline your backend with systems that sync seamlessly—from CRMs to form funnels to reporting dashboards.",
  },
];

export const metadata = {
  title: "Our Services | Lets Make It Digital",
  description:
    "Explore our marketing infrastructure, white-labeled campaign support, branding, and tech automation services.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#d0d7e5] py-20 px-6 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h1
          className={`${nunito.className} text-[36px] font-bold text-[#2a324b] text-center mb-16`}
        >
          Our Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start space-y-5 h-full justify-between"
              >
                {/* Top Content */}
                <div className="space-y-4 w-full">
                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center text-white shadow-sm`}
                  >
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title & Pricing */}
                  <div>
                    <h2
                      className={`${nunito.className} text-[20px] font-bold text-[#1f2438] leading-snug`}
                    >
                      {service.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 text-[20px] font-bold text-[#1f2438]">
                      {service.oldPrice && (
                        <span className="line-through text-gray-500 font-normal">
                          {service.oldPrice}
                        </span>
                      )}
                      <span>{service.price}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`${lato.className} text-[#58627a] text-[15px] leading-relaxed`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2 w-full">
                  <button
                    type="button"
                    className={`${nunito.className} w-full sm:w-auto px-6 py-3 bg-[#ff8266] hover:bg-[#ff6f50] text-white font-bold text-[14px] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95`}
                  >
                    Get An Appoitment
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

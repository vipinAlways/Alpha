import {
  Car,
  Fuel,
  Settings,
  Shield,
  Users,
  Maximize,
  Droplet,
} from "lucide-react";

export default function Info() {
  const specifications = [
    {
      icon: <Car className="w-4 h-4" />,
      label: "Price",
      value: "₹ 9.99 - 16.99 Lakh",
    },
    {
      icon: <Fuel className="w-4 h-4" />,
      label: "Fuel Type",
      value: "Diesel, Petrol",
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: "Transmission",
      value: "Manual, Automatic (TC)",
    },
    {
      icon: <Car className="w-4 h-4" />,
      label: "Engine Size",
      value: "1497 cc, 2184 cc, 1997 cc",
    },
    {
      icon: <Shield className="w-4 h-4" />,
      label: "Safety Rating",
      value: "4 Star (Global NCAP)",
    },
    {
      icon: <Shield className="w-4 h-4" />,
      label: "Warranty",
      value: "3 Years (Unlimited KMs)",
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "Seating Capacity",
      value: "4 People",
    },
    {
      icon: <Maximize className="w-4 h-4" />,
      label: "Size",
      value: "3985 mm L X 1820 mm W X 1850 mm H",
    },
    {
      icon: <Droplet className="w-4 h-4" />,
      label: "Fuel Tank",
      value: "45L, 57L",
    },
  ];

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-50">
      {/* Thar Offers Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Thar Offers</h2>

        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Car className="w-4 h-4" />
            <span>Test Drives</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Settings className="w-4 h-4" />
            <span>Offers & Exchange</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Fuel className="w-4 h-4" />
            <span>EMI Options</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield className="w-4 h-4" />
            <span>Insurance</span>
          </div>
        </div>

        <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-50 transition-colors font-medium">
          Get the Best Deal
        </button>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Mahindra Thar Latest Updates</h2>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">03 Oct 2025</p>
          <h3 className="font-semibold mb-2">
            2025 Mahindra Thar Launched at Rs 9.99 Lakh With New Features
          </h3>
        </div>

        <div>
          <p className="text-xs text-gray-500 mb-1">03 Oct 2025</p>
          <p className="text-sm text-gray-700">
            The Mahindra Thar facelift has been launched at Rs. 9.99 lakh
            (ex-showroom). It gets block-themed interiors, a new 10.25-inch
            infotainment screen and minor exterior tweaks.
          </p>
        </div>
      </div>

      {/* Key Specifications Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">
          Mahindra Thar Key Specifications
        </h2>

        <div className="space-y-3">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0"
            >
              <div className="text-gray-500 mt-1">{spec.icon}</div>
              <div className="flex-1 flex justify-between">
                <span className="text-sm text-gray-600">{spec.label}</span>
                <span className="text-sm font-medium text-right">
                  {spec.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">About Mahindra Thar</h2>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Model Launch Date:</h3>
          <p className="text-sm text-gray-700">
            The 2025 Mahindra Thar was launched in India on 3 October, 2025
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Feature List:</h3>
          <button className="text-red-600 text-sm font-medium hover:underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

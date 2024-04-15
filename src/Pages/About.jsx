import { useState } from "react";
import { MdHistory, MdStars, MdVisibility } from "react-icons/md";

const About = () => {
  const [sections] = useState([
    {
      icon: <MdHistory size={30} />,
      title: "Our History",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus et quam aliquam, nec eleifend mauris fermentum. Donec eleifend turpis at mi bibendum, at faucibus felis vestibulum.",
      color: "bg-blue-400",
    },
    {
      icon: <MdStars size={30} />,
      title: "Our Mission",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus et quam aliquam, nec eleifend mauris fermentum. Donec eleifend turpis at mi bibendum, at faucibus felis vestibulum.",
      color: "bg-green-400",
    },
    {
      icon: <MdVisibility size={30} />,
      title: "Our Vision",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus et quam aliquam, nec eleifend mauris fermentum. Donec eleifend turpis at mi bibendum, at faucibus felis vestibulum.",
      color: "bg-purple-400",
    },
    {
      icon: <MdVisibility size={30} />,
      title: "About Our Team",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum metus et quam aliquam, nec eleifend mauris fermentum. Donec eleifend turpis at mi bibendum, at faucibus felis vestibulum.",
      color: "bg-yellow-400",
    },
  ]);

  return (
    <div className="mx-[1%] md:mx-[3%] rounded-xl mt-6">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        {sections.map((section, index) => (
          <div key={index} className={`mb-8 ${section.color} border border-gray-300 p-6 rounded-lg transition duration-300 hover:shadow-xl hover:bg-white hover:border-blue-500 hover:text-blue-500`}>
            <div className="flex items-center justify-center mb-4">
              {section.icon}
              <h3 className="text-xl font-bold ml-2">{section.title}</h3>
            </div>
            <p className="text-lg mb-4 transition duration-300 hover:text-gray-800">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

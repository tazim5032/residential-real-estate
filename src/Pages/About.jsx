import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { MdHistory, MdStars, MdVisibility } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import 'animate.css'; // Import Animate.css

const About = () => {
    const [sections] = useState([
        {
            icon: <MdHistory size={30} />,
            title: "Our History",
            content: "Our journey began with a simple yet ambitious goal: to create spaces where dreams could thrive and memories could flourish. With each project, we've woven a tale of dedication, innovation, and community. From humble beginnings to becoming a beacon of excellence in the real estate industry, our history is a testament to our unwavering commitment to quality and customer satisfaction.",
            color: "bg-blue-400",
        },
        {
            icon: <MdStars size={30} />,
            title: "Our Mission",
            content: "At HavenCrest, our mission is clear: to redefine the meaning of home by providing exceptional living experiences that inspire and uplift. We aim to create spaces where families can thrive, communities can connect, and dreams can take flight. Through innovation, integrity, and a relentless pursuit of excellence, we are dedicated to shaping a brighter future, one home at a time.",
            color: "bg-green-400",
        },
        {
            icon: <MdVisibility size={30} />,
            title: "Our Vision",
            content: "At HavenCrest, our vision is to be the premier destination for residential real estate, renowned for our commitment to quality, innovation, and customer satisfaction. We aspire to transform the way people perceive and experience homeownership, setting new standards of excellence in the industry. With a focus on growth, sustainability, and social responsibility, we envision a future where every individual finds their perfect place to call home.",
            color: "bg-purple-400",
        },
        {
            icon: <IoPeople size={30} />,
            title: "About Our Team",
            content: "At HavenCrest, our team is a dedicated group of professionals committed to providing exceptional service and guiding clients through their real estate journey with expertise and integrity. With diverse backgrounds and a shared passion for excellence, we collaborate seamlessly to exceed our clients' expectations and deliver outstanding results. Trust in our team's knowledge, experience, and personalized approach to make your real estate dreams a reality.",
            color: "bg-yellow-400",
        },
    ]);

    // State to track the index of the section being rendered
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    useEffect(() => {
        // If there are sections left to render
        if (currentSectionIndex < sections.length - 1) {
            // Set a timeout to render the next section after 1 second
            const timeoutId = setTimeout(() => {
                setCurrentSectionIndex(prevIndex => prevIndex + 1);
            }, 500);
            
            // Cleanup function to clear timeout
            return () => clearTimeout(timeoutId);
        }
    }, [currentSectionIndex, sections]);

    return (
        <div className="mx-[1%] md:mx-[3%] rounded-xl mt-6">
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className=" mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {sections.slice(0, currentSectionIndex + 1).map((section, index) => (
                        <div key={index} className={`mb-8 animate__animated animate__fadeInRight ${section.color} border border-gray-300 p-6 rounded-lg transition duration-300 hover:shadow-xl hover:bg-white hover:border-blue-500 hover:text-blue-500`}>
                            <div className="flex items-center justify-center mb-4">
                                {section.icon}
                                <h3 className="text-xl font-bold ml-2">{section.title}</h3>
                            </div>
                            <p className="text-lg mb-4 transition duration-300 hover:text-gray-800">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;

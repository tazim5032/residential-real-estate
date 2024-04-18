import { FiStar, FiMail, FiPhone, FiFacebook, FiLinkedin } from 'react-icons/fi';


const AgentCard = ({ card }) => {
    const { name, photoUrl, experienceDetails, rating, email, phone, facebook, linkedin } = card;
    return (
        <div className="max-w-xs bg-white shadow-lg
         rounded-lg overflow-hidden m-4 "
         data-aos="zoom-in-down" data-aos-duration="1000">
            <div className="relative">
                <span className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 flex items-center">
                    <FiStar className="mr-1 text-yellow-400" /> {rating}
                </span>
                <img
                    className="w-full h-56 object-cover object-center"
                    src={photoUrl}
                    alt={name}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{experienceDetails}</p>
            </div>
            <div className="px-6 pb-4">
                <a
                    href={`mailto:${email}`}
                    className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
                >
                    <FiMail className="inline-block mr-1" /> 
                </a>
                <a
                    href={`tel:${phone}`}
                    className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
                >
                    <FiPhone className="inline-block mr-1" /> 
                </a>
                <a
                    href={facebook}
                    className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
                >
                    <FiFacebook className="inline-block mr-1" />
                </a>
                <a
                    href={linkedin}
                    className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white"
                >
                    <FiLinkedin className="inline-block mr-1" />
                </a>
            </div>
        </div>
    );
};

export default AgentCard;

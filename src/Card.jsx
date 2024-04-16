import { CiLocationOn } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, estate_title, segment_name, price, status, area, location, image_url } = card;

    return (
        <div className="card transform transition duration-300 hover:scale-105 cursor-pointer rounded-lg shadow-xl hover:shadow-2xl overflow-hidden">
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600">
                <figure className="m-0">
                    <img className="h-[180px] w-full object-cover rounded-t-lg" src={image_url} alt={estate_title} />
                    <div className="absolute top-0 left-0 ml-2 mt-2 bg-purple-800 bg-opacity-75 text-white text-xs uppercase px-2 py-1 rounded shadow">
                        {segment_name}
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-2 bg-red-700 bg-opacity-75 text-white text-xs uppercase px-2 py-1 rounded shadow">
                        {status}
                    </div>
                    <div className="absolute bottom-0 left-0 ml-2 mb-2 bg-green-800 bg-opacity-85 text-white text-sm px-3 py-1 rounded shadow font-serif">
                        Area: {area} sqft
                    </div>
                    <div className="absolute bottom-0 right-0 mr-2 mb-2 bg-blue-700 bg-opacity-85 text-white text-sm px-3 py-1 rounded shadow font-serif">
                        <IoPricetagsOutline className="inline mr-1" />{price}
                    </div>
                </figure>
            </div>
            <div className="card-body p-2 bg-white">
                <h2 className="card-title text-lg font-bold">{estate_title}</h2>
                <div className="flex items-center text-sm truncate">
                    <CiLocationOn className="text-xl mr-1" />
                    {location}
                </div>
                <div className="card-actions justify-end mt-2">
                    <Link to={`/details/${id}`} className="bg-green-700 py-1 px-2 rounded 
                    text-xs font-medium
                     text-white shadow transition
                     duration-300 hover:bg-green-900">
                        View Property
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;

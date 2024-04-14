import { CiLocationOn } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
const Card = ({ card }) => {
    const { id, estate_title, segment_name, description, price, status,
        area, location, facilities, image_url } = card;
    return (
        <div className="card bg-blue-50 card-compact bg-base-100 shadow-xl shadow-blue-200 hover:scale-105">
            <figure className=""><img className="h-[200px] w-[200px] sm:w-[300px] rounded-xl" src={image_url} /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>

               

                <div className="flex justify-between">
                    <div className="bg-green-600 p-1 rounded-xl">
                        <p>Id: {id}</p>
                    </div>

                    <div className="bg-green-600 p-1 rounded-xl">
                        <p className="text-white">#{segment_name}</p>
                    </div>
                </div>
                <div className='border border-dashed border-[#13131326] w-full'></div>
                <div className="flex justify-between">


                    <div className="flex items-center gap-2 bg-orange-500 p-1 text-white rounded-xl">
                        <p>Area: {area}</p>
                    </div>

                    <div className="flex items-center gap-2 bg-orange-500 p-1 text-white rounded-xl">
                        <IoPricetagsOutline />
                        <p >{price}</p>
                    </div>
                </div>
                <div className='border border-dashed border-[#13131326] w-full'></div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 bg-teal-300 p-1 rounded-xl">
                        <CiLocationOn />
                        <p>{location}</p>

                    </div>
                    <div className="bg-teal-300 p-1 rounded-xl">
                        <p>Status: {status}</p>
                    </div>
                </div>
                <div className='border border-dashed border-[#13131326] w-full'></div>



                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">View Property</button>
                    <button className="btn bg-green-600">Add to Watchlist</button>

                </div>
            </div>
        </div>
    );
};

export default Card;
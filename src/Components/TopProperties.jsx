import { Link, useLoaderData } from "react-router-dom";
import Card from "../Card";
const TopProperties = () => {

    const residential = useLoaderData();

    return (

        <div className="mx-[1%] md:mx-[3%]">
            <div className="text-center mt-8">
                <h1 className="text-4xl text-blue-600 font-bold">Featured Properties</h1>
                <p className="text-medium mt-2 font-bold">Find your dream home where every corner echoes the melody of your aspirations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">

                {
                    residential.slice(0, 6).map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            <div className="my-12 flex justify-center items-center">
                <Link to="/properties">
                    <button className="bg-green-700 py-4 px-4 rounded 
                    text-xs font-medium
                     text-white shadow transition
                     duration-100 hover:bg-green-900"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >See All Properties</button>
                </Link>
            </div>
        </div>
    );
};

export default TopProperties;
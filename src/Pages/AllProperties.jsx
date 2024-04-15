import { useLoaderData } from "react-router-dom";
import Card from "../Card";


const AllProperties = () => {

    const residential = useLoaderData();

    return (
        <div className="">
            
            <div className="mx-[1%] md:mx-[3%]">
            <div className="text-center mt-8">
                <h1 className="text-4xl text-blue-600 font-bold">Explore All Properties</h1>
                <p className="text-medium mt-2 font-bold">Find your dream home where every corner echoes the melody of your aspirations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">

                {
                    residential.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            </div>

    
            
        </div>
    );
};

export default AllProperties;
import { useLoaderData } from "react-router-dom";
import Card from "../Card";

const TopProperties = () => {

    const residential = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {
                residential.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default TopProperties;
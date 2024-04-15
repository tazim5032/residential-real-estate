import { useLoaderData } from "react-router-dom";
import AgentCard from "../Components/AgentCard";

const WatchList = () => {
    const agents = useLoaderData();
    return (
        <div>
            <div className="mx-[1%] md:mx-[3%]">
            <div className="text-center mt-8">
                <h1 className="text-4xl text-blue-600 font-bold">Meet Our Agents</h1>
                <p className="text-medium mt-2 font-bold">Our Experienced agents are ready to make your life comfortable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                {
                    agents.map(card => <AgentCard key={card.id} card={card}></AgentCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default WatchList;
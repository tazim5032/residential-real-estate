import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`/data.json`);
                const data = await response.json();
                const product = data.find(item => item.id === parseInt(id));
                setProduct(product);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProductDetails();
    }, [id]);

    console.log(product)

    if (!product) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    return (
        <div className="flex flex-wrap items-center mx-[1%] md:mx-[3%] rounded-xl mt-6">
            {/* Left Column: Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src={product.image_url} alt={product.estate_title} className="w-full h-auto rounded-lg shadow-md" />
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-2/5 md:ml-6 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{product.estate_title}</h2>
                <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Description:</span> {product.description}</p>
                <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Price:</span> {product.price}</p>
                <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Area:</span> {product.area}</p>
                <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Location:</span> {product.location}</p>
                <p className="text-lg mb-4"><span className="text-blue-600 font-bold">Status:</span> <span className="font-bold text-green-500">{product.status}</span></p>
                <div className="mb-4">
                    <p className="text-lg text-blue-600 font-bold mb-2">Facilities:</p>
                    <ul className="list-disc pl-6">
                        {product.facilities.map((facility, index) => (
                            <li key={index} className="text-lg">{facility}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Details;

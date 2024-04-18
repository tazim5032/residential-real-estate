const FAQ = () => {
    return (
        <section className="bg-gray-100 py-16 mx-[1%] md:mx-[3%] rounded-xl mt-8"
            data-aos="zoom-in"
            data-aos-duration="1500">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            What amenities are available in the residential estates?
                        </div>
                        <div className="collapse-content">
                            <p>Our residential estates offer a wide range of amenities including swimming pools, fitness centers, parks, and community centers.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Are pets allowed in the residential estates?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, many of our residential estates are pet-friendly. However, there may be certain restrictions and guidelines in place.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Is there security provided in the residential estates?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely, your safety is our priority. We have 24/7 security surveillance and gated access to ensure a secure living environment.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Can I customize my home in the residential estates?
                        </div>
                        <div className="collapse-content">
                            <p>Depending on the estate policies, there may be options for customization. Contact our team to discuss available customization options for your new home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

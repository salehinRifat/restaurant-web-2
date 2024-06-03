
const Cover = ({ img, title, description }) => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content max-w-xl text-center text-neutral-content">
                <div className="w-full">
                    <div className="p-5 w-full bg-black bg-opacity-40 text-white">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
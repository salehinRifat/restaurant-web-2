const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="text-center w-80 mx-auto my-2">
            <p className=" text-orange-500 mb-2">{subHeading}</p>
            <h3 className="text-2xl border-y-2 border-slate-400 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
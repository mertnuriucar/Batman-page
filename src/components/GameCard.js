import PropTypes from "prop-types";

export default function GameCard({ game }) {
    const { internalName, savings, normalPrice, salePrice, thumb } = game;

    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex flex-col w-[350px] h-[400px] rounded-xl bg-gray-200 shadow-lg shadow-blue-300/50 ">
                <img
                    className="h-60 w-full rounded-t-lg object-cover"
                    src={thumb}
                    alt={internalName}
                />
                <h1 className="mt-2 font-bold text-xs text-red-700 text-center ">
                    {internalName}
                </h1>
                <p className="text-right pr-8 mt-2 italic text-2xl text-green-700">
                    %{Math.round(Number(savings))}
                </p>
                <div className="flex flex-row justify-center items-center mt-4">
                    <h1 className="text-3xl p-2 font-bold ">${salePrice}</h1>
                    <p className="text-xl line-through mr-8 text-orange-500 ">
                        {normalPrice}
                    </p>
                    <button className="bg-sky-700 text-white w-[70px] h-[30px] rounded-md text-sm hover:bg-green-700">
                        ORDER
                    </button>
                </div>
            </div>
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.object,
};

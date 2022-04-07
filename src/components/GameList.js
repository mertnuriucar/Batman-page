import { useBatmanList } from "../hooks/useProductList";
import ProductListSkeleton from "./ProductCardSkeleton";
import GameCard from "./GameCard";

export default function GameList() {
    const { games, isLoading, isError } = useBatmanList();

    /* Hatayı ayrı bir bileşen olarak çıkart */
    if (isError) return <div>Server 500</div>;
    if (isLoading) return <ProductListSkeleton />;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-3 justify-items-center mt-4">
            {games.map((game) => (
                <GameCard game={game} key={game.dealId} />
            ))}
        </div>
    );
}

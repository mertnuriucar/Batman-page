import useSWR from "swr";

/**
 * TODO: MERT NURİ
 * Bu kısım confige taşınmalı.
 */

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useBatmanList() {
    const { data, error } = useSWR(
        `https://www.cheapshark.com/api/1.0/deals?title=batman&exact=0&sortBy=Savings`,
        fetcher
    );

    return {
        games: data,
        isLoading: !error && !data,
        isError: error,
    };
}

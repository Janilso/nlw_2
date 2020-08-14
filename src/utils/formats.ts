const formatToBRL = (
  value: string | number | undefined,
  symbol: boolean = true
) => {
  return Number(value)?.toLocaleString(
    "pt-br",
    symbol
      ? {
          style: "currency",
          currency: "BRL",
        }
      : { minimumFractionDigits: 2 }
  );
};

export { formatToBRL };

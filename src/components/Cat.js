import useGetCat from "./useGetCat";

const Cat = () => {
  const { data, isCatLoading, refetchData } = useGetCat();
  if (isCatLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <button onClick={refetchData}>refetch</button>
      <h1>{data?.fact}</h1>
    </div>
  );
};

export default Cat;

import { useSearchParams } from "react-router-dom";
import Nav from "../components/nav/Nav";
import AlbumItem from "../components/category/AlbumItem";
import useQuery from "../hooks/useQuery";

const SearchScreen = () => {
  const [params, setParams] = useSearchParams();
  const vinyls = useQuery(
    `http://localhost:5050/products/search?q=${params.get("q")}&limit=30`
  );
  return (
    <div className="h-full">
      <Nav />
      <div className="w-11/12 h-fit m-auto px-24 py-16 bg-brand-darkgrey">
        <div>
          <h1 className="text-white text-xl font-medium text-center mb-7 tracking-[15px]">
            {params.get("q").toUpperCase()}
          </h1>
          <div className="flex flex-wrap justify-evenly gap-10 md:gap-20 customScrollbar">
            {vinyls &&
              vinyls.data.map((vinyl, index) => (
                <AlbumItem
                  key={index}
                  id={vinyl._id}
                  name={vinyl.title}
                  genre={vinyl.genre}
                  artists={vinyl.artist}
                  price={vinyl.price}
                  imageUrl={vinyl.cover_image}
                  secret={vinyls.secret}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;

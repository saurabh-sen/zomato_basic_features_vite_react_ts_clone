import { useState, useEffect, useMemo } from "react";
import Cards from "./Cards";
import { data, uniqueDropDown, handleSort } from "./data"

function App() {
  const [restaurants, setRestaurants] = useState<any>([]);

  const [searchValue, setSearchValue] = useState<String>('');
  
  const [dropDownItem, setDropDownItem] = useState<any>();
  
  const [favoriteRestaurant, setFavoriteRestaurant] = useState<any>();

  const [showFavoriteRestaurant, setShowFavoriteRestaurant] = useState<Boolean>(false);

  useEffect(() => {
    
    setRestaurants(data);
    setFavoriteRestaurant(data);
    setDropDownItem(uniqueDropDown);
    
  }, []);

  const filteredData = useMemo(() => {
    return restaurants.filter((item : any) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [restaurants, searchValue])

  return (
    <div className="App">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex flex-row flex-wrap items-stretch w-full mb-4">
            <label htmlFor="search" className="text-center m-4">
              Search
            </label>
            <input
              id="search"
              type="search"
              className="m-4 p-2 border rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={(e) => setSearchValue(e.target.value)}
            />

          </div>
          
          <div className="input-group relative flex flex-row flex-wrap items-stretch w-full mb-4">
            <label htmlFor="sort" className="text-center m-4">
              Sort by location
            </label>
            <select onChange={(e) => handleSort(e.target.value)} className="border " name="sort" id="sort">
              {
                dropDownItem && dropDownItem.map((item: string, index: number) => {
                  return <option value={item} key={index}>{item}</option>;
                })
              }
            </select>
          </div>

          <div className="input-group relative flex flex-row flex-wrap items-stretch w-full mb-4">
            <label htmlFor="sort" className="text-center m-4">
              Show favorite restaurants
            </label>
            <button
              className="btn my-4 py-4 px-8 rounded-xl bg-blue-400"
              type="button"
              id="button-addon2"
              onClick={() => setShowFavoriteRestaurant(!showFavoriteRestaurant)}
            >show favorite restaurants
            </button>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center w-4/5 m-auto">
      {

        showFavoriteRestaurant ? favoriteRestaurant.map((restaurant:any, index:number) => {
          if(restaurant.fav == true){
          return (
            <Cards key={index} favoriteRestaurant={favoriteRestaurant} restaurant={restaurant} />
          )
          }
        }) : filteredData.map((restaurant:object, index:number) => {
                  return (
                    <Cards key={index} favoriteRestaurant={favoriteRestaurant} restaurant={restaurant} />
                  )
                })

      }
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Cards from "./Cards";
import { data, uniqueDropDown, handleSort } from "./data"

function App() {
  const [restaurants, setRestaurants] = useState<any>([]);
  const [searchData, setSearchData] = useState<any>();
  const [dropDownItem, setDropDownItem] = useState<any>();
  const [favoriteRestaurant, setFavoriteRestaurant] = useState<any>();
  const [showFavoriteRestaurant, setShowFavoriteRestaurant] = useState<Boolean>(false);

  useEffect(() => {
    
    setRestaurants(data);
    setFavoriteRestaurant(data);
    setDropDownItem(uniqueDropDown);
    
  }, []);

  const handleSearch = (value : any) => {

    const searchResult = restaurants.filter((item : any, index:number) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchData(searchResult)

  };

  const handleFavorite = () => {
    setShowFavoriteRestaurant(!showFavoriteRestaurant);
  };
  
  const handleComponentRender = () => {
    if(showFavoriteRestaurant){

      return favoriteRestaurant.map((restaurant:object, index:number) => {
        if(restaurant.fav){
        return (
          <Cards key={index} favoriteRestaurant={favoriteRestaurant} restaurant={restaurant} />
        )
        }
      })

    }else if(searchData){

      return searchData.map((restaurant:object, index:number) => {
          return (
            <Cards key={index} favoriteRestaurant={favoriteRestaurant} restaurant={restaurant} />
          )
        })

    }
    else{

      return restaurants.map((restaurant: object, index: number) => {
        return (
          <Cards key={index} favoriteRestaurant={favoriteRestaurant} restaurant={restaurant} />
        )
      })

    }
  }

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
              onChange={(e) => handleSearch(e.target.value)}
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
              Sort
            </label>
            <button
              className="btn my-4 py-4 px-8 rounded-xl bg-blue-400"
              type="button"
              id="button-addon2"
              onClick={handleFavorite}
            >show favorite restaurants
            </button>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center w-4/5 m-auto">
      {
        handleComponentRender()
      }
      </div>
    </div>
  );
}

export default App;

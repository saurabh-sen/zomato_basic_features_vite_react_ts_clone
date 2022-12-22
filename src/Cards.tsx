const Cards = ({restaurant, favoriteRestaurant} : any) => {

  const handleFavoriteRestaurant = (id: number) => {
    favoriteRestaurant.map((item:any, index:number) => {
      if(item.id === id){
        item.fav = !item.fav;
      }
    })
  };

  return (
    <div className="Cards m-4">
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-gray-200 max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            restaurant id:- { restaurant && restaurant.id}
          </h5>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            restaurant name:- { restaurant && restaurant.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            reviews:- {restaurant.reviews}
          </p>
          {restaurant && restaurant.menu.map((item: string, index:number) =>{
             return(
             <p key={index} className="text-gray-700 text-base mb-4" >Menu item {index+1} {item}</p>
             )
             })}
          <p className="text-gray-700 text-base mb-4">
            location:- {restaurant && restaurant.location}
          </p>
          {/* create checkbox in react */}
          <label htmlFor="favorite">Favorite:- </label>
          <input type="checkbox"  name="favorite" id="favorite" onChange={() => handleFavoriteRestaurant(restaurant.id)} />
        </div>
      </div>
    </div>
  );
};

export default Cards;

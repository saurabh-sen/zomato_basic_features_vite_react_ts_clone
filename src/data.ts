export const data = [
    {
      "id": 1,
      "name": "a_restaurant",
      "reviews": 4,
      "menu": [
        "chicken",
        "egg",
        "mutton"
      ],
      "location": "mumbai",
      "fav": false
    },
    {
      "id": 2,
      "name": "a_restaurant",
      "reviews": 5,
      "menu": [
        "dal",
        "egg",
        "biryani"
      ],
      "location": "jabalpur",
      "fav": false
    },
    {
      "id": 3,
      "name": "c_restaurant",
      "reviews": 4,
      "menu": [
        "chicken",
        "paneer",
        "mutton"
      ],
      "location": "pune",
      "fav": false
    },
    {
      "id": 4,
      "name": "d_restaurant",
      "reviews": 4,
      "menu": [
        "chicken",
        "egg",
        "mutton"
      ],
      "location": "jabalpur",
      "fav": false
    },
    {
      "id": 5,
      "name": "e_restaurant",
      "reviews": 3,
      "menu": [
        "rice",
        "noodle",
        "mutton"
      ],
      "location": "damoh",
      "fav": false
    }
  ];

  export const dropDown = data.map((item: any, index:number, self:any) => {
    return item.location;
  })

  export const uniqueDropDown = dropDown.filter((item : any, index:number) => {
    return dropDown.indexOf(item) === index;
  });

  export const handleSort = (value : any) => {
    data.sort((a:any, b:any) => {
      if(a.location.toLowerCase().includes(value.toLowerCase())|| b.location.toLowerCase().includes(value.toLowerCase())) return -1;
      return 1;
    })
    console.log(data);
  }
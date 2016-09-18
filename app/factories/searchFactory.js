'use strict';

app.factory("SearchFactory", ($q, $http, FirebaseURL) => {
 var items = {};
 var carId = [];

  let getSearchResult = (data) => {
// newSearch.style = "";
    // let $scope.data.make = make;
    return $q((resolve, reject)=>{
      $http.get(`https://api.edmunds.com/api/vehicle/v2/grade/${data.make}/${data.model}/${data.year}?submodel=${data.style}&fmt=json&api_key=uz4dyu9c64rjgfjrbq47kbff`)
      // $http.get(`https://api.edmunds.com/api/vehicle/v2/grade/honda/accord/2013?submodel=sedan&fmt=json&api_key=uz4dyu9c64rjgfjrbq47kbff`)
      .success((itemObject)=>{
        resolve(itemObject);
        // console.log("itemObject", itemObject);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };



  let postSearchToFb = (newItem) => {
      return $q( (resolve, reject) => {
        $http.post(`${FirebaseURL}/Favorite.json`, JSON.stringify(newItem))
          .success( (ObjFromFirebase) => {
            resolve(ObjFromFirebase);
          })
          .error( (error) => {
            reject(error);
          });
      });
    };

  let getFavoriteFromFb = () => {
    let fav = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}Favorite.json`)
        .success((data)=>{
        Object.keys(data).forEach((key) => {
        data[key].carId = key;
        fav.push(data[key]);
        carId = data[key].carId;
        // console.log(carId, "carId");
      });
        resolve(fav);
        // console.log(fav, "fav");
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let deleteFavFromFirebase = (carId) => {
    console.log("carId", carId);
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}Favorite/${carId}.json`)
      .success((objFromFirebase) => {
        console.log("DELETED");
        resolve(objFromFirebase);
      })
        .error((error) => {
          reject(error);
        });
    });
  };

  let setCarId = (id) => {
    carId = id;
    console.log(carId);
  };

  let getCarId = () => {
    return carId;
  };

  let addItems = function(carObj) {
    items = carObj;
  };

  let getItems = function() {
      console.log("ITEM FACTORY", items);
    return items;

  };






return {getSearchResult, postSearchToFb, addItems, getItems, getFavoriteFromFb, deleteFavFromFirebase, setCarId, getCarId};
});


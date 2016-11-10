'use strict';

app.factory("SearchFactory", ($q, $http, FirebaseURL) => {
   var items = {};
   var pics = {};
   var carId = [];

///To get rating data search////
///To get rating data search////
///To get rating data search////

  let getSearchResult = (data) => {
    return $q((resolve, reject)=>{
      $http.get(`https://api.edmunds.com/api/vehicle/v2/grade/${data.make}/${data.model}/${data.year}?submodel=${data.style}&fmt=json&api_key=uz4dyu9c64rjgfjrbq47kbff`)
      .success((itemObject)=>{
        resolve(itemObject);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };



///GET PICTURES FROM API/////
///GET PICTURES FROM API/////
///GET PICTURES FROM API/////

  let getPicture = (data1) => {
    return $q((resolve, reject)=>{
      $http.get(`https://api.edmunds.com/api/media/v2/${data1.make}/${data1.model}/${data1.year}/photos?category=exterior&width=600&shottype=FQ&pagenum=1&pagesize=10&view=basic&fmt=json&api_key=cesw7u9cfkph84sp73wt2yem`)
      // $http.get(`https://api.edmunds.com/api/media/v2/${data1.make}/${data1.model}/${data1.year}/photos?category=exterior&width=600&shottype=FQ&pagenum=1&pagesize=10&view=basic&fmt=json&api_key=n7u7q8yqj78kyk4qy66zb3nj`)
      .success((imageObject)=>{
        resolve(imageObject);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };


///To get the nearest dealership address data search////
///To get the nearest dealership address data search////
///To get the nearest dealership address data search////

  let getDealership = (data2) => {
        console.log("data2", data2);
    return $q((resolve, reject)=>{
      $http.get(`http://api.edmunds.com/api/dealer/v2/dealers/?zipcode=37210&radius=50&make=${data2.make}&state=new&pageNum=1&pageSize=4&sortby=distance%3AASC&view=basic&api_key=uz4dyu9c64rjgfjrbq47kbff`)
      .success((addressObject)=>{
        resolve(addressObject);
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
      });
        resolve(fav);
      })
      .error((error) => {
        reject(error);
      });
    });
  };



  let getSingleCarFromFb = (carId) => {
    console.log("carId", carId);
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}Favorite/${carId}.json`)
      .success((objFromFirebase) => {
        resolve(objFromFirebase);
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

  let updateCar = (carId, editedCar) => {
    console.log("carId", carId);
    console.log("editedCar", editedCar);
    return $q( (resolve, reject) => {
      $http.patch(`${FirebaseURL}Favorite/${carId}.json`, JSON.stringify(editedCar))
        .success( (objFromFirebase) => {
          resolve(objFromFirebase);
        })
        .error( (error) => {
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
    return items;
  };







  return {getSearchResult, postSearchToFb, addItems, getItems, getFavoriteFromFb, deleteFavFromFirebase, setCarId, getCarId, updateCar, getSingleCarFromFb, getPicture, getDealership};
});


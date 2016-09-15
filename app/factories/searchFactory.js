'use strict';

app.factory("SearchFactory", ($q, $http, FirebaseURL) => {

  let getSearchResult = (data) => {
    // let $scope.data.make = make;
    return $q((resolve, reject)=>{
    // console.log("data", data);
      $http.get(`https://api.edmunds.com/api/vehicle/v2/grade/honda/accord/2013?submodel=sedan&fmt=json&api_key=uz4dyu9c64rjgfjrbq47kbff`)
      // $http.get(`https://api.edmunds.com/api/vehicle/v2/grade/${data.make}/${data.model}/${data.year}?submodel=${data.style}&fmt=json&api_key=uz4dyu9c64rjgfjrbq47kbff`)
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
      $http.post(`${FirebaseURL}/search.json`, JSON.stringify(newItem))
        .success( (ObjFromFirebase) => {
          resolve(ObjFromFirebase);
        })
        .error( (error) => {
          reject(error);
        });
    });
  };









return {getSearchResult, postSearchToFb};
});


import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList : HousingLocation [] =[
    {
      "id" : 0 ,
      "name":"Acme Fresh Start Housing",
      "city" :"chicago",
      "state":"IL",
      "availableUnits": 4,
      "wifi": true ,
      "laundry": true,
      "photo": "/assets/house01.jpg",
    },
    {
      "id" : 1 ,
      "name":"Acme Fresh Start Housing",
      "city" :"chicago",
      "state":"IL",
      "availableUnits": 4,
      "wifi": true ,
      "laundry": true,
      "photo":"/assets/house02.jpg",

    },
    {
      "id" : 2 ,
      "name":"Acme Fresh Start Housing",
      "city" :"chicago",
      "state":"IL",
      "availableUnits": 4,
      "wifi": true ,
      "laundry": true,
      "photo":"/assets/house03.jpg",

    },
    {
      "id" : 3 ,
      "name":"Acme Fresh Start Housing",
      "city" :"chicago",
      "state":"IL",
      "availableUnits": 4,
      "wifi": true ,
      "laundry": true,
      "photo":"/assets/house04.jpg",

    }
  ];

  constructor() { }

  getAllHousingLocations () : HousingLocation[]{
    return this.housingLocationList;
  }

  getHousingLocationById (id:Number) :HousingLocation | undefined {
    return this.housingLocationList.find
    (housingLocation => housingLocation.id === id);
  }
}

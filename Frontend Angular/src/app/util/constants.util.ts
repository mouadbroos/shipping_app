import { HttpHeaders } from '@angular/common/http';

export class Constants{

  //public static baseUrl = "http://shipping-co.azurewebsites.net" ; 
  public static baseUrl = "http://localhost:5000" ;
  
  public static loginUrl = Constants.baseUrl + "/auth/credentials.json"



}
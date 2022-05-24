import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  general()
  {
    return  this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9e838a34f2da49ca8019ce9506871381")
  }
greeting()
{
  return this.http.get("https://gorest.co.in/public/v2/posts");
}
 

}

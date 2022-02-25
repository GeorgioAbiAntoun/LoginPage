import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {loginParameters, loginResponse} from '../models/login-credentials.model';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginParameters$ = new BehaviorSubject<loginParameters>({email:"example@example.com", password:"qwerty"});
  loginResponse$ = new BehaviorSubject<loginResponse>({email:"example@example.com", first_name:"John", last_name:"John"});

  //Fixed Data to mock APIs

  private loginParameters: loginParameters = {email:"example@example.com", password:"qwerty"};
  private loginResponse: loginResponse = {email:"example@example.com", first_name:"John", last_name:"John"};

  constructor(private http:HttpClient) {


    this.loginResponse$.next(this.loginResponse);


  }


  //This function enables a user to login
  //It takes as inputs some parameters and returns a response that contains the user's first name, last name and email.
  login(loginParameters: loginParameters): loginResponse{

    this.loginResponse = {email:"example@example.com", first_name:"John", last_name:"John"};
    return this.loginResponse;


  }



}

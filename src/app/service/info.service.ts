import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../models/Todos";

@Injectable()
export class InfoService {
  private _url: string = "../../../db.json";

  constructor(private http: HttpClient) {}

  getEmplyees(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._url);
  }
}

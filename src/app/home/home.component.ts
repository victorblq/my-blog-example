import { Component, OnInit } from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private scullyRoutesService: ScullyRoutesService) {}

  posts$: Observable<ScullyRoute[]> = this.scullyRoutesService.available$.pipe(
    map(posts => {
      console.log(posts);
      return posts.filter(post => post.sourceFile?.endsWith(".md"));
    }));

}

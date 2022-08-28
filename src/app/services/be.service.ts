import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BeService {

  constructor(private http: HttpClient) { }


  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(environment.backendApi + 'posts')
  }

  putPost(post: PostModel): Observable<any> {
    return this.http.put(environment.backendApi + 'post', post);
  }
}

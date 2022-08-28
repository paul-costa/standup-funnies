import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BeService {

  constructor() { }


  getAllPosts(): Observable<PostModel[]> {
    return of([
      {
        id: 'id1',
        header: 'helwor1',
        content: 'Lorem Ipsum Funny haha ',
        author: {id: 'id1', firstname: 'Hello', surname: 'world'}
      },
      {
        id: 'id2',
        header: 'helwor2',
        content: 'Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha ',
        author: {id: 'id2', firstname: 'Hello', surname: 'world'}
      },
      {
        id: 'id3',
        header: 'helwor3',
        content: 'Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha ',
        author: {id: 'id3', firstname: 'Hello', surname: 'world'}
      },
    ])
  }
}

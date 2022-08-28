import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PostModel } from '../models/post.model';
import { BeService } from '../services/be.service';

@Component({
  selector: 'app-haha',
  templateUrl: './haha.component.html',
  styleUrls: ['./haha.component.scss']
})
export class HahaComponent implements OnInit {
  private onDestroy = new Subject<void>();

  posts: PostModel[] = []

  constructor(private beService: BeService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  getAllPosts(): void {
    this.beService.getAllPosts().pipe(takeUntil(this.onDestroy)).subscribe(posts => {
      this.posts = posts
    })
  }

  onAdd(): void {
    if(!this.posts[0]) {
      this.posts[0] = {id: '0', header: '', content: '', author: {}}
    }
    const post: PostModel = {
      id: `${+this.posts[0]?.id + 1}` ,
      header: `New Joke: ${+this.posts[0]?.id + 1}`,
      content: 'Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha Lorem Ipsum Funny haha ',
      author: {id: `${+this.posts[0]?.id + 1}`, firstname: 'Hello', surname: 'world'}
    };

    this.beService.putPost(post).pipe(takeUntil(this.onDestroy)).subscribe(() => {
      this.getAllPosts();
    })
  }
}

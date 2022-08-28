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
    this.beService.getAllPosts().pipe(takeUntil(this.onDestroy)).subscribe(posts => {
      console.log(posts)
      this.posts = posts;
    })
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}

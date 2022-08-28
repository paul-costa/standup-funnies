export class PostModel {
  id!: string;
  header!: string;
  content!: string;
  imgUrl?: string;

  author!: {
    id: string;
    firstname: string;
    surname: string;
  }
}

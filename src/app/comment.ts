export class Comment {
  constructor(
    public PostId: number,
    public id: number,
    public name: string,
    public email: string,
    public body: string
  ) {}
}

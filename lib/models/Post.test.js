const Post = require('./Post');

describe('Post Model', () => {
  it('should have a user', () => {
    const post = new Post();
    const { errors } = post.validateSync();
    expect(errors.user.message).toEqual('Path `user` is required.');
  });

  it('should have a photoUrl', () => {
    const post = new Post();
    const { errors } = post.validateSync();
    expect(errors.photoUrl.message).toEqual('Path `photoUrl` is required.');
  });

  it('should have a caption', () => {
    const post = new Post();
    const { errors } = post.validateSync();
    expect(errors.caption.message).toEqual('Path `caption` is required.');
  });

  it('has user ID ', () => {
    const post = new Post({
      photoUrl:'Hi',
      caption: 'hi',
      tags: ['hi'],
    });
  
    const { errors } = post.validateSync();
    expect(errors['user'].message).toEqual('Path `user` is required.');
  });







});

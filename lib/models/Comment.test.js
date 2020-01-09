const Comment = require('./Comments');

describe('Post Model', () => {
  it('should have a user', () => {
    const comment = new Comment();
    const { errors } = comment.validateSync();
    expect(errors.comment.message).toEqual('Path `comment` is required.');
  });

 

  it('has commentBy ID ', () => {
    const comment = new Comment({
      comment: 'HIII'
    });
  
    const { errors } = comment.validateSync();
    expect(errors['commentBy'].message).toEqual('Path `commentBy` is required.');
  });


  it('has Post ID ', () => {
    const comment = new Comment({
      comment: 'HIII'
    });
  
    const { errors } = comment.validateSync();
    expect(errors['post'].message).toEqual('Path `post` is required.');
  });






});

const User = require('./User');

describe('User Model', () => {
  it('should have a UserName', () => {
    const user = new User();
    const { errors } = user.validateSync();
    expect(errors.username.message).toEqual('Path `username` is required.');
  });

  it('should have a passwordHash', () => {
    const user = new User();
    const { errors } = user.validateSync();
    expect(errors.passwordHash.message).toEqual('Path `passwordHash` is required.');
  });


  it('should have a profilePhotoUrl', () => {
    const user = new User();
    const { errors } = user.validateSync();
    expect(errors.profilePhotoUrl.message).toEqual('Path `profilePhotoUrl` is required.');
  });






});

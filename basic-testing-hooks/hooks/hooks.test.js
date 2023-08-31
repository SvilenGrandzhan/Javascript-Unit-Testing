import { it, expect, describe, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import { User } from './hooks';

//can add testEmail as global definition
// since it is a global def, it can be deleted from all tests
const testEmail = 'test@test.com';
// same for new instance of User class
let user = new User(testEmail);

describe('class User', () => {
  afterEach(() => {
    user = new User(testEmail);
  });
  // or can clean / initialize beforeEach()
  // beforeEach(()=>{
  //   user = new User(testEmail);
  // })
  it('should update the email', () => {
    const newTestEmail = 'test2@test.com';
    user.updateEmail(newTestEmail);
    expect(user.email).toBe(newTestEmail);
  });

  it('should have an email property', () => {
    expect(user).toHaveProperty('email');
  });

  it('should store the provided email value', () => {
    expect(user.email).toBe(testEmail);
  });

  it('should clear the email', () => {
    user.clearEmail();
    expect(user.email).toBe('');
  });

  it('should still have an email property after clearing the email', () => {
    user.clearEmail();
    expect(user).toHaveProperty('email');
  });
});

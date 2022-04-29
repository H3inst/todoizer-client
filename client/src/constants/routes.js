export default Object.freeze({
  root: '/',

  // Access
  get access() {
    return '/access';
  },
  get accessLogin() {
    return `${this.access}/login`;
  },
  get accessRegister() {
    return `${this.access}/register`;
  }
});
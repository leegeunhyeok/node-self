describe('node-self', () => {
  describe('when import node-self module', () => {
    beforeAll(() => {
      require('../index');
    });

    afterAll(() => {
      delete global.self;
    });

    it('should `self` identifier reference same as the global object', () => {
      expect(self === globalThis).toEqual(true);
    });
  });
});

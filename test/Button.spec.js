describe('Button', () => {
    it('should render text correctly', () => {
      const button = document.createElement('button');
      button.innerHTML = 'Click me';
      expect(button.innerHTML).toBe('Click me');
    });
  });
  
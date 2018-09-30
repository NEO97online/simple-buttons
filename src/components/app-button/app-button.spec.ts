import { ButtonComponent } from './app-button';

describe('my-component', () => {
  it('builds', () => {
    expect(new ButtonComponent()).toBeTruthy();
  });

  describe('formatting', () => {
    it('returns empty string for no names defined', () => {
      const component = new ButtonComponent();
      expect(component.format()).toEqual('');
    });

    it('formats just first names', () => {
      const component = new ButtonComponent();
      component.first = 'Joseph';
      expect(component.format()).toEqual('Joseph');
    });

    it('formats first and last names', () => {
      const component = new ButtonComponent();
      component.first = 'Joseph';
      component.last = 'Publique';
      expect(component.format()).toEqual('Joseph Publique');
    });

    it('formats first, middle and last names', () => {
      const component = new ButtonComponent();
      component.first = 'Joseph';
      component.middle = 'Quincy';
      component.last = 'Publique';
      expect(component.format()).toEqual('Joseph Quincy Publique');
    });
  });
});

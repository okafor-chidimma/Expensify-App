import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
describe('To test the Header component with enzyme package', () => {
  test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  })
})
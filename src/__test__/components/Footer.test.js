import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer>', () => {
  const wrapper = mount(<Footer />);

  test('should render component footer', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render', () => {
    expect(wrapper.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

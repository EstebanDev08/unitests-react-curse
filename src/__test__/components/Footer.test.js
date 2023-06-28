import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer>', () => {
  const wrapper = mount(<Footer />);

  test('should render component footer', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render', () => {
    expect(wrapper.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('comprobar le ui del componente', () => {
    const footer = create(<Footer></Footer>);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';

import { mount, shallow } from 'enzyme';

import ProviderMock from '../__mocks__/ProviderMock';

import Product from '../../components/Product';

import ProductMock from '../__mocks__/ProductMock';

describe('<product>', () => {
  test('should render product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );

    expect(product.length).toEqual(1);
  });

  test('should botton buy', () => {
    const handleAddToCart = jest.fn();

    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});

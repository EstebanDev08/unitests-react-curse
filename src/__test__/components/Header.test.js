import React from 'react';

import { mount, shallow } from 'enzyme';

import ProviderMock from '../__mocks__/ProviderMock';

import Header from '../../components/Header';

describe('<header/>', () => {
  test('should render header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.length).toEqual(1);
  });

  test('should render title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

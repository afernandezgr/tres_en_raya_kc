import React from 'react';
import { shallow } from 'enzyme';
import { PureResult as Result } from './Result';

it('Debería mostrar el componente Result con un mensaje indicando el próximo turno', () => {
  const wrapper = shallow(<Result turn="o" tie={false} />);
  expect(wrapper.find('p').node.props.children).toEqual("It's O's turn.");
});

it('Debería mostrar el componente Result indicando el jugador que ha ganado', () => {
  const wrapper = shallow(<Result win="x" tie={false} turn="x" />);
  expect(wrapper.find('p').node.props.children).toEqual('Yay! X win!');
});

it('Debería mostrar el componente Result indicando que han empatado', () => {
  const wrapper = shallow(<Result tie turn="x" />);
  expect(wrapper.find('p').node.props.children).toEqual('We have a tie!');
});

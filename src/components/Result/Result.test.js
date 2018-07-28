import React from 'react';
import { shallow } from 'enzyme';
import { PureResult as Result } from './Result';

it('Debería mostrar el componente Result con un mensaje indicando el próximo turno', () => {
  const wrapper = shallow(<Result turn="o" tie={false} />);
  expect(wrapper.find('p').node.props.children).toEqual("es el turno de 0.");
});

it('Debería mostrar el componente Result indicando el jugador que ha ganado', () => {
  const wrapper = shallow(<Result won="x" tie={false} turn="x" />);
  expect(wrapper.find('p').node.props.children).toEqual('ha ganado X');
});

it('Debería mostrar el componente Result indicando que han empatado', () => {
  const wrapper = shallow(<Result tie turn="x" />);
  expect(wrapper.find('p').node.props.children).toEqual('Empate');
});

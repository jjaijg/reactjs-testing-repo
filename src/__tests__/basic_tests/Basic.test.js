import Basic from '../../components/Basic';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
  adapter: new Adapter(),
});

it('Render Enzyme correctly', () => {
  const wrapper = shallow(<Basic />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

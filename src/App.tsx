/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Counter from '~/Screens/Counter';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;
interface Props {}

const App = ({}: Props) => {
  return(
  <Container>
    <Counter title="계수기" initValue={5}></Counter>
  </Container>)
}
export default App

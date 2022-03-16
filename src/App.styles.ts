import styled from "styled-components";

let primaryColor = '#2FA746';

export const Container = styled.div`
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
`

export const Header = styled.header`
  background-color: ${primaryColor};
  color: #fff;
  margin: 0;
  height: 200px;
  display: flex;
  justify-content: center;
  text-align: center;
`

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  padding-top: 50px;
`

export const Body = styled.div`
  margin: auto;
`
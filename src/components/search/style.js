import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"
import { rgba } from "polished"

export const Wrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: ${props =>
    props.focus ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"};
  border-radius: 100px;
  padding: 4px 10px 4px 12px;
  display: flex;
  transition: 0.3s ease;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  * {
    box-sizing: border-box;
  }
  input {
    font-size: 0.88rem;
    padding-right: 10px;
    line-height: 1.8;
    width: ${props => (props.focus ? "200px" : "130px")};
    transition: 0.3s ease;
    color: var(--text);
    letter-spacing: 0.03rem;
    &::placeholder {
      color: #fff;
      text-shadow: none;
    }
  }
  svg {
    color: #fff;
    font-size: 0.92rem;
    margin-right: 10px;
    transition: 0.3s ease;
  }
  &.notHome,
  &.fixed {
    background: var(--background);
    input {
      color: var(--text);
      text-shadow: none;
      &::placeholder {
        color: rgba(55, 55, 55, 0.3);
      }
    }
    border: 1px solid
      ${props =>
        props.focus ? rgba(colors.primary, 0.6) : "rgba(65, 65, 65, 0.15)"};
    svg {
      color: ${props =>
        props.focus ? rgba(colors.primary, 0.8) : "rgba(65, 65, 65, 0.3)"};
    }
  }
  @media screen and (max-width: 780px) {
    input {
      width: ${props => (props.focus ? "120px" : "70px")};
    }
  }
`

export const ResultWrapper = styled.div`
  .result-inner {
    position: absolute;
    background: var(--background);
    border-radius: 3px;
    box-shadow: 0 0px 2.6px rgba(0, 0, 0, 0.011),
      0 0px 6.3px rgba(0, 0, 0, 0.016), 0 0px 11.8px rgba(0, 0, 0, 0.02),
      0 0px 21px rgba(0, 0, 0, 0.024), 0 0px 39.3px rgba(0, 0, 0, 0.029),
      0 0px 94px rgba(0, 0, 0, 0.04);
    width: var(--width);
    width: 520px;
    top: 70px;
    right: calc((100vw - var(--width)) / 2);
    /* left: 0;
    margin: auto; */
    /* padding: 20px; */
    transition: 0.3s ease;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    color: var(--text);
    font-size: 0.9rem;
    z-index: 99999;
  }
  .res {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid var(--lightGray);
    border-top-left-radius: 3px;
    b {
      color: var(--primary);
      padding: 0 3px;
      text-shadow: 0 0 8px var(--primaryLight);
    }
  }
  ul {
    max-height: 210px;
    overflow-y: scroll;
    li {
      list-style: none;
      a {
        display: inline-block;
        color: var(--text);
        padding: 10px 20px;
        width: 100%;
        border-bottom: 1px dashed var(--lightGray);
        z-index: 9999999;
        &:hover {
          color: var(--text);
          background: var(--paleGray);
          opacity: 0.8 !important;
        }
      }
      &:last-child {
        a {
          border-bottom: none;
          padding-bottom: 15px;
        }
      }
    }
  }
  &.active {
    .result-inner {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .res,
    ul {
      display: block;
    }
  }
  @media screen and (max-width: 780px) {
    .result-inner {
      width: 95%;
      right: 2.5%;
    }
  }
`

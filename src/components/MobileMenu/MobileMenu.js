/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components/macro"
import { DialogOverlay, DialogContent } from "@reach/dialog"

import { QUERIES, WEIGHTS, COLORS } from "../../constants"

import UnstyledButton from "../UnstyledButton"
import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay isOpen={isOpen} onClick={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size="24"></Icon>
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </CloseButton>
        <Side />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 6% 40% / 0.8);

  @media ${QUERIES.laptopAndDown} {
    display: block;
  }
`

const Content = styled(DialogContent)`
  position: absolute;
  background: white;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  display: none;
  padding: 32px;

  @media ${QUERIES.laptopAndDown} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Side = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  line-height: ${21 / 16}rem;
  text-transform: uppercase;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
  line-height: 1rem;
`

export default MobileMenu

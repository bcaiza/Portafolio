import React, { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Elements";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";

import "./Header.css"

function Header() {
  const navRef = useRef();
  const { t, i18n } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="sticky-top" >
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <LogoContainer>
              Boris Caiza
            </LogoContainer>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <Menu open={showMobileMenu}>
              <div>
                <a href="/#aboutMe">
                  <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <a href="/#aboutMe" className="fuente_principal"> {t('header.aboutMe')} </a>
                    </MenuItemLink>
                  </MenuItem>
                </a>
              </div>
              <div>
                <a href="/#education">
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <a className="fuente_principal" href="/#education">{t('header.educationExperience')}</a>
                </MenuItemLink>
              </MenuItem>
              </a>
              </div>

              <div>
                <a href="/#skills">
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  
                    <a href="/#skills" className="fuente_principal">{t('header.skills')}</a>

                </MenuItemLink>
              </MenuItem>
              </a>
              </div>

              <div>
                <a href="/#projects">
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  
                    <a href="/#projects" className="fuente_principal">{t('header.projects')}</a>
                  
                </MenuItemLink>
              </MenuItem>
              </a>
              </div>
              <div>
                <a  href="/#contacto">
              <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                 
                    <a href="/#contacto" className="fuente_principal">{t('header.contact')}</a>
                  
                </MenuItemLink>
              </MenuItem>
              </a>
              </div>
              <MenuItem>
                <MenuItemLink as="div">
                  <select
                    className="fuente_principal"
                    value={i18n.language} 
                    onChange={(e) => changeLanguage(e.target.value)}
                    style={{
                      background: "transparent",
                      border: "1px solid white",
                      color: "black",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                </MenuItemLink>
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;
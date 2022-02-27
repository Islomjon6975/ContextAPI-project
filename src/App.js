import React, {useState, useContext} from 'react'
import {Img, ToggleMode, Icon, Container, MobileContainer, IconCon, ImgWrapper, TitleImg, Desc, Item, Title, Line} from './AppSyled.js'
import img from './logo.png'
import { ThemeContext } from './context.js';


function App() {
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const dark={
    icon: 'black',
    title: 'black',
    background: 'white',
  }

  const light = {
    icon: 'white',
    title: 'white',
    background: 'black',
  }

  const onChange = () => {
    setMode(!mode)
    setTheme(mode? dark : light)
  }

  return (
    <Container >
      <MobileContainer color={theme.background}>
          <IconCon>
            <Icon.Arrow  color={theme.icon} />
            <Icon.Switch color={theme.icon} />
          </IconCon>
          <ImgWrapper>
             <Img src={img} alt="logo" />
             <TitleImg color={theme.title}>WebBrain Academy</TitleImg>
             <Desc color={theme.title} >IT school</Desc>
          </ImgWrapper>
          {/* dard */}
          <Item>
              <Icon.Moon  color={theme.title} />
              <Title color={theme.title}>Dark Mode</Title>
              <ToggleMode 
                onChange={onChange}
                checked={mode}
                size={50}
              />
          </Item>
          {/* Grid */}
          <Item>
              <Icon.Grid />
              <Title color={theme.title}>Story</Title>
          </Item>
          {/* User */}
          <Item>
              <Icon.User />
              <Title color={theme.title}>Chat Heads</Title>
          </Item>
          {/* Groups */}
          <Item>
              <Icon.Group />
              <Title color={theme.title}>Groups</Title>
          </Item>
          <Line />
          {/* Media */}
          <Item>
              <Icon.Media />
              <Title color={theme.title}>Media and Photos</Title>
          </Item>
          {/* Settings */}
          <Item>
              <Icon.Settings />
              <Title color={theme.title}>Settings and Privicy</Title>
          </Item>
          {/* Comment */}
          <Item>
              <Icon.Comment />
              <Title color={theme.title}>Help Center</Title>
          </Item>
          {/* Notification */}
          <Item>
              <Icon.Notification />
              <Title color={theme.title}>Notification</Title>
          </Item>
      </MobileContainer>
    </Container>
  );
}

export default App;

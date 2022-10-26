import { useState } from "react";
import styled from "styled-components";
import Switch from "./components/Switch"
import SunIcon from "./components/icons/SunIcon"
import MoonIcon from "./components/icons/MoonIcon"
import img from "./components/images/image.png"
import {data} from "./components/data"

function App() {
  const [theme, setTheme] = useState("dark")
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light":"dark")
  }

  return (
    <StyledApp theme={isDarkTheme ? Darktheme:Lighttheme}>
        <Content>
          <Header>
            <Logo src="https://klc-pakize.github.io/clarusway-styled-components-project/images/logo.png"/>
            <SwitchBox>
              <SunIcon isDarkTheme={isDarkTheme}/>
              <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
              <MoonIcon isDarkTheme={isDarkTheme}/>
            </SwitchBox>
            <Button>Apply Courses</Button>
            <RedButton>Talk to Adsiver</RedButton>
          </Header>
          <Content1 style={{marginTop: "75px"}}>
            <div style={{width:"50%", height:"100% ", display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"center"}}>
              <Title textcolor={isDarkTheme ? "white":"black"}>The IT Career of Your Dreams Starts Here!</Title>
              <Paragraph textcolor={isDarkTheme ? "#b6b6b6":"#333"} style={{paddingTop:"20px"}}>Clarusway is a leading international software Bootcamp. Join a micro class online with other trainees and learn coding skills a highly-skilled instructor.</Paragraph>
              <RedButton style={{marginTop:"25px"}}>Start Your new carier</RedButton>
            </div>
            <div style={{width:"50%", height:"240px"}}>
              <img src={img} style={{width:"500px"}}/>
            </div>
          </Content1>
          {data.map((course) => (
            <CoursesDiv key={course.id}>
            <div style={{width: "55%",gap:"25px",height: "90%", display: "flex", flexDirection:"column", alignItems:"start",justifyContent:"center"}}>
              <Title textcolor={isDarkTheme ? "white":"black"}>{course.title}</Title>
              <Paragraph textcolor={isDarkTheme ? "#b6b6b6":"#333"}>{course.body}</Paragraph>
            </div>
            <div style={{width: "35%",height: "90%", display: "flex", alignItems:"center",justifyContent:"center"}}>
              <img src={course.image} style={{width:"90%"}}/>
            </div>
          </CoursesDiv>
          ))}
        </Content> 
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.body};
  transition: all linear 0.5s;
`;

const Content = styled.div`
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`

const CoursesDiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 375px;
  background-color: transparent;
  border-radius: 25px;
  box-shadow: rgba(0,0,0,0.15) 0px 10px 10px 10px;
`

const Content1 = styled.div`
  width: 60%;
  gap: 10px;
  height: 500px;
  justify-content: center;
  display: flex;
  flex-direction: row;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 100px;
  gap: 10px;
`

const Logo = styled.img`
  width: 250px;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  transition: all linear 0.25s;
  &:hover {
  opacity: 0.75;
  transform: scale(0.95);
  }
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  background: transparent;
  color: rgb(166, 36, 64);
  outline: none;
  border: 1px solid rgb(166, 36, 64);
`

const RedButton = styled.button`
  transition: all linear 0.25s;
  &:hover {
  opacity: 0.75;
  transform: scale(0.95);
  }
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  background: rgb(166, 36, 64);
  color: white;
  border: none;
`

const SwitchBox = styled.div`
  background-color: transparent;
  display: flex;
  width: 125px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${props => props.textcolor || "white"};
`;

const Paragraph = styled.p`
  color: ${props => props.textcolor || "white"};
`;

const Darktheme = {
  body: "#1c1c1c",
  Title: "#fff",
  Subtitle: "#b6b6b6",
  icon: "#b6b6b6",
};

const Lighttheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
  icon: "#1c1c1c",
};
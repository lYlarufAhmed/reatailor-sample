import styled, {css} from "styled-components";
import logo from './images/logo.png'
import rec1 from './images/rec1.png'
import rec2 from './images/rec2.png'
import rec3 from './images/rec3.png'
import {ReactComponent as Logout} from './images/logout.svg'
import {ReactComponent as Bed} from './images/bed.svg'
import {ReactComponent as Shower} from './images/shower.svg'
import {ReactComponent as Dollar} from './images/vuesax-bold-dollar-square.svg'
import {ReactComponent as House} from './images/house-fill.svg'
import {ReactComponent as Location} from './images/vuesax-bold-location.svg'
import {Link} from 'react-router-dom'

const FlexContainer = styled.div`
  display: flex;
`
const AppWrapper = styled(FlexContainer)`
  padding: 98px 25px 0;
  max-width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #F4F6FA;
  flex-direction: column;
  gap: 18px;
`

const TopNav = styled(FlexContainer)`
  height: 80px;
  width: 100%;
  background: #FFFFFF 0 0 no-repeat padding-box;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 2px solid #97DBCD;
`
const NavSlice = styled(FlexContainer)`
  align-items: center;
  flex: 1;
  background-color: ${(props) => props.color};
  ${
          props => props.leftPadding && css`
            padding-left: ${props.leftPadding};
          `
  }
  ${
          props => props.rightPadding && css`
            padding-right: ${props.rightPadding};
          `
  }
  ${
          props => props.justifyContent && css`
            justify-content: ${props.justifyContent};
          `
  }
  ${
          props => props.background && css`
            background: transparent url(${logo}) ${props.leftPadding} no-repeat padding-box;;
            opacity: 1;
          `
  }
`

const ListContainer = styled(FlexContainer)`
  height: 575px;
`
const NavLink = styled.span`
  ${props => props.selected && css`
    color: #97DBCD;
    font-weight: bold;
    text-decoration: none;
    
  `
  }
  :hover {
    cursor: pointer;
  }
`

const WidgetContainer = styled(FlexContainer)`

  height: 50%;
`

const LogOutContainer = styled(FlexContainer)`
  gap: 15px;
  color: #343434;
  font-size: smaller;
  align-items: center;
`
const Details = styled(FlexContainer)`
  flex-direction: column;
  flex-grow: 1;
  background-color: white;
  padding: 26px;
`

const Gallery = styled(FlexContainer)`
  flex-basis: 319px;
  flex-direction: column;
  padding: 22px 42px 22px 32px;
  // overflow-y: scroll;
  gap: 22px;
  background-color: #ECF8F5;
`

const GalleryImage = styled.div`
  background: transparent url(${props => props.img}) center/contain no-repeat padding-box;
  box-shadow: 3px 3px 20px #0000001A;
  border: 3px solid #FFFFFF;
  border-radius: 10px;
  opacity: 1;
  height: 152px;
  width: 241px;
`
const TitleContainer = styled(FlexContainer)`
  gap: 22px;
  align-items: center;
`
const Address = styled.span`
  text-align: left;
  font: normal normal bolder 42px/63px Poppins;
  letter-spacing: 0;
  color: #232323;

`
const Price = styled(FlexContainer)`
  text-align: left;
  font: normal normal 600 42px/63px Poppins;
  letter-spacing: 0;
  color: #1EBF99;
  opacity: 1;
`

const Bottom = styled(FlexContainer)`
  justify-content: space-between;
  // align-self: flex-end;
  margin-top: 62px;
  // align-items: center;
  // align-content: center;
`
const Feature = styled(FlexContainer)`
  gap: 20px;
  height: 62px;
  align-items: center;
`

const FeatureText = styled.span`
  text-align: left;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #232323;
  opacity: 0.8;
`
const PrimaryButton = styled.button`
  text-align: left;
  font: normal normal medium 20px/30px Poppins;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  background: #1EBF99 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
`


function App() {
    return (
        <AppWrapper>
            <TopNav>
                <NavSlice background color={'blue'} leftPadding={'110px'}/>
                <NavSlice justifyContent={'space-between'}>
                    <NavLink selected>Home</NavLink>
                    <Link to={'/input'}>
                        <NavLink>Property Input</NavLink>
                    </Link>
                    <NavLink>Link 2</NavLink>
                    <NavLink>Link 3</NavLink>
                </NavSlice>
                <NavSlice justifyContent={'flex-end'} rightPadding={'50px'}>
                    <LogOutContainer>
                        <span>Chris Gordon</span>
                        <Logout/>
                    </LogOutContainer>
                </NavSlice>
            </TopNav>
            <ListContainer>
                <Gallery>
                    <GalleryImage img={rec1}/>
                    <GalleryImage img={rec2}/>
                    <GalleryImage img={rec3}/>
                </Gallery>
                <Details>
                    <TitleContainer>
                        <Location/><Address>123 Main St. Anytown, FL</Address>
                    </TitleContainer>
                    <TitleContainer>
                        <Dollar/><Price>$ 25,0000</Price>
                    </TitleContainer>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod Stet clita kasd gubergren.</p>
                    <Bottom>
                        <Feature>
                            <Bed/><FeatureText>1,577 sqft</FeatureText>
                        </Feature>
                        <Feature>
                            <Shower/><FeatureText>1,577 sqft</FeatureText>
                        </Feature>
                        <Feature>
                            <House/><FeatureText>1,577 sqft</FeatureText>
                        </Feature>
                        <PrimaryButton>View on Realtor.com</PrimaryButton>
                    </Bottom>
                </Details>

            </ListContainer>
            <WidgetContainer/>
        </AppWrapper>
    );
}

export default App;

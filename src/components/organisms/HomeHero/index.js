import React, { PropTypes } from 'react'
import styled from 'styled-components'


import { colors, fonts } from 'components/globals'

import { Heading, Button, Image, SearchBar,InitiativeCard } from 'components'

import background from './background.jpg'

import { Grid, Row, Col, FormGroup, FormControl } from 'react-bootstrap'

const Wrapper = styled.div`
  display: table;
  width: 100%;
  padding: 0;
  background: url(${background}) no-repeat center center;
  background-color: #e5e5e5;
  background-size: cover;
`
const Overlay = styled.div`
  background: rgba(0,0,0,0.4);
`
const HeroText = styled.div`
  padding-top: 150px;
  padding-bottom: 50px;
  text-align: center;
`
const Herop = styled.div`
  color:white;
  font-size:27px;
  font-weight: 300;
  padding: 0px 170px;
`
const HeroCall = styled.div`
`

const StyledCol = styled(Col)`
  color:black;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-weight: bold;
`

const Div = styled.div`
`
const HomeHero = ({ ...props }) => {
  return (
        <Div>
        <Wrapper {...props}>
			<Overlay>
				<Grid>
					<Row>
						<HeroText>
							<Herop>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ligula felis, fringilla sit amet porta et, suscipit eget risus. Mauris vestibulum eros tempor, lobortis magna nec, fringilla massa.
                          </Herop>
							<Button to="#about" transparent light size={50}> 
                              Crie sua iniciativa
                            </Button>
						</HeroText>						
					</Row>
				</Grid>
				<HeroCall>
					<Heading level={2}>Colabore com iniciativas</Heading>
					<FormGroup>
						<FormControl type={"text"}  placeholder={"Use tags para pesquisar (ex.: música, rio de janeiro)"} />
		              <Button>Explorar</Button>
					</FormGroup>
				</HeroCall>
			</Overlay>
		</Wrapper>	
        <Grid>
          <Row>
            <StyledCol xs={12}>
                <Heading level={2}>Iniciativas em Destaque</Heading>
            </StyledCol>
          </Row>
        </Grid>
        </Div>
  )
}

export default HomeHero


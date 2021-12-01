import React from 'react'
import {Flex, Box, Link as StyledLink, Image} from 'rebass/styled-components'

import{Link} from 'react-router-dom'
import Container from './Container'

function NavBar(){

    return(
        <Flex bg ='black' color ='white' justifyContent ='center' >
            <Container>
            <Flex px ={2} width ='100%' height = '50px'  alignContent ="center">
                <Link component ={StyledLink} variant ='nav' to ='/' >
                    Book App
                </Link>
                <Box mx ='auto' />
                <Link component = {StyledLink} variant ='nav' to ='/create-book'> + Add new book </Link>
              
            </Flex>
            </Container>

        </Flex>
    )
}
export default NavBar
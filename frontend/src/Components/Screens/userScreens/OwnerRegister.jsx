import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles'
import styled from 'styled-components'


function OwnerRegister() {

    return (
        <div>

            <Box>
                <h4> become our partner</h4>
                <p>register car, and pay a refundable amount of 5000 rs to compleate your registration</p>
                <form>
                    <input type='text' placeholder='user Id' />
                    <input type='text' placeholder='rc-book number of your car' />
                    <button>upload detals of your card</button>
                    <button>proceed to payment</button>
                </form>
            </Box>

        </div>
    )
}

export default OwnerRegister
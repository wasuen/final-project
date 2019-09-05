import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const Navigation= () => (
    <ul>
        <li>
            <NavLink exact to={ROUTES.SEARCHBYCANDIDATE}>Search By Candidate</NavLink>
        </li>
    </ul>
)

export default Navigation
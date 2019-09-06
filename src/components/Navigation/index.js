import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const Navigation= () => (
    <ul>
        <li>
            <NavLink exact to={ROUTES.SEARCHCONTRIBUTIONS}>Contributions By Candidate</NavLink>
        </li>
        <li>
            <NavLink exact to={ROUTES.SEARCHDISBURSEMENTS}>Disbursements By Candidate</NavLink>
        </li>
    </ul>
)

export default Navigation
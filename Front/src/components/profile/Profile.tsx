import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { userAccess } from '../login/loginSlice'
import { getProfileAsync, profileSelector } from './profileSlicer'
import { DepModel } from '../../models/Deps';
import { depsSelector, getDepsAsync } from '../deps/depsSlicer';

const Profile = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(profileSelector)
    const token = useAppSelector(userAccess)
    const deps = useAppSelector(depsSelector)
    let decoded_token: any = jwt_decode(token)
    const userDep: DepModel = deps.filter(dep => +profile.department === dep.id)[0]

    useEffect(() => {
        dispatch(getProfileAsync(token))
        dispatch(getDepsAsync(token))
    }, [])

    
    return (
        <div>
            <div>
                Name: {decoded_token.username}
            </div>
            <div>
                Department:  {userDep && userDep.name}
            </div>
            <div>
                Job Title: {profile.jobTitle}
            </div>
            <div>
                ID: {profile.realID}
            </div>
        </div>
    )
}

export default Profile
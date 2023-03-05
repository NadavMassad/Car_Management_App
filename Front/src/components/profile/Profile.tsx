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

    useEffect(() => {
        dispatch(getProfileAsync(token))
    }, [])


    return (
        <div>
            <div>
                Name: {profile.user_name}
            </div>
            <div>
                Department:  {profile.dep_name}
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
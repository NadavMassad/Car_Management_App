import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userAccess } from '../login/loginSlice';
import { getProfileAsync, profileSelector } from '../profile/profileSlicer';
import { getLogsAsync, logsSelector } from './logsSlice';

const Logs = () => {
  const logs = useAppSelector(logsSelector);
  const dispatch = useAppDispatch();
  const token = useAppSelector(userAccess)
  const profile = useAppSelector(profileSelector)

  useEffect(() => {
    dispatch(getLogsAsync(token))
    dispatch(getProfileAsync(token))
  }, [logs.length])


  return (
    <div>
      {profile.roleLevel === 2 &&
        <div>
          <h1>Logs</h1>

          <table style={{ marginLeft: "auto", marginRight: "auto" }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '5px' }}>Time</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>User Name</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>Car</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log =>
                <tr key={log.id}>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{log.logDate}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{log.user_name}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{log.car_name}</td >
                  <td style={{ border: '1px solid black', padding: '5px' }}>{log.action}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div >
      }</div>
  )

}



export default Logs
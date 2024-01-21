import React from 'react';
import PropTypes from 'prop-types'

export default function Achievements(props) {
  return (
    <div className='container-fluid left'>
      <h1 className='text-center what our'>{props.achieve}</h1>
      <div className='row'>

        <div className='col-md-4 achive navbg'>
          <i className="bi bi-person-fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" fill="currentColor" className="bi bi-people-fill ppl" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
          </i>
          <p className='text-center text'>400</p>
          <p className='text-center text'>{props.team}</p>
        </div>

        <div className='col-md-4 achive navbg'>
          <i className="bi bi-person-fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" fill="currentColor" className="bi bi-person-fill ppl" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </i>
          <p className='text-center text'>500</p>
          <p className='text-center text'>{props.client}</p>
        </div>

        <div className='col-md-4 achive navbg'>
          <i className="bi bi-bezier">
            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" fill="currentColor" className="bi bi-bezier ppl" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
              <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
            </svg>
          </i>
          <p className='text-center text'>600</p>
          <p className='text-center text'>{props.project}</p>
        </div>

      </div>
    </div>
  )
}

Achievements.propTypes = {
  achieve: PropTypes.string,
  team: PropTypes.string,
  client: PropTypes.string,
  project:PropTypes.string,
}

Achievements.defaultProps = {
  achieve: 'OUR ACHIEVEMENTS',
  team: 'Teams',
  client: 'Clients',
  project:'Projects',
}
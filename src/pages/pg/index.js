import React, { useState, useEffect } from 'react';
import fetch from 'cross-fetch'


import Layout from '../../components/Layout'
import PGRoll from '../../components/PGRoll'

const TimeComponent = () => {
  const [time, setTime] = useState(null)
  const [count, setCount] = useState(0)

  function getTime(e) {
    e.preventDefault();

    fetch(
        'https://worldtimeapi.org/api/timezone/America/Argentina/Salta'
    ).then(response => response.json())
    .then(json => setTime(json.datetime))
    .catch(error => setTime(error))

    setCount(count + 1)
  }


  return <div>
    <p>You clicked {count} times</p>
    <div>{time}</div>
    <button onClick={getTime}>
      Click me
    </button>
  </div>
}

export default class PGPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Postgres Users  
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <TimeComponent />
              <PGRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

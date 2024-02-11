import React from 'react'
import "./counters.css"
const Counters = () => {
  return (
    <>
    <section className="counters">
    <div className="container">
      <div>
        <i className="far fa-clock fa-4x" />
        <div className="counter" data-target={13500}>
          135
        </div>
        <h3>Total Registered Student</h3>
      </div>
      <div>
        <i className="fas fa-gift fa-4x" />
        <div className="counter" data-target={720}>
          300
        </div>
        <h3>Visited Users</h3>
      </div>
      <div>
        <i className="fas fa-users fa-4x" />
        <div className="counter" data-target={480}>
          23
        </div>
        <h3>Total Teachers Registered</h3>
      </div>
      <div>
        <i className="fas fa-award fa-4x" />
        <div className="counter" data-target={120}>
          0
        </div>
        <h3>No of books</h3>
      </div>
    </div>
  </section>
    </>
  )
}

export default Counters
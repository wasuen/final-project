import React, { Component } from 'react'

class SearchByCommittee extends Component {

    state = {
        committee: [],
        search: ''
    }

    onChange = (e) => {
        this.setState( {[e.target.name] : e.target.value} )
      }

    getContributionsForOneCommittee = async (e) => {
        e.preventDefault()
        const committee = await (await fetch(`https://api.open.fec.gov/v1/committee/${this.state.search}/schedules/schedule_a/by_employer/?sort_hide_null=false&page=1&sort_nulls_last=false&cycle=2020&sort=-total&per_page=100&api_key=${process.env.REACT_APP_OPENFEC_KEY}&sort_null_only=false`)).json()
        this.setState({committee: committee.results})
      }

    
    render() {
            console.log(this.state)
            return (
              <div>
                <form onSubmit={this.getContributionsForOneCommittee}>
                  <input name='search' type='text' onChange={this.onChange}/>
                  <button type='submit'>submit</button>
                </form>
                {
                  this.state.committee.map((m,i) => 
                  <div key={i}>{m.employer} contributed {m.count} times, totaling in {m.total}</div>
                  )
                }
              </div>
        )
    }
}

export default SearchByCommittee
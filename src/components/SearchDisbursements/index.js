import React, { Component } from 'react'
import Donut from '../Donut'

class SearchDisbursements extends Component {

    state = {
        results: [],
        search: ''
    }

    onChange = (e) => {
        this.setState( {[e.target.name] : e.target.value} )
      }

    getCandidate = async (e) => {
        e.preventDefault()
        const candidate = await (await fetch(`https://api.open.fec.gov/v1/names/candidates/?q=${this.state.search}&api_key=${process.env.REACT_APP_OPENFEC_KEY}`)).json()
        let candidateId = candidate.results[0].id
        console.log(candidateId)
        const committee = await (await fetch (`https://api.open.fec.gov/v1/candidates/search/?sort_hide_null=false&page=1&sort_nulls_last=false&candidate_id=${candidateId}&per_page=20&sort=name&api_key=${process.env.REACT_APP_OPENFEC_KEY}&sort_null_only=false`)).json()
        let committeeId = committee.results[0].principal_committees[0].committee_id
        console.log(committeeId)
        const results = await (await fetch (`
        https://api.open.fec.gov/v1/committee/${committeeId}/schedules/schedule_b/by_purpose/?sort_hide_null=false&page=1&sort_nulls_last=false&sort=-total&per_page=10&api_key=${process.env.REACT_APP_OPENFEC_KEY}&sort_null_only=false`)).json()
        this.setState({results: results.results})
      }


    render() {
        console.log(this.state)
        return (
          <div>
            <form onSubmit={this.getCandidate}>
              <input name='search' type='text' onChange={this.onChange}/>
              <button type='submit'>submit</button>
            </form>
            {/* {
              this.state.results.map((m,i) => 
              <div key={i}>{m.employer} contributed {m.count} times, totaling in {m.total} for year {m.cycle}</div>
              )
            } */}
            <Donut results={this.state.results} />
          </div>
        )
    }

}

export default SearchDisbursements
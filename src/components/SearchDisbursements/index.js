import React, { Component } from 'react'
import Donut from '../Donut'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Comments from '../Comments'



class SearchDisbursements extends Component {

    state = {
        results: [],
        search: '',
        submitted: '',
        errorMessage:''
    }

    onChange = (e) => {
        this.setState( {[e.target.name] : e.target.value} )
      }

    getCandidate = async (e) => {
        e.preventDefault()
        try {
          const candidate = await (await fetch(`https://api.open.fec.gov/v1/names/candidates/?q=${this.state.search}&api_key=${process.env.REACT_APP_OPENFEC_KEY}`)).json()
          let candidateId = candidate.results[0].id
          console.log(candidateId)
          const committee = await (await fetch (`https://api.open.fec.gov/v1/candidates/search/?sort_hide_null=false&page=1&sort_nulls_last=false&candidate_id=${candidateId}&per_page=20&sort=name&api_key=${process.env.REACT_APP_OPENFEC_KEY}&sort_null_only=false`)).json()
          let committeeId = committee.results[0].principal_committees[0].committee_id
          console.log(committeeId)
          const results = await (await fetch (`
          https://api.open.fec.gov/v1/committee/${committeeId}/schedules/schedule_b/by_purpose/?sort_hide_null=false&page=1&sort_nulls_last=false&sort=-total&per_page=10&api_key=${process.env.REACT_APP_OPENFEC_KEY}&sort_null_only=false`)).json()
          this.setState({
            results: results.results,
            submitted: this.state.search
          })
        } catch(err) {
          console.log('error')
        }
      }


    render() {
        console.log(this.state)
        return (
          <div className='form-wrapper'>
            <div className='chart-wrapper'>
              <h3 className='search-form'>Search Disbursements by Candidate</h3>
              <form className='search-form' onSubmit={this.getCandidate}>
                <TextField 
                label="candidate"
                name='search' 
                type='text' 
                onChange={this.onChange}
                margin="normal"
                variant="outlined"
                style={{margin: "0"}}
                />
                <Button type='submit' variant="outlined">
                  Submit
                </Button>
              </form>
              <Donut results={this.state.results} search={this.state.search} submitted={this.state.submitted} />
            </div>
            <div className='comments-wrapper'>
              <Comments />
            </div>
          </div>
        )
    }

}

export default SearchDisbursements
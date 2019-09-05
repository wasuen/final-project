import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'


class Donut extends Component {

    colorHandler = (array) =>{
        const r = () => Math.floor(Math.random() * 256)
        const b =  () =>Math.floor(Math.random() * 256)
        const g =  () =>Math.floor(Math.random() * 256)
        console.log(r,g,b)
        return array.map(p => `rgb(${r()},${b()},${g()})`)
    }

    dataHandler = (props) => {
        const data = {
            labels: props.results.map(r => {return r.employer}),
            datasets: [{
                data: props.results.map(r => {return r.total}),
                backgroundColor: this.colorHandler(this.props.results),
                hoverBackgroundColor: this.colorHandler(this.props.results)
            }]
        }
        return data
    }

    render(){
        return(
            <div>
                <Doughnut data={this.dataHandler(this.props)} />
            </div>
        )
    }
}

export default Donut;
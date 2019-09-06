import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'


class Donut extends Component {

    colorHandler = (array, o) =>{
        const r = () => Math.floor(Math.random() * 256)
        const b =  () =>Math.floor(Math.random() * 256)
        const g =  () =>Math.floor(Math.random() * 256)
        return array.map(p => `rgba(${r()},${b()},${g()}, ${o})`)
    }

    hover = (array) =>{
        return array.map(c => {
           const color =  c.split(",")
           color[3] = ".5)"
           color.join(",")
            return color
        })
    }

    dataHandler = (props) => {
        const colorArray = this.colorHandler(this.props.results, 1)
        const data = {
            labels: props.results.map(r => {return r.employer || r.purpose}),
            datasets: [{
                data: props.results.map(r => {return r.total}),
                backgroundColor: colorArray,
                hoverBackgroundColor: this.hover(colorArray)
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
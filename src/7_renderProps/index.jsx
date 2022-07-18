import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <A />
            </div>
        )
    }
}

class A extends Component {
    render() {
        return (
            <div className='A'>
                <h3>我A是组件</h3>
                <B />
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='B'>
                <h3>我B是组件</h3>
            </div>
        )
    }
}
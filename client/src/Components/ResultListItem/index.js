import React, { Component } from 'react';

class ResultListItem extends Component {
    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }

    onClickFunction = () => {
        this.props.saveGoogleBook(this.props)
        this.getStyle();
    }
    
    render () {  
        // const {book} = this.props
        return (

            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={this.props.image} style={{maxWidth: "100px"}} alt="book"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn submitBtn" style={{backgroundColor: "#048481", marginRight: "6px"}}>View Book</a>
                        <button onClick={this.onClickFunction} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default ResultListItem;
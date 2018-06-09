import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="col-lg-4 col-sm-6 work-tile"> 
                <a className="work-box" href={this.props.link} target="_blank">
                    <img src={this.props.img_src} className="img-responsive"/>
                    <div className="work-box-caption">
                        <div className="work-box-caption-content">
                            <div className="work-name">
                                {this.props.title}
                            </div>
                            <div className="work-category text-faded">
                                {this.props.caption}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}
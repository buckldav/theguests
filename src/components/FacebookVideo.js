import React from 'react'

class FacebookVideo extends React.Component {
  width = this.props.vertical ? 162 : 512;
  className = this.props.vertical ? "vertical" : "horizontal";
  height = 288;
  render() {
    return (
      <div>
        <iframe className={this.className} title={this.props.title} src={this.props.src + "&width=" + this.width} width={this.width} height={this.height} style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder={0} allowTransparency={true} allowFullScreen={true}></iframe>
      </div>
    )
  }
}

export default FacebookVideo
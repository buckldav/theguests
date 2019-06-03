import React from 'react'
import $ from 'jquery'

class FacebookVideo extends React.Component {
  state = {
    width: 0,
    className: "",
    height: 0
  }

  onResize() {
    document.location.reload();
  }

  componentDidMount() {
    // TODO: Fix vertical video for mobile
    window.onresize = this.onResize.bind(this);
    let containerWidth = $("#container").width();
    if (containerWidth < 560) {
      let width = this.props.vertical ? 315 : containerWidth;
      let height = this.props.vertical ? 560 : containerWidth * 288 / 512;
      this.setState({
        width: Math.round(width),
        className: this.props.vertical ? "vertical" : "horizontal",
        height: Math.round(height)
      })
    } else {
      if (containerWidth < 1200) {
        containerWidth = 1200;
      }
      let width = this.props.vertical ? containerWidth * 162 / 1314 : containerWidth * 512 / 1314;
      let height = containerWidth * 288 / 1314;
      this.setState({
        width: Math.round(width),
        className: this.props.vertical ? "vertical" : "horizontal",
        height: Math.round(height)
      })
    }
  }

  render() {
    return (
      <div>
        <div className="lds-dual-ring"></div>
        <iframe className={this.state.className} title={this.props.title} src={this.props.src + "&width=" + this.state.width} width={this.state.width} height={this.state.height} style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder={0} allowTransparency={true} allowFullScreen={true}></iframe>
      </div>
    )
  }
}

export default FacebookVideo
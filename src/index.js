import React from "react"
import PropTypes from "prop-types"

class HoverImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: this.props.src
    }
  }

  handleClick = e => {
    if (this.props.disabled == true) {
    } else if (!!this.props.onClick) {
      this.props.onClick(e)
    }
  }

  mouseOver = () => {
    this.setState({ src: this.props.hoverSrc })
  }

  mouseOut = () => {
    this.setState({ src: this.props.src })
  }

  render() {
    return (
      <img
        src={this.state.src}
        style={this.props.style}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        onClick={this.handleClick}
        className={this.props.className}
      />
    )
  }
}
HoverImage.propTypes = {
  hoverSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default HoverImage

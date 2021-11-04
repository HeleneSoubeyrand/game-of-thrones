import React from "react";


class Button extends React.Component {

  render() {
      const { value, handleClick, isSelected } = this.props
      console.log(isSelected)
    return (
        <div>
            {isSelected ?
            (
            <button 
                type="submit" 
                className="btn btn-primary mx-2" 
                onClick={() => handleClick(value)}
            >
            {value}
            </button>
            ) : (
            <button 
                type="submit" 
                className="btn btn-outline-primary mx-2" 
                onClick={() => handleClick(value)}
            >
            {value}
            </button>
            )
            }
        </div>
    )
  }

}  

export default Button
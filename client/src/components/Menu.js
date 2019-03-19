import React from "react";
import { Title, Box, } from "bloomer";
// import Food from "./Food";
import axios from "axios";

class Menu extends React.Component {
  state = { foods: [], }
  
   componentDidUpdate() {
     if (this.state.foods === undefined)
     axios.get(`api/menus/${this.props.id}/foods`)
       .then( res => {
         this.setState({ foods: res.data, });
       })
       .catch( err => {
        console.log(err);
      })
   }

  render() {
    return(
    <div>
      <Box>
        <Title tag='h1'>
          { this.props.name }
        </Title>
        <button>
          Edit
        </button>
        <button>
          Delete
        </button>
      </Box> 
    </div>
      )
    }
}

export default Menu;

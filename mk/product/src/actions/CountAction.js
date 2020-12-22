
const INCREASEMENT = "INCREASEMENT";
const DECREASEMENT = "DECREASEMENT";
const CHANGE = "CHANGE";

const increase = () => ({type: INCREASEMENT});
const decrease = () => ({type: DECREASEMENT});
const change = (value) => ({type: CHANGE, value});

export default {
  INCREASEMENT,
  DECREASEMENT,
  CHANGE,
  increase,
  decrease,
  change
  
}
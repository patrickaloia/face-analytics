import colors from '../../generalStyles/colors'
import classes from '../../generalStyles/classes'
import { Constants } from 'expo'

export default {
  summary: {
    ...classes.container
  },
  wrapper: {
    ...classes.wrapper,
    width: "100%",
    paddingTop: Constants.statusBarHeight + 20,
  },
  scroll: {flexGrow: 1, minWidth:"100%"},
  cardTitle: {fontSize: 25},
  cardImage: {height: 150, width: 150},
  centerX: {alignItems: 'center'},
  colors: ["#9b59b6", "#9b59b6", "#582d69"],
  text: classes.sectionText
}
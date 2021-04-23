import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 80,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  iconStyle: {
    //position: "relative",
    height: 80,
    width: 56,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  iconText: { 
    textAlign: 'center',
  },
  menuContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 2,
  },
  menuStyle: {
    top:20,
  },
  menuTextStyle:{
    height: 48,
    width: 375,    
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontSize: 15,
  },
  categoryStyle: {
    height: 17,
    width: 'auto',
    color: '#c4c4c4',
    fontSize: 12,
    
    
  },
  nameStyle: {
    width:232,
    height:32,
    top:52,
    flex:1 ,
    fontSize: 24,
    color: 'black',
    bottom:8,
    fontWeight: 'bold',
  },
});

export default styles;
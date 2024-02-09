import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  //Estilos del boton
  boton: {
    //backgroundColor:'#5affcc',
    padding: 5,
    borderRadius: 5,
    width: 80,
    height: 50,
    backgroundColor:'grey',
    borderColor: 'grey',
    borderWidth: 2,
    //margin:3,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign:'center',
    justifyContent: 'center'
  },
  textoB: {
    color: 'white',
    fontSize: 20,
    textAlign:'center',
    marginRight:38
  },
  logoB: {
    height: 35,
    width: 35,
    marginRight: 7
  },
  //Estilos de la caja
  boxContainer: {
    borderColor: 'grey',
    borderWidth: 5,
    borderRadius: 5,
    height: 70,
    margin: 15,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5,
    fontStyle:'red',
    backgroundColor:'white'
  },
  TextBox: {
    fontSize: 35
  },
  //estilo de contenedor de los botones
  botonescontainer: {
    padding: 10,
    flexDirection: 'row',    
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor:'black'
  }
})
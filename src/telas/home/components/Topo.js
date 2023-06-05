import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { loadingTopo } from '../../../services/loadingdata';
import Logo from '../../../assets/logo.png';


class Topo extends React.Component {
    state = {
        topo: {
            welcometxt: '',
            legenda: '',
        }
    }

    refreshTopo() {
        const retorno = loadingTopo()
        this.setState({ topo : retorno})
    }

    componentDidMount() {
        this.refreshTopo();
    }

    render() {
        return (
            <View style={styles.topo}>
              <Image source={Logo} style={styles.image} />
              <Text style={styles.welcometxt} >{ this.state.topo.welcometxt }</Text>
              <Text style={styles.legenda} >{ this.state.topo.legenda }</Text>
            </View>
          )
    }
}

export default Topo

const styles = StyleSheet.create({
    topo: {
        backgroundColor: "#f6f6f6",
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    welcometxt: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 46,
        fontWeight: 'bold',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
    },
})
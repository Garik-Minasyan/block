import React ,{Component} from 'react';

function Header() {
    return(
        <div style={styles.headerdiv}>
            <div style={styles.menudiv}>
                <div style={styles.itemdiv}>HOME</div>
                <div style={styles.itemdiv}>CONTACT</div>
                <div style={styles.itemdiv}>MENU</div>
            </div>

        </div>
    );
};

const styles = {
    headerdiv:{
        width:'100%',
        height:'100px',
        backgroundColor:'#941D1D',
        margin:'0px',
        padding:'0px',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },

    menudiv:{
        width:'100%',
        height:'100px',
        backgroundColor:'#941D1D',
        margin:'0px',
        padding:'0px',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    itemdiv:{
        marginLeft:'50px',
        cursor:'pointer',
        userSelect:'none',
        
    }
}

export default Header;
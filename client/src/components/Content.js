import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';
import { connect } from 'react-redux';
import { getCategori,getAdvert } from '../actions/advertActions';
import PropTypes from 'prop-types';


class AppContent extends Component {

    static propTypes = {
        getCategori: PropTypes.func.isRequired,
        getAdvert: PropTypes.func.isRequired
    };

    componentDidMount(){
        this.props.getCategori();
        this.props.getAdvert();
    }
    render(){

        const { categories,adverts } = this.props.categori;
        return(
            <Container>
        <Row>
            <Col style={{marginLeft:'-100px',marginRight:'-80px'}} md="6" xs="12">
                <ListGroup>
                    
                        <ListGroupItem>Categories</ListGroupItem>
                        {categories.map(({ _id, name }) => (
                        <ListGroupItem>{name}</ListGroupItem>))
                        }
                    
                </ListGroup>
              
            </Col>
            <Col style={{marginLeft:'160px'}} md="6" xs='12'>
              
            <ListGroup>
                     
                     {adverts.map(({ _id, advertname,cost }) => (
                     <ListGroupItem> Advert Name: {advertname} - Cost: {cost} </ListGroupItem>))}
                 
             </ListGroup>
              
            </Col>
        </Row>
        
      </Container>
        );
    };

}


// const styles={
//     backgr:{
//         backgroundColor:'black'
//     },
//     kapla:{
//         flex:1
//     }
// }



const mapStateToProps = state => ({
    categori: state.categori
});

export default connect(mapStateToProps, { getCategori,getAdvert })(AppContent);



import React,{ Component } from 'react';
import Navbar from './Navbar';
import { Button, Form, FormGroup, Label, Input,Container,Row } from 'reactstrap';
import { connect } from 'react-redux';
import { getCategori, addAdverts } from '../actions/advertActions';
import PropTypes from 'prop-types';
import { BrowserRouter as Link } from 'react-router-dom';

class Addadvert extends Component{

    static propTypes = {
        getCategori: PropTypes.func.isRequired
    };

    componentDidMount(){
        this.props.getCategori();
    };

    state={
        advertname:'',
        author:'',
        description:'',
        cost:'',
        categori:''
    };


    onChange_advertname = (e) => {
        this.setState({
            advertname: e.target.value,
        });
        console.log(e.target.advertname);
        console.log(this.state.advertname);
    };
    onChange_author = (e) => {
        this.setState({
            author: e.target.value
        });
        console.log(e.target.author);
        console.log(this.state.author);
    };
    onChange_description = (e) => {
        this.setState({
            description: e.target.value
        });
        console.log(e.target.description);
        console.log(this.state.description);
    };
    onChange_cost = (e) => {
        this.setState({
            cost: e.target.value
        });
        console.log(e.target.cost);
        console.log(this.state.cost);
    };
    onChange_categori = (e) => {
        this.setState({
            categori: e.target.value
        });
        console.log(e.target.categori);
        console.log(this.state.categori);
    };

    onSubmit = e => {
        e.preventDefault();

        const newAdvert = {
            advertname: this.state.advertname,
            author: this.state.author,
            document: this.state.description,
            cost: this.state.cost,
            categories: this.state.categori
        };
        console.log(newAdvert);
        this.props.addAdverts(newAdvert);
        alert("SUCCESS!");
    };

render(){
    const { categories } = this.props.categori;
    return(
        <div>
        <Navbar />
        <Container>
        <Row>
        <Form style={{flex:1}} onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="exampleName">Advert Name</Label>
          <Input type="text" name="advertname" id="exampleName" placeholder="Please Enter Advert Name" onChange={this.onChange_advertname} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Author</Label>
          <Input type="text" name="author" id="exampleAuthor" placeholder="Enter the Author"  onChange={this.onChange_author}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="description" id="exampleText" onChange={this.onChange_description}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCost">Cost</Label>
          <Input type="number" name="cost" id="exampleCost" placeholder="Please Enter Cost" onChange={this.onChange_cost}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Categories</Label>
          <Input type="select" name="categori" id="exampleSelect" onChange={this.onChange_categori}>
            { categories.map(({name}) => (<option>{name}</option>))}
          </Input>
        </FormGroup>
        <Button color="primary" size="lg" block>add</Button>
      </Form>
      </Row>
      </Container>
      <hr/>
      <hr/>
    </div>
    );
}
}


const mapStateToProps = state => ({
    categori: state.categori,
});



export default connect(mapStateToProps, { getCategori,addAdverts })(Addadvert);
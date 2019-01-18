import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { 
    getProducts,
    pushProduct,
    updateProduct,
    deleteProduct
} from "../store/actions/product";

class Products extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            titulo: '',
            descricao: '',
            preco: '',
            openedModal: null,
            validForm: true,
            productId: '',
        }
        this.setTitle = this.setTitle.bind(this)
        this.setDescription = this.setDescription.bind(this)
        this.setPrice = this.setPrice.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.fieldsAreValid = this.fieldsAreValid.bind(this)
        this.createProduct = this.createProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    render( ) {
        const { products } = this.props;

        return (
            <div>
                <Helmet>
                    <title>Lista de produtos - Casa do código</title>
                    <meta name="description" content="Listagem de produtos da casa do código" />
                </Helmet>
                <h3 className="float-left" >
                    Lista de produtos
                </h3>
                <div 
                className="btn btn-primary float-right"  
                onClick={() => this.openModal("Adicionar produto")}>
                    Adicionar
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="product-list">
                        { products != undefined ? products.map( ( product ) => (
                            <tr key={ product.id }>
                                <th>{ product.id }</th>
                                <td>{ product.titulo }</td>
                                <td>{ product.descricao }</td>
                                <td>{ product.preco }</td>
                                <td className="product-edit">
                                    <i 
                                    className="far fa-edit"
                                    onClick={() => this.openModal("Atualizar produto", product)}/>
                                </td>
                                <td className="product-remove">
                                    <i 
                                    className="far fa-trash-alt" 
                                    onClick={() => this.deleteProduct(product.id)}></i>
                                </td>
                            </tr>
                        ) ) : false }
                    </tbody>
                </table>
                {this.state.openedModal != null ? (
                    <div className="modal d-block">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        {this.state.openedModal}
                                    </h5>
                                    <button 
                                    className="close"
                                    onClick={this.closeModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <input 
                                            className="form-control" 
                                            placeholder="Título"
                                            value={this.state.titulo} 
                                            onChange={this.setTitle}/>
                                        </div>
                                        <div className="form-group">                                
                                            <input 
                                            className="form-control" 
                                            placeholder="Descrição"
                                            value={this.state.descricao} 
                                            onChange={this.setDescription}/>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            type="number"
                                            className="form-control" 
                                            placeholder="Preço"
                                            value={this.state.preco} 
                                            onChange={this.setPrice}/>
                                        </div>
                                    </form>
                                    {!this.state.validForm ? (
                                        <p className="alert alert-danger" id="modal-add-error">
                                        Por favor, preencha todos os campos.
                                        </p>
                                    ) : (
                                        <span></span>
                                    )}
                                    
                                </div>
                                <div className="modal-footer">
                                    <button 
                                    className="btn btn-secondary" 
                                    onClick={this.closeModal}>Cancelar</button>
                                    <button 
                                    className="btn btn-primary" id="saveNewProduct" onClick={
                                        this.state.openedModal == "Adicionar produto" ?
                                        this.createProduct : 
                                        this.updateProduct
                                    }>Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <span></span>
                )} 
            </div> 
        );  
    }
    setTitle(event){
        this.setState({
            titulo: event.target.value
        })
    }
    setDescription(event){
        this.setState({
            descricao: event.target.value
        })
    }
    setPrice(event){
        this.setState({
            preco: event.target.value
        })
    }
    openModal(context, product){
        this.setState({
            openedModal: context,
        })
        if(product != undefined){
            this.setState({
                productId: product.id,
                titulo: product.titulo,
                descricao: product.descricao,
                preco: product.preco
            })
        }
    }
    closeModal(){
        this.setState({
            openedModal: null,
            titulo: "",
            descricao: "",
            preco: ""
        })
    }
    fieldsAreValid(fields){
        return Object.values(fields).every(attribute => (attribute !== null && attribute != ''));
    }
    createProduct(){
        const fields = {
            titulo: this.state.titulo,
            descricao: this.state.descricao,
            preco: this.state.preco
        }
        const valid = this.fieldsAreValid(fields)

        this.setState({
            validForm: valid
        })
        
        if(valid){
            fetch("http://localhost:3000/product", {
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(fields)
            }).then(response => response.json())
            .then((response) => {
                this.props.pushProduct(response)
                this.closeModal()
            })
        }
    }
    updateProduct(){
        const fields = {
            id: this.state.productId,
            titulo: this.state.titulo,
            descricao: this.state.descricao,
            preco: this.state.preco
        }
        const valid = this.fieldsAreValid(fields)

        this.setState({
            validForm: valid
        })
        
        if(valid){
            fetch("http://localhost:3000/product", {
                method:"PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(fields)
            })
            .then(() => {
                this.props.updateProduct(fields)
                this.closeModal()
            })
        }
    }
    deleteProduct(id){
        if(id != undefined){
            fetch("http://localhost:3000/product/"+id, {
                method:"DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                this.props.deleteProduct(id)
            })
        }
    }
    componentDidMount( ) {
        if ( this.props.products.length <= 0 ) {
            fetch( "http://localhost:3000/products",{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => this.props.getProducts(response))
        }
    }

}

const mapStateToProps =  state  => ( {
    products: state.products,
} );

const mapDispatchToProps = {
    getProducts,
    pushProduct,
    updateProduct,
    deleteProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);


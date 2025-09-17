import PropTypes from 'prop-types';

function List({marca = "não tem marca dodoi!!", lancamento = 0}){                   
    return(
        <>  {/* Fragment- é ultilizado para simplificar o Doom */}
        <h1>Lista de linkado</h1>
        <ul>
            <li>  {marca} - {lancamento} </li>
        </ul>
        </>
    )
}

 List.propTypes ={
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number,
}

List.defaultProps = { /* é recomendade usar valores dafults como pode ser visto acima nas propriedades */
    marca: "Não tem marca dodoi!!!",
    lancamento: 0,
}

export default List
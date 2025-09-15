import PropTypes from 'prop-types';

function List({marca, lancamento}){                   
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

List.defaultProps = { {/* ver por que o valor default não quer funcionar */}
    marca: "Não tem marca dodoi!!!",
    lancamento: 0,
}

export default List
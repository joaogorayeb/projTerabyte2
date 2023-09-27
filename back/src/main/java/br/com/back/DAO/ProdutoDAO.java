package br.com.back.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.back.modelo.ProdutoModelo;

public interface ProdutoDAO extends CrudRepository<ProdutoModelo, Integer> {
    
}

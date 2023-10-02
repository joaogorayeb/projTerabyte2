package br.com.back.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.back.DAO.ProdutoDAO;
import br.com.back.modelo.ProdutoModelo;

@RestController
@CrossOrigin("*")
public class ProdutoControle {
    @Autowired
    ProdutoDAO produtoDAO;


    @GetMapping
    public Iterable<ProdutoModelo> listar(){
        return produtoDAO.findAll();
    }

    @PostMapping
    public ResponseEntity<ProdutoModelo> cadastrar(@RequestParam("img") MultipartFile img, @RequestParam("descricao") String descricao, @RequestParam("preco") Double preco, @RequestParam("tipo") Integer tipo){
        try {
            byte[] imgByte = img.getBytes();
            ProdutoModelo modelo = new ProdutoModelo();
            modelo.setImg(imgByte);
            modelo.setDescricao(descricao);
            modelo.setPreco(preco);
            modelo.setTipo(tipo);
            return new ResponseEntity<ProdutoModelo>(produtoDAO.save(modelo), HttpStatus.CREATED);
        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }

    @PutMapping
    public ResponseEntity<ProdutoModelo> alterar(@RequestBody ProdutoModelo produtoModelo){
        return new ResponseEntity<ProdutoModelo>(produtoDAO.save(produtoModelo), HttpStatus.ACCEPTED);
    }
    
    @DeleteMapping("/{id}")
    public void remover(@PathVariable Integer id){
        produtoDAO.deleteById(id);
    }
}

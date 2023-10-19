package br.com.back.controle;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping
    public ProdutoModelo getProduto(@PathVariable Integer id){
        return produtoDAO.findById(id).orElse(null);
    }

    private byte[] imagem(Integer id){
        Optional<ProdutoModelo> produtoModelo = produtoDAO.findById(id);
        return produtoModelo.orElse(null).getImg();
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
    public ResponseEntity<ProdutoModelo> alterar(@RequestParam("img") MultipartFile img, @RequestParam("id") Integer id, @RequestParam("descricao") String descricao, @RequestParam("preco") Double preco, @RequestParam("tipo") Integer tipo){
        try {
            byte[] imgByte;
            ProdutoModelo modelo = new ProdutoModelo();
            if(img.isEmpty()){
                imgByte = imagem(id);
            }else{
                imgByte = img.getBytes();
            }
            modelo.setImg(imgByte);
            modelo.setDescricao(descricao);
            modelo.setPreco(preco);
            modelo.setTipo(tipo);
            modelo.setId(id);
            return new ResponseEntity<ProdutoModelo>(produtoDAO.save(modelo), HttpStatus.CREATED);
        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }        
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ProdutoModelo> remover(@PathVariable Integer id){
        ProdutoModelo produto = produtoDAO.findById(id).orElse(null);
        if(id != null){
            produtoDAO.deleteById(id);
            return new ResponseEntity<>(produto, HttpStatus.OK);
        }else{
            return new ResponseEntity<ProdutoModelo>(HttpStatus.NOT_FOUND);
        }
    }
}

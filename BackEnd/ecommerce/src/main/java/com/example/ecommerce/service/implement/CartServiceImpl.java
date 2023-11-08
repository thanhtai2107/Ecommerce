package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.CartDTO;
import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.mapper.CartDTOMapper;
import com.example.ecommerce.repositories.CartItemRepository;
import com.example.ecommerce.repositories.CartRepository;
import com.example.ecommerce.repositories.ProductRepository;
import com.example.ecommerce.request.CartReq;
import com.example.ecommerce.service.CartItemService;
import com.example.ecommerce.service.CartService;
import com.example.ecommerce.service.ProductService;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final CartItemService cartItemsService;
    private final CartItemRepository cartItemRepository;
    private final ProductService productService;
    private final ProductRepository productRepository;
    private final CartDTOMapper cartDTOMapper;
    public CartServiceImpl(CartRepository cartRepository, CartItemService cartItemsService, CartItemRepository cartItemRepository, ProductService productService, ProductRepository productRepository, CartDTOMapper cartDTOMapper) {
        this.cartRepository = cartRepository;
        this.cartItemsService = cartItemsService;
        this.cartItemRepository = cartItemRepository;
        this.productService = productService;
        this.productRepository = productRepository;
        this.cartDTOMapper = cartDTOMapper;
    }

    @Override
    public Cart createCart(User user) {
        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem( CartReq request) throws ProductException {
        Long userId = request.userId();
        Cart cart = cartRepository.findByUserId(userId);
        Product product = productRepository.findProductById(request.productId());
        CartItem isPresent = cartItemsService.isCartItemExist(cart, product, userId);
        if (isPresent == null) {
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(request.quantity());
            cartItem.setUserId(userId);
            cartItem.setCart(cart);
            int price = request.quantity() * product.getPrice();
            cartItem.setPrice(price);
            cartItemRepository.save(cartItem);
            cart.getCartItems().add(cartItem);
            cartRepository.save(cart);
        } else {
            isPresent.setQuantity(request.quantity());
            cartItemRepository.save(isPresent);
        }
        return "Item add to Cart";
    }

    @Override
    public CartDTO findUserCart(Long userId) {
        Cart cart = cartRepository.findByUserId(userId);
        int totalPrice = 0;
        int totalItem = 0;
        for (CartItem cartItem : cart.getCartItems()) {
            totalPrice += cartItem.getQuantity() * cartItem.getProduct().getPrice();
            totalItem += cartItem.getQuantity();
        }
        cart.setTotalItem(totalItem);
        cart.setTotalPrice(totalPrice);
        Cart cartSaved =cartRepository.save(cart);
        return cartDTOMapper.apply(cartSaved);
    }
}

package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.CartItemDTO;
import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.repositories.CartRepository;
import com.example.ecommerce.service.CartItemService;
import com.example.ecommerce.service.CartService;
import com.example.ecommerce.service.ProductService;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final CartItemService cartItemsService;
    private final ProductService productService;

    public CartServiceImpl(CartRepository cartRepository, CartItemService cartItemsService, ProductService productService) {
        this.cartRepository = cartRepository;
        this.cartItemsService = cartItemsService;
        this.productService = productService;
    }

    @Override
    public Cart createCart(User user) {
        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem( CartItemDTO request) throws ProductException {
        Long userId = request.userId();
        Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findById(request.productId());
        CartItem isPresent = cartItemsService.isCartItemExist(cart, product, userId);
        if (isPresent == null) {
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(request.quantity());
            cartItem.setUserId(userId);
            cartItem.setCart(cart);

            int price = request.quantity() * product.getPrice();
            cartItem.setPrice(price);
            cartItemsService.createCartItem(cartItem);
            cart.getCartItems().add(cartItem);
        }
        return "Item add to Cart";
    }

    @Override
    public Cart findUserCart(Long userId) {
        Cart cart = cartRepository.findByUserId(userId);
        int totalPrice = 0;
        int totalItem = 0;
        for (CartItem cartItem : cart.getCartItems()) {
            totalPrice += cartItem.getQuantity() * cartItem.getProduct().getPrice();
            totalItem += cartItem.getQuantity();
        }
        cart.setTotalItem(totalItem);
        cart.setTotalPrice(totalPrice);
        return cart;
    }
}

package com.example.ecommerce.service.implement;

import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.CartItemException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.repositories.CartItemRepository;
import com.example.ecommerce.repositories.CartRepository;
import com.example.ecommerce.service.CartItemService;
import com.example.ecommerce.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemServiceImpl implements CartItemService {
    private CartItemRepository cartItemRepository;
    private UserService userService;
    private CartRepository cartRepository;

    public CartItemServiceImpl(CartItemRepository cartItemRepository, UserService userService, CartRepository cartRepository) {
        this.cartItemRepository = cartItemRepository;
        this.userService = userService;
        this.cartRepository = cartRepository;
    }

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());

        CartItem createdCartItem = cartItemRepository.save(cartItem);
        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long id, Long userId, CartItem cartItem) throws CartItemException, UserException {
        CartItem cartItem1 = findCartItemById(id);
        User user = userService.findUserById(userId);
        cartItem1.setQuantity(cartItem.getQuantity());
        cartItem1.setPrice(cartItem1.getQuantity() * cartItem1.getProduct().getPrice());
        return cartItemRepository.save(cartItem1);
    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, Long userId) {
        CartItem cartItem = cartItemRepository.isCartItemExist(cart, product, userId);

        return cartItem;
    }

    @Override
    public String deleteCartItem(Long id, Long userId) throws CartItemException, UserException {
        CartItem cartItem = findCartItemById(id);
        User user = userService.findUserById(cartItem.getUserId());
        User req = userService.findUserById(userId);
        if (user.getId().equals(req.getId())) {
            cartItemRepository.delete(cartItem);
        } else  {
            throw new UserException("Can't remove another user  item");
        }
        return "Delete cart item to cart";
    }

    @Override
    public CartItem findCartItemById(Long id) throws CartItemException {
        Optional<CartItem> cartItem = cartItemRepository.findById(id);
        if (cartItem.isPresent()) {
            return cartItem.get();
        }
        throw new CartItemException("Cart item not found");
    }
}

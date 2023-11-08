package com.example.ecommerce.service.implement;

import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.CartItemException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.repositories.CartItemRepository;
import com.example.ecommerce.repositories.CartRepository;
import com.example.ecommerce.repositories.UserRepository;
import com.example.ecommerce.service.CartItemService;
import com.example.ecommerce.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemServiceImpl implements CartItemService {
    private final CartItemRepository cartItemRepository;
    private final UserService userService;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    public CartItemServiceImpl(CartItemRepository cartItemRepository, UserService userService, CartRepository cartRepository, UserRepository userRepository) {
        this.cartItemRepository = cartItemRepository;
        this.userService = userService;
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
    }

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());
        CartItem createdCartItem = cartItemRepository.save(cartItem);
        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long id, Long userId, CartItem cartItem) throws CartItemException {
            CartItem cartItem1 = findCartItemById(id);
            User user = userRepository.findUserById(userId);
            if(cartItem.getQuantity() < cartItem.getProduct().getQuantity()) {
                cartItem1.setQuantity(cartItem.getQuantity());
                cartItem1.setPrice(cartItem1.getQuantity() * cartItem1.getProduct().getPrice());
                return cartItemRepository.save(cartItem1);
            }
            throw  new CartItemException("Cap nhat gio hang loi");

    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, Long userId) {
        return cartItemRepository.isCartItemExist(cart, product, userId);
    }

    @Override
    public String deleteCartItem(Long id, Long userId) throws CartItemException, UserException {
        CartItem cartItem = findCartItemById(id);
        User user = userRepository.findUserById(cartItem.getUserId());
        User req = userRepository.findUserById(userId);
        if (user.getId().equals(req.getId())) {
            cartItemRepository.delete(cartItem);
        } else  {
            throw new UserException("Khong the xoa san pham ");
        }
        return "Xoa san pham khoi gio hang";
    }

    @Override
    public CartItem findCartItemById(Long id) throws CartItemException {
        Optional<CartItem> cartItem = cartItemRepository.findById(id);
        if (cartItem.isPresent()) {
            return cartItem.get();
        }
        throw new CartItemException("Khong tim thay cart item");
    }
}

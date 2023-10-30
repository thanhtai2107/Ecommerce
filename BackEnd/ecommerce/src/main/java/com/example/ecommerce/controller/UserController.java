package com.example.ecommerce.controller;

import com.example.ecommerce.dto.CartItemDTO;
import com.example.ecommerce.entity.Address;
import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.Orders;
import com.example.ecommerce.exception.CartItemException;
import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.request.CreateOrderReq;
import com.example.ecommerce.service.CartItemService;
import com.example.ecommerce.service.CartService;
import com.example.ecommerce.service.OrderService;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class UserController {

    private final CartService cartService;
    private final CartItemService cartItemService;
    private final OrderService orderService;

    public UserController(CartService cartService, CartItemService cartItemService, OrderService orderService) {
        this.cartService = cartService;
        this.cartItemService = cartItemService;
        this.orderService = orderService;
    }

    @GetMapping("/cart/{userId}")
    public ResponseEntity<Cart> getCart(@PathVariable Long userId) {
        return ResponseEntity.ok(cartService.findUserCart(userId));
    }
    @PostMapping("/cart/addToCart")
    public ResponseEntity<String> addToCart(@RequestBody CartItemDTO cartItemDTO) throws ProductException {

        try {
            return ResponseEntity.ok(cartService.addCartItem(cartItemDTO));
        } catch (ProductException e) {
            throw new ProductException("Add product to cart fail");
        }
    }

    @DeleteMapping("/cart/deleteItem/{id}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Long id, @RequestParam Long userId) throws CartItemException, UserException {
        return ResponseEntity.ok(cartItemService.deleteCartItem(id, userId));
    }

    @PutMapping("/cart/update/{id}")
    public ResponseEntity<CartItem> updateCart(@PathVariable Long id,
                                               @RequestParam Long userId,
                                               @RequestBody CartItem cartItem) throws CartItemException, UserException {
        return ResponseEntity.ok(cartItemService.updateCartItem(id, userId, cartItem));
    }
    @PostMapping("/checkout")
    public ResponseEntity<Orders> createOrder(@RequestBody CreateOrderReq createOrderReq) throws UserException {
        return ResponseEntity.ok(orderService.createOrder(createOrderReq));
    }
}
